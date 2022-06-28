import React from "react";
import { FlatList } from "react-native";

import ProductCard from "./ProductCard";
import cartStorage from "../cart/cartStorage";
import { connect } from "formik";

const offers = [
  {
    id: 1,
    name: "Standard",
    price: 0,
  },
  {
    id: 2,
    name: "Urgent",
    price: 1000,
  },
  {
    id: 3,
    name: "Custom",
    price: 1300,
  },
];

function OffersList({ product }) {
  return (
    <FlatList
      horizontal={true}
      nestedScrollEnabled
      data={offers}
      keyExtractor={(offers) => offers.id.toString()}
      renderItem={({ item: offer }) => (
        <ProductCard
          id={offer.id}
          title={offer.name}
          price={offer.price}
          isNew={offer.isNew}
          onPress={() => addToCart(offer, product)}
        />
      )}
    />
  );
}
function addToCart(offer, product) {
  console.log(product);
  try {
    let cartItem = {};
    cartItem._id = product._id;
    cartItem.name = product.name;
    cartItem.price = product.price;
    cartItem.description = product.description;
    cartItem.imageUrl = product.imageUrl[0];
    cartItem.qty = 1;
    cartItem.price += offer.price; //setting up the total price and constraints
    cartItem.author = product.author;

    cartStorage.addOneItem(cartItem);
    alert(
      `${cartItem.name} added in the cart with total amount of ${cartItem.price}`
    );
  } catch (e) {
    console.error("Err: " + e);
  }
}

export default OffersList;
