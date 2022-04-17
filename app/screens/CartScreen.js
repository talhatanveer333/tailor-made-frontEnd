import React from "react";
import { View } from "react-native";

import CartList from "../components/CartList";
import colors from "../config/colors";
function CartScreen(props) {
  return (
    <View style={{ backgroundColor: colors.primary }}>
      <CartList />
    </View>
  );
}

export default CartScreen;
