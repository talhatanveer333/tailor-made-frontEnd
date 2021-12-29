import React from 'react';
import {FlatList} from 'react-native';

import TailorHomeCard  from './TailorHomeCard';
import colors from '../config/colors';

const tailors=[
    {
        id:1,
        name:'Mohsin',
        description:'Main darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hun',
        price:1500,
        isNew:true,
        rating:3,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:2,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false,
        rating:4,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:3,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:4,
        name:'Mohsin',
        description:'Main darzi hun',
        price:1500,
        isNew:true,
        rating:1,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:5,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false,
        rating:2,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:6,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:11,
        name:'Mohsin',
        description:'Main darzi hun',
        price:1500,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:12,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:13,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:14,
        name:'Mohsin',
        description:'Main darzi hun',
        price:1500,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:15,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
    {
        id:16,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true,
        image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
    },
]

function TailorHomeCardList(props) {
    return (
        <FlatList
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={tailors}
            keyExtractor={tailors=>tailors.id.toString()}
            renderItem={({item}) => <TailorHomeCard id={item.id} name={item.name} description={item.description} price={item.price} isNew={item.isNew} rating={item.rating} image={item.image} />}
            />
    );
}

export default TailorHomeCardList;