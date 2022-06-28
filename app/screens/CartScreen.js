import React, { useContext } from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

import CartList from "../components/CartList";
import HeadSection from "../components/HeadSection";
import AppButton from "../components/AppButton";
import cartStorage from "../cart/cartStorage";
import { placeOrder } from "../api/orderApi";
import colors from "../config/colors";
import authContext from "../auth/authContext";

function CartScreen(props) {
  const { user } = useContext(authContext);
  const handleSubmit = async () => {
    try {
      const items = await cartStorage.getCartData();
      //console.error(items);
      if (items.length > 0) {
        const object = {
          customer: user._id,
          items: items,
        };
        const result = await placeOrder(object);
        if (!result.ok) return alert(`Server Error: ${result.data}`);
        alert(`Order placed with ${items.length} items!`);
        cartStorage.removeCartData();
      } else {
        alert(`No items found!`);
      }
    } catch (e) {
      alert(e);
    }
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
          position={"absolute"}
          bottom={10}
          alignSelf="center"
        />
      </View>
    </>
  );
}

export default CartScreen;
