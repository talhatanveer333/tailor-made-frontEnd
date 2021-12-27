import React from 'react';
import {FlatList} from 'react-native';

import TailorHomeCard  from './TailorHomeCard';
import colors from '../config/colors';

const tailors=[
    {
        id:1,
        name:'Mohsin',
        description:'Main darzi hun',
        price:1500,
        isNew:true
    },
    {
        id:2,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false
    },
    {
        id:3,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true
    },
    {
        id:4,
        name:'Mohsin',
        description:'Main darzi hun',
        price:1500,
        isNew:true
    },
    {
        id:5,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false
    },
    {
        id:6,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true
    },
    {
        id:11,
        name:'Mohsin',
        description:'Main darzi hun',
        price:1500,
        isNew:true
    },
    {
        id:12,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false
    },
    {
        id:13,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true
    },
    {
        id:14,
        name:'Mohsin',
        description:'Main darzi hun',
        price:1500,
        isNew:true
    },
    {
        id:15,
        name:'Talha',
        description:'Main darzi nahe hun',
        price:100,
        isNew:false
    },
    {
        id:16,
        name:'Azad',
        description:'Main darzi nahe hun',
        price:1800,
        isNew:true
    },
]

function TailorHomeCardList(props) {
    return (
        <FlatList
            nestedScrollEnabled
            numColumns={2}
            data={tailors}
            keyExtractor={tailors=>tailors.id.toString()}
            renderItem={({item}) => <TailorHomeCard name={item.name} description={item.description} price={item.price} isNew={item.isNew}/>}
            />
    );
}

export default TailorHomeCardList;