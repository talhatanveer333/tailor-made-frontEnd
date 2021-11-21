import React from 'react';
import {FlatList} from 'react-native';

import TailorCard from './TailorCard';


const tailors=[
    {
        id:0,
        name:'Basheer Tailors for Mens',
        address:'Looneywala Sargodha Road, Faisalabad Looneywala Sargodha Road, Faisalabad Looneywala Sargodha Road, Faisalabad Looneywala Sargodha Road, FaisalabadLooneywala Sargodha Road, FaisalabadLooneywala Sargodha Road, Faisalabad Looneywala Sargodha Road, Faisalabad',
        price:'2200'
    },
    {
        id:1,
        name:'Talha Tailors for Bachiyan',
        address:'Lush push town Sargodha Road, Faisalabad',
        price:'1000'
    },
    {
        id:2,
        name:'Mohsin Tailors for Aunties',
        address:'Baraa town Sargodha Road, Faisalabad',
        price:'1800'
    },
    {
        id:3,
        name:'Azaad Tailor for Everyone',
        address:'FAST NUCES Sargodha Road, Faisalabad',
        price:'1500'
    },
    {
        id:4,
        name:'Basheer Tailors for Mens',
        address:'Looneywala Sargodha Road, Faisalabad',
        price:'1200'
    },
    {
        id:5,
        name:'Talha Tailors for Bachiyan',
        address:'Lush push town Sargodha Road, Faisalabad',
        price:'1000'
    },
    {
        id:6,
        name:'Mohsin Tailors for Aunties',
        address:'Baraa town Sargodha Road, Faisalabad',
        price:'1800'
    },
    {
        id:7,
        name:'Azaad Tailor for Everyone',
        address:'FAST NUCES Sargodha Road, Faisalabad',
        price:'1500'
    },
]

function TailorsList(props) {
    return (
        <FlatList 
        style={{
        }}
        data={tailors}
        numColumns='1'
        nestedScrollEnabled
        keyExtractor={tailors => tailors.id.toString()}
        renderItem={({item}) => <TailorCard heading={item.name} subHeading={item.address} price={item.price} /> }
        />
    );
}

export default TailorsList;