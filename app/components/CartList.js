import React, {useState, useContext} from 'react';
import {FlatList } from 'react-native';

import InvoiceCard from './invoiceCard';
import CartContext from '../cart/context';

const data1=[
    {
      "__v": 0,
      "_id": "61091927bccfb2189482ba45",
      "author": "6107eff58aeda40734204b97",
      "business": "Nestle",
      "description": "I am a dummy description. Please ignore me! I am a dummy description. Please ignore me!I am a dummy description. Please ignore me!",
      "inventory": {
        "_id": "61091927bccfb2189482ba46",
        "au": 25,
        "modifiedDate": "2021-08-03T10:23:30.412Z",
        "place": "Godam",
        "worth": 1250,
      },
      "name": "Raani 250ml juice",
      "pp": 50,
      "sp": 70,
      "upc": 24,
    },
    {
      "__v": 0,
      "_id": "610bb3c7c5ce371c548980fb",
      "author": "6107eff58aeda40734204b97",
      "business": "Nestle",
      "description": "I am a dummy description. Please ignore me!",
      "inventory":  {
        "_id": "610bb3c7c5ce371c548980fc",
        "au": 25,
        "modifiedDate": "2021-08-05T08:43:56.129Z",
        "place": "Godam",
        "worth": 1250,
      },
      "name": "Raani 500ml juice",
      "pp": 50,
      "sp": 70,
      "upc": 24,
    },
     {
      "__v": 0,
      "_id": "610bb3ccc5ce371c548980fd",
      "author": "6107eff58aeda40734204b97",
      "business": "Nestle",
      "description": "I am a dummy description. Please ignore me!",
      "inventory":  {
        "_id": "610bb3ccc5ce371c548980fe",
        "au": 25,
        "modifiedDate": "2021-08-05T08:43:56.129Z",
        "place": "Godam",
        "worth": 1250,
      },
      "name": "Raani 1000ml juice",
      "pp": 50,
      "sp": 70,
      "upc": 24,
    },
     {
      "__v": 0,
      "_id": "610bb3d1c5ce371c548980ff",
      "author": "6107eff58aeda40734204b97",
      "business": "Nestle",
      "description": "I am a dummy description. Please ignore me!",
      "inventory":  {
        "_id": "610bb3d1c5ce371c54898100",
        "au": 25,
        "modifiedDate": "2021-08-05T08:43:56.129Z",
        "place": "Godam",
        "worth": 1250,
      },
      "name": "Raani 2000ml juice",
      "pp": 50,
      "sp": 70,
      "upc": 24,
    },
  ]

  

function CartList(props) {
    const {cart, setCart}=useContext(CartContext);
    const [refreshing, setRefreshing]=useState(false);
    console.log(cart);
    return (
        <FlatList // list is not refreshing
        refreshing={refreshing}
        onRefresh={()=> setCart(cart)}
        nestedScrollEnabled
        numColumns='1'
        data={cart.products}
        keyExtractor={data=> data._id.toString()}
        renderItem={ ({item}) => <InvoiceCard title={item.name} qty={3} price={item.sp} /> }
        />
    );
}

export default CartList;