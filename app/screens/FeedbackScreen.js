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
import feedbackApi from "../api/feedbacksApi";

function FeedbackScreen({ route }) {
  const [ratingStars, setRatingStars] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
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
  const submitForm = async ({ comment }) => {
    try {
      //alert(`Feedback submitted with rating ${rating}`);

      const result = await feedbackApi.postTailorFeedbak(
        route.params.id,
        rating,
        comment
      );
      alert(`Feedback is submitted with rating ${rating} and ${comment}`);
    } catch (e) {
      alert("Error: " + e.message);
    }
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
          style={{ borderBottomLeftRadius: 120 }}
          resizeMode={"cover"}
          source={{
            uri: `${route.params.imageUrl}`,
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
            text={route.params.name}
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
      <Formik initialValues={{ comment: "" }} onSubmit={submitForm}>
        {({ handleChange, touched, handleSubmit, setFieldTouched, errors }) => (
          <>
            <InputField
              color={colors.primary}
              backgroundColor={colors.third}
              padding={20}
              autoCapitalize="none"
              autoCorrent={false}
              placeholder="Comment"
              textContentType="text"
              onBlur={() => setFieldTouched("comment")}
              onChangeText={handleChange("comment")}
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
