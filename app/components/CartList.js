import React, { useState, useContext } from "react";
import { FlatList } from "react-native";

import CartCard from "../components/CartCard";

const cartItems = [
  {
<<<<<<< HEAD
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
=======
    _id:1,
    title:`HUDHUD MEN'S DECENT MALAGA STITCHED KURTA`,
    imageUrl:`https://cdn.shopify.com/s/files/1/0671/0621/products/Untitled-1_6721c8f2-5519-4567-be6c-d0843a68f23e_400x.jpg?v=1630927469`,
    details:`Embroidered Mandarin collar *Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
    price:1599,
    qty:1
  },
  {
    _id:2,
    title:`MEN'S AJMAN STITCHED KURTA`,
    imageUrl:`https://cdn.shopify.com/s/files/1/0671/0621/products/32165413431_400x.jpg?v=1630399988`,
    details:`Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
    price:889,
    qty:1
  },
  {
    _id:3,
    title:`MEN'S FASHION GREECE STITCHED KURTA`,
    imageUrl:`https://cdn.shopify.com/s/files/1/0671/0621/products/32165313zx6353z_400x.jpg?v=1630927575`,
    details:`Regular Fit *Durable stitching *Ethnic Men's Wear Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *`,
    price:1599,
    qty:1
  },
  {
    _id:4,
    title:`MEN'S PORTSMOUTH STITCHED KURTA`,
    imageUrl:`https://cdn.shopify.com/s/files/1/0671/0621/products/DSC_0926_400x.jpg?v=1625927323`,
    details:`*Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear Four-button embroidered placket `,
    price:1199,
    qty:1
  },
  {
    _id:5,
    title:`MEN'S AJMAN STITCHED KURTA`,
    imageUrl:`https://cdn.shopify.com/s/files/1/0671/0621/products/32165413431_400x.jpg?v=1630399988`,
    details:`Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
    price:889,
    qty:1
  },
  {
    _id:6,
    title:`HUDHUD MEN'S DECENT MALAGA STITCHED KURTA`,
    imageUrl:`https://cdn.shopify.com/s/files/1/0671/0621/products/Untitled-1_6721c8f2-5519-4567-be6c-d0843a68f23e_400x.jpg?v=1630927469`,
    details:`Embroidered Mandarin collar *Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *Regular Fit *Durable stitching *Ethnic Men's Wear`,
    price:1599,
    qty:1
  },
  {
    _id:7,
    title:`MEN'S FASHION GREECE STITCHED KURTA`,
    imageUrl:`https://cdn.shopify.com/s/files/1/0671/0621/products/32165313zx6353z_400x.jpg?v=1630927575`,
    details:`Regular Fit *Durable stitching *Ethnic Men's Wear Four-button embroidered placket *Both Side Pockets *Hemmed Cuffs *`,
    price:1599,
    qty:1
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528
  },
];


function CartList(props) {
<<<<<<< HEAD
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
=======
  const [refreshing, setRefreshing]=useState(false);
    return (
        <FlatList // list is not refreshing
        refreshing={refreshing}
        onRefresh={()=> console.log('refreshing')}
        nestedScrollEnabled
        numColumns='1'
        data={cartItems}
        keyExtractor={cartItems=> cartItems._id.toString()}
        renderItem={ ({item}) => <CartCard title={item.title} qty={item.qty} price={item.price} details={item.details} imageUrl={item.imageUrl}  /> }
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528
        />
      )}
    />
  );
}

export default CartList;
