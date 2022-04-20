import React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

import CartList from "../components/CartList";
import HeadSection from "../components/HeadSection";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
function CartScreen(props) {
  const handleSubmit = () => {
    alert("Order placed!");
  };
  return (
    <>
      <HeadSection title="Cart Items" />

      <View
        style={{
          paddingHorizontal: scale(7),
          backgroundColor: colors.screenBackground,
          paddingBottom: scale(76),
          flex: 1,
        }}
      >
        <CartList />
        <AppButton
          title={"Confirm Order"}
          onPress={handleSubmit}
          //position={"absolute"}
          //top={10}
        />
      </View>
    </>
  );
}

export default CartScreen;
