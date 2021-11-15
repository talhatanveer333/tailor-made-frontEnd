import React, {useContext, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons';
import Constants from 'expo-constants';

import CartList from './CartList';
import CartContext from '../cart/context';

function invoiceSection(props) {
    const {cart, setCart}=useContext(CartContext);
    return (
        <View style={styles.upperContainer}>
            <Text style={styles.headingTitle}>Current Invoice</Text>
            <Text style={styles.headingTotal}>{cart.total===0 ? 'Zero' : cart.total}</Text>
            <CartList />
        </View>
    );
}

const styles = StyleSheet.create({
    upperContainer:{
        height:220,
        backgroundColor:'#B0BEC5',
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal:10,
        borderBottomWidth:4,
        borderColor:'#37474F',
        paddingBottom:7,
    },
    headingTitle:{
        fontSize:20,
        color:'#37474F',
        marginBottom:3,
        //position: 'absolute',
        //top:Constants.statusBarHeight,
    },
    headingTotal:{
        fontSize:23,
        fontWeight:'bold',
        color:'#37474F',
        alignSelf:'flex-end',
        position: 'absolute',
        paddingTop:Constants.statusBarHeight,
        right:15,
    },
})

export default invoiceSection;