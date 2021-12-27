import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import ConversationHead from './ConversationHead';
import colors from '../config/colors';

const options=[
    {
        id:1,
        name:'All Orders',
        description:'3 active and 17 archived orders',
    },
    {
        id:2,
        name:'Customers',
        description:'All Customers',
    },
    {
        id:3,
        name:'Payment Methods',
        description:'ACH - Visa **77',
    },
    {
        id:4,
        name:'Friend Codes',
        description:'You don\'t have special promocodes yet',
    },
    {
        id:5,
        name:'Settings',
        description:'Notifications, Passwords',
    },
    {
        id:6,
        name:'Inventory Settings',
        description:'Notifications, Passwords',
    },
    {
        id:7,
        name:'Khaata Settings',
        description:'Notifications, Passwords',
    },
    {
        id:8,
        name:'Inventory Settings',
        description:'Notifications, Passwords',
    },
    {
        id:9,
        name:'Khaata Settings',
        description:'Notifications, Passwords',
    },
    
    
    
]

function SettingsOptionsList(props) {
    return (
            <FlatList
            nestedScrollEnabled
            style={{backgroundColor:colors.screenBackground}}
            data={options}
            keyExtractor={options=>options.id.toString()}
            renderItem={({item}) => <ConversationHead name={item.name} description={item.description} />}
            />
    );
}

const styles = StyleSheet.create({
    list:{
        //height:530,
        //backgroundColor:'snow'

    }
})
export default SettingsOptionsList;