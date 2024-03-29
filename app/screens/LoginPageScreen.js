import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import InputField from "../components/InputField";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import fontConfig from "../config/fonts";
import authApi from "../api/authApi";
import authStorage from "../auth/authStorage";
import authContext from "../auth/authContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginPageScreen({ navigator }) {
  const { setUser } = useContext(authContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [err, setErr] = useState("Incorrect username or password");
  const login = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      setErr(result.data);
      return setLoginFailed(true);
    }
    // successfull login
    setLoginFailed(false);
    console.log("login");
    authStorage.storeToken(result.data);
    setUser(jwtDecode(result.data));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: colors.screenBackground1,
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={login}
        validationSchema={validationSchema}
      >
        {({ handleChange, touched, handleSubmit, setFieldTouched, errors }) => (
          <>
            {loginFailed && (
              <AppText
                text={err}
                color={colors.danger}
                fontSize={fontConfig.fontSize.heading}
                alignSelf="center"
              />
            )}
            <InputField
              autoCapitalize="none"
              autoCorrent={false}
              placeholder="Email"
              textContentType="emailAddress"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            {errors.email && touched.email && (
              <AppText
                text={errors.email}
                color={colors.danger}
                fontSize={fontConfig.fontSize.text}
                paddingLeft={15}
              />
            )}

            <InputField
              autoCapitalize="none"
              autoCorrent={false}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
            />
            {errors.password && touched.password && (
              <AppText
                text={errors.password}
                color={colors.danger}
                fontSize={fontConfig.fontSize.text}
                paddingLeft={15}
              />
            )}

            <AppButton
              title={"Next"}
              onPress={handleSubmit}
              position={"absolute"}
              bottom={10}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.screenBackgroung,
    //paddingTop: Constants.statusBarHeight+10,
  },
});

export default LoginPageScreen;
