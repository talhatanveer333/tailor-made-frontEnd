import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import CartCard from "../components/CartCard";
import cartStorage from "../cart/cartStorage";

//[
//   {
//     _id: 1,
//     title: `HUDHUD MEN'S DECENT MALAGA STITCHED KURTA`,
//     imageUrl: `https://cdn.shopify.com/s/files/1/0671/0621/products/Untitled-1_6721c8f2-5519-4567-be6c-d0843a68f23e_400x.jpg?v=1630927469`,
//     details: `Embroidered Mandarin collar *Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
//     price: 1599,
//     qty: 1,
//   },
//   {
//     _id: 2,
//     title: `MEN'S AJMAN STITCHED KURTA`,
//     imageUrl: `https://cdn.shopify.com/s/files/1/0671/0621/products/32165413431_400x.jpg?v=1630399988`,
//     details: `Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
//     price: 889,
//     qty: 1,
//   },
//   {
//     _id: 3,
//     title: `MEN'S FASHION GREECE STITCHED KURTA`,
//     imageUrl: `https://cdn.shopify.com/s/files/1/0671/0621/products/32165313zx6353z_400x.jpg?v=1630927575`,
//     details: `Regular Fit *Durable stitching *Ethnic Men's Wear Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *`,
//     price: 1599,
//     qty: 1,
//   },
//   {
//     _id: 4,
//     title: `MEN'S PORTSMOUTH STITCHED KURTA`,
//     imageUrl: `https://cdn.shopify.com/s/files/1/0671/0621/products/DSC_0926_400x.jpg?v=1625927323`,
//     details: `*Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear Four-button embroidered placket `,
//     price: 1199,
//     qty: 1,
//   },
//   {
//     _id: 5,
//     title: `MEN'S AJMAN STITCHED KURTA`,
//     imageUrl: `https://cdn.shopify.com/s/files/1/0671/0621/products/32165413431_400x.jpg?v=1630399988`,
//     details: `Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
//     price: 889,
//     qty: 1,
//   },
//   {
//     _id: 6,
//     title: `HUDHUD MEN'S DECENT MALAGA STITCHED KURTA`,
//     imageUrl: `https://cdn.shopify.com/s/files/1/0671/0621/products/Untitled-1_6721c8f2-5519-4567-be6c-d0843a68f23e_400x.jpg?v=1630927469`,
//     details: `Embroidered Mandarin collar *Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
//     price: 1599,
//     qty: 1,
//   },
//   {
//     _id: 7,
//     title: `MEN'S FASHION GREECE STITCHED KURTA`,
//     imageUrl: `https://cdn.shopify.com/s/files/1/0671/0621/products/32165313zx6353z_400x.jpg?v=1630927575`,
//     details: `Regular Fit *Durable stitching *Ethnic Men's Wear Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *`,
//     price: 1599,
//     qty: 1,
//   },
// ];

function CartList(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartData();
  }, []);

  const setCartData = async () => {
    try {
      setRefreshing(true);
      const result = await cartStorage.getCartData();
      //console.error("getting cart data");
      console.log(result);
      setCartItems(result);
      setRefreshing(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={setCartData}
      nestedScrollEnabled
      numColumns="1"
      data={cartItems}
      keyExtractor={(cartItems) => cartItems._id.toString()}
      renderItem={({ item }) => (
        <CartCard
          title={item.name}
          qty={item.qty}
          price={item.price}
          details={item.description}
          imageUrl={item.imageUrl}
          onPress={() => {
            setCart(cartItems);
          }}
        />
      )}
    />
  );
}

export default CartList;
