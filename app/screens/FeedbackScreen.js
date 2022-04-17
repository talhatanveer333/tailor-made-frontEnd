import React, { useState, useEffect } from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { scale } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";

import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import InputField from "../components/InputField";

function FeedbackScreen({ tailor }) {
  const [ratingStars, setRatingStars] = useState([]);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    handleClick(0);
  }, []);
  const handleClick = (key) => {
    setRating(key);
    let ratingStarsArray = [];
    const wholeRating = Math.round(key);
    for (let i = 0; i < 5; i++) {
      ratingStarsArray.push(
        <TouchableWithoutFeedback key={i} onPress={() => handleClick(i + 1)}>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <AntDesign
              name={i < wholeRating ? "star" : "staro"}
              size={scale(40)}
              color={colors.third}
            />
          </View>
        </TouchableWithoutFeedback>
      );
      setRatingStars(ratingStarsArray);
    }
  };
  const submitForm = () => {
    alert(`Feedback submitted with rating ${rating}`);
  };
  return (
    <View
      style={{
        backgroundColor: colors.screenBackground,
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: colors.screenBackground }}>
        <Image
          style={{
            borderBottomLeftRadius: 120,
          }}
          resizeMode={"cover"}
          source={{
            uri: `${tailor.imgUrl}`,
            width: scale(350),
            height: scale(250),
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: scale(10),
          paddingTop: scale(20),
          backgroundColor: colors.screenBackground,
        }}
      >
        <AppText
          numberOfLines={1}
          text="I am"
          fontSize={fonts.fontSize.headingPro1}
          fontWieght={fonts.fontWiegth.headingPro}
          color={colors.third}
          fontFamily={fonts.fontFamily.funky}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AppText
            numberOfLines={1}
            text={tailor.name}
            fontSize={fonts.fontSize.headingPro1}
            fontWieght={fonts.fontWiegth.headingPro}
            color={colors.third}
            fontFamily={fonts.fontFamily.primary}
          />
          <View
            style={{
              flexDirection: "row",
              right: scale(5),
              position: "absolute",
            }}
          ></View>
        </View>
        <AppText
          numberOfLines={3}
          text={`Please rate my profile`}
          fontSize={fonts.fontSize.heading}
          fontWieght={fonts.fontWiegth.heading}
          color={colors.hint}
          fontFamily={fonts.fontFamily.primary}
        />
      </View>
      <View
        style={{
          padding: 30,
          flexDirection: "row",
        }}
      >
        {ratingStars}
      </View>
      <Formik initialValues={{ feedback: "" }} onSubmit={submitForm}>
        {({ handleChange, touched, handleSubmit, setFieldTouched, errors }) => (
          <>
            <InputField
              color={"white"}
              autoCapitalize="none"
              autoCorrent={false}
              placeholder="Feedback"
              textContentType="text"
              onBlur={() => setFieldTouched("feedback")}
              onChangeText={handleChange("feedback")}
            />
            <AppButton
              title={"Submit"}
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

export default FeedbackScreen;
