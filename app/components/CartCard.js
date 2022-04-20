import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { scale } from "react-native-size-matters";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "./AppText";
import CartSwipeable from "./CartSwipeable";

function CartCard(props) {
  return (
    <Swipeable
      renderRightActions={() => <CartSwipeable onPress={props.onPress} />}
    >
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Image
            style={{
              borderRadius: scale(35),
              borderWidth: scale(1),
              borderColor: colors.third,
            }}
            resizeMode={"cover"}
            source={{
              uri: `${props.imageUrl}`,
              width: scale(60),
              height: scale(60),
            }}
          />
          <View
            style={{
              paddingLeft: scale(10),
              paddingTop: scale(5),
              //justifyContent:'center',
              width: scale(200),
            }}
          >
            <AppText
              numberOfLines={1}
              text={props.title}
              fontFamily={fonts.fontFamily.primary}
              fontWieght={fonts.fontWiegth.heading}
              fontSize={fonts.fontSize.heading}
              color={colors.third}
            />
            <AppText
              numberOfLines={3}
              text={props.details}
              fontFamily={fonts.fontFamily.primary}
              fontWieght={fonts.fontWiegth.text}
              fontSize={fonts.fontSize.text}
              color={colors.hint}
            />
          </View>
          <View
            style={{
              width: scale(55),
              position: "absolute",
              alignSelf: "center",
              right: scale(1),
            }}
          >
            <AppText
              numberOfLines={1}
              text={props.price}
              fontFamily={fonts.fontFamily.funky}
              fontWieght={fonts.fontWiegth.headingPro}
              fontSize={fonts.fontSize.headingPro}
              color={colors.price}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(13),
    backgroundColor: colors.secondary,
    padding: scale(7),
    elevation: scale(5),
    overflow: "hidden",
    marginTop: scale(10),
    flexDirection: "row",
    borderWidth: scale(1),
    borderColor: colors.third,
  },
});

export default CartCard;
