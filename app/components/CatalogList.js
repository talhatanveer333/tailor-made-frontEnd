import React from 'react';
import {FlatList} from 'react-native';

import ProductCard from './ProductCard';

const products=[
    {
        id:1,
        name:'Leather Jacket',
        price:3400,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
    },
    {
        id:2,
        name:'Karandi Suit',
        price:3200,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
    },
    {
        id:3,
        name:'Leather Jacket',
        price:1300,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
    },
    {
        id:4,
        name:'Cotton Suit',
        price:1500,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
    },
    {
        id:5,
        name:'Wash & Wear Suit',
        price:1800,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
    },
]

function CatalogList(props) {
    return (
        <FlatList
            horizontal={true}
            nestedScrollEnabled
            data={products}
            keyExtractor={products=>products.id.toString()}
            renderItem={({item}) => <ProductCard image={item.image} id={item.id} title={item.name} price={item.price} isNew={item.isNew}/>}
            />
    );
}

export default CatalogList;