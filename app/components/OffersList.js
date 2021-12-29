import React from 'react';
import {FlatList} from 'react-native';
import ProductCard from './ProductCard';

const offers=[
    {
        id:1,
        name:'Standard',
        price:3400,
        image:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
    },
    {
        id:2,
        name:'Urgent',
        price:3800,
        image:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
    },
    {
        id:3,
        name:'Customized',
        price:4000,
        image:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
    }
    
]


function OffersList(props) {
    return (
        <FlatList
            horizontal={true}
            nestedScrollEnabled
            data={offers}
            keyExtractor={offers=>offers.id.toString()}
            renderItem={({item}) => <ProductCard  id={item.id} title={item.name} price={item.price} isNew={item.isNew} onPress={()=>addToCart(item)}/>}
            />
    );
}
function addToCart(item){
    console.log(item.name);
}

export default OffersList;