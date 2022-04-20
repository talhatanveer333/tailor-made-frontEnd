import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { scale } from "react-native-size-matters";

import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "./AppText";

function ProductCard({ id, imageUrls, title, description, price, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {imageUrls ? (
        <View
          style={{
            width: scale(135),
            height: scale(210),
            backgroundColor: colors.secondary,
            borderRadius: scale(12),
            alignItems: "center",
            overflow: "hidden",
            marginTop: scale(10),
            elevation: scale(8),
            padding: scale(7),
            marginLeft: scale(5),
            marginBottom: scale(10),
          }}
        >
          <Image
            style={{ borderRadius: scale(12) }}
            resizeMode={"cover"}
            source={{
              width: scale(120),
              height: scale(145),
              uri: imageUrls[0],
            }}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: scale(10),
              flexDirection: "column",
            }}
          >
            <AppText
              numberOfLines={1}
              text={title}
              fontSize={fonts.fontSize.heading}
              fontWeight={fonts.fontWiegth.heading}
              fontFamily={fonts.fontFamily.funky}
              color={colors.third}
            />
            <AppText
              numberOfLines={1}
              text={`${price} RS`}
              fontSize={fonts.fontSize.heading}
              fontWeight={fonts.fontWiegth.heading}
              fontFamily={fonts.fontFamily.primary}
              color={colors.third}
              paddingTop={scale(2)}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            width: scale(110),
            height: scale(110),
            backgroundColor: colors.secondary,
            borderRadius: scale(60),
            alignItems: "center",
            overflow: "hidden",
            marginTop: scale(10),
            elevation: scale(5),
            padding: scale(7),
            marginLeft: scale(5),
            marginBottom: scale(10),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText
            text={title}
            fontSize={fonts.fontSize.heading}
            fontWeight={fonts.fontWiegth.headingPro}
            fontFamily={fonts.fontFamily.funky}
            color={colors.third}
          />
          <AppText
            text={`${price} Extra`}
            fontSize={fonts.fontSize.heading}
            fontWeight={fonts.fontWiegth.headingPro}
            fontFamily={fonts.fontFamily.primary}
            color={colors.third}
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
