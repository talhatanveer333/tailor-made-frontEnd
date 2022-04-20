import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { scale } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "../components/AppText";
import Catalog from "../components/CatalogList";
import OtherOptionsList from "../components/TailorHomeCardList";
import TestimonialList from "../components/TestimonialList";

function TailorDetailsScreen({ route, props }) {
  const navigation = useNavigation();
  const [ratingStars, setRatingStars] = useState([]);
  const wholeRating = Math.round(route.params.rating);
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 5; i++) {
      temp.push(
        <AntDesign
          name={i < wholeRating ? "star" : "staro"}
          size={scale(15)}
          color={colors.third}
        />
      );
    }
    setRatingStars(temp);
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
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
            <Pressable
              onPress={() =>
                navigation.push("FeedbackScreen", {
                  name: route.params.name,
                  imageUrl: route.params.imageUrl,
                  id: route.params.id,
                })
              }
              style={{
                flexDirection: "row",
                right: scale(5),
                position: "absolute",
              }}
            >
              {ratingStars}
            </Pressable>
          </View>
          <AppText
            numberOfLines={3}
            text={`${route.params.address.street}, ${route.params.address.province}`}
            fontSize={fonts.fontSize.heading}
            fontWieght={fonts.fontWiegth.heading}
            color={colors.hint}
            fontFamily={fonts.fontFamily.primary}
          />
        </View>
        <View
          style={{
            paddingHorizontal: scale(10),
            backgroundColor: colors.screenBackground,
            paddingTop: scale(20),
          }}
        >
          <AppText
            numberOfLines={1}
            text="Catalog"
            fontSize={fonts.fontSize.headingPro1}
            fontWieght={fonts.fontWiegth.headingPro}
            color={colors.third}
            fontFamily={fonts.fontFamily.primary}
          />
        </View>
        <View style={{ backgroundColor: colors.screenBackground }}>
          <Catalog tailorId={route.params.id} />
        </View>
        <View
          style={{
            paddingHorizontal: scale(10),
            backgroundColor: colors.screenBackground,
            paddingTop: scale(20),
          }}
        >
          <AppText
            numberOfLines={1}
            text="Testimonials"
            fontSize={fonts.fontSize.headingPro1}
            fontWieght={fonts.fontWiegth.headingPro}
            color={colors.third}
            fontFamily={fonts.fontFamily.primary}
          />
        </View>
        <View style={{ backgroundColor: colors.third }}>
          <TestimonialList userId={route.params.id} />
        </View>
        <View
          style={{
            paddingHorizontal: scale(10),
            backgroundColor: colors.screenBackground,
            paddingTop: scale(20),
          }}
        >
          <AppText
            numberOfLines={1}
            text="Other Options"
            fontSize={fonts.fontSize.headingPro1}
            fontWieght={fonts.fontWiegth.headingPro}
            color={colors.third}
            fontFamily={fonts.fontFamily.primary}
          />
        </View>
        <View style={{ backgroundColor: colors.screenBackground }}>
          <OtherOptionsList />
        </View>
      </View>
    </ScrollView>
  );
}

export default TailorDetailsScreen;
