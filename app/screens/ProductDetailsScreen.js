import React from "react";
import { View, Image, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";

import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "../components/AppText";
import OffersList from "../components/OffersList";

function ProductDetailsScreen({ route }) {
  const item = route.params.item;
  //alert(item.imageUrl);
  return (
    <ScrollView style={{ backgroundColor: colors.screenBackground }}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        horizontal
      >
        {/* {item.imageUrl.map((url) => {
          <Image
            resizeMode={"cover"}
            source={{
              uri: url,
              width: scale(350),
              height: scale(330),
            }}
          />;
        })} */}
        <Image
          resizeMode={"cover"}
          source={{
            uri: item.imageUrl[0],
            width: scale(350),
            height: scale(330),
          }}
        />
      </ScrollView>
      <View style={{ padding: scale(10), justifyContent: "center" }}>
        <AppText
          text={item.name}
          fontFamily={fonts.fontFamily.primary}
          fontSize={fonts.fontSize.headingPro1}
          fontWeight={fonts.fontWiegth.headingPro1}
          color={colors.third}
        />
        <AppText
          text={`${item.price} RS`}
          fontFamily={fonts.fontFamily.primary}
          fontSize={fonts.fontSize.headingPro}
          fontWeight={fonts.fontWiegth.headingPro}
          color={colors.price}
        />
        <AppText
          paddingTop={scale(25)}
          text="Choose from below"
          fontFamily={fonts.fontFamily.primary}
          fontSize={fonts.fontSize.headingPro}
          fontWeight={fonts.fontWiegth.headingPro1}
          color={colors.third}
        />
        <OffersList product={item} />
      </View>
    </ScrollView>
  );
}

export default ProductDetailsScreen;
