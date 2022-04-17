import React, { useState, useContext } from "react";
import { FlatList } from "react-native";

import CartCard from "../components/CartCard";

const cartItems = [
  {
    _id: 1,
    title: "Cotton Suit",
    details:
      "This suit is made from cotton and is of very high quality. This suit is made from cotton and is of very high quality. This suit is made from cotton and is of very high quality. This suit is made from cotton and is of very high quality.",
    price: 1800,
    qty: 1,
  },
  {
    _id: 2,
    title: "Wash & Wear Suit",
    details: "This suit is made from tissue paper and is of very high quality.",
    price: 1200,
    qty: 2,
  },
  {
    _id: 3,
    title: "Cotton Suit",
    details: "This suit is made from cotton and is of very high quality.",
    price: 2000,
    qty: 4,
  },
  {
    _id: 4,
    title: "Cotton Suit",
    details: "This suit is made from cotton and is of very high quality.",
    price: 2000,
    qty: 4,
  },
];

function CartList(props) {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={() => console.log("refreshing")}
      nestedScrollEnabled
      numColumns="1"
      data={cartItems}
      keyExtractor={(cartItems) => cartItems._id.toString()}
      renderItem={({ item }) => (
        <CartCard
          title={item.title}
          qty={item.qty}
          price={item.price}
          details={item.details}
        />
      )}
    />
  );
}

export default CartList;
