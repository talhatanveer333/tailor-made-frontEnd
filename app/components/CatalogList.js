import React, {useState,useEffect} from 'react';
import {FlatList} from 'react-native';

import productsApi from '../api/productsApi';
import ProductCard from './ProductCard';

// const products=[
//     {
//         id:1,
//         name:'Leather Jacket',
//         price:3400,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
//     {
//         id:2,
//         name:'Karandi Suit',
//         price:3200,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
//     {
//         id:3,
//         name:'Leather Jacket',
//         price:1300,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
//     {
//         id:4,
//         name:'Cotton Suit',
//         price:1500,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
//     {
//         id:5,
//         name:'Wash & Wear Suit',
//         price:1800,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
// ]
function CatalogList(props) {

const [products, setProducts]=useState([]);

const getCatalog= async()=>{
    const response=await productsApi.getCatalog();
    //console.log(response.data);
    setProducts(response.data);
}

useEffect(()=>{
    getCatalog();
},[]);

    return (
        <FlatList
            horizontal={true}
            nestedScrollEnabled
            data={products}
            keyExtractor={products=>products._id.toString()}
            renderItem={({item}) => <ProductCard imageUrls={item.imageUrl} id={item._id} title={item.name} price={item.price} isNew={item.isNew}/>}
            />
    );
}

export default CatalogList;