import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, FlatList, Modal, TouchableWithoutFeedback} from 'react-native';
import Constants from 'expo-constants';

import Screen from './Screen'
import InvoiceSection from '../components/InvoiceSection';
import ProductsList from '../components/productsList';
import AppButton from '../components/AppButton';

const temp = [
    {
      id:1,
      uri:'https://picsum.photos/id/500/200/300',
      title:"Tower for sale",
      description:"Yeh tower bht acha hai.. agr aap len gy to bht faida hoga",
      price:"2000",
    },
    {
      id:2,
      uri:'https://picsum.photos/seed/picsum/200/300',
      title:"T8 Table for laptops",
      description:"Dummy description",
      price:"2000",
    },
    {
      id:3,
      uri:'https://picsum.photos/id/238/200/300',
      title:"Dell Vostro",
      description:"Dummy description",
      price:"36000",
    },
    {
      id:4,
      uri:'https://picsum.photos/id/242/200/300',
      title:"Google Pixel 3a",
      description:"Dummy description",
      price:"3000",
    },
    {
      id:5,
      uri:'https://picsum.photos/id/252/200/300',
      title:"Google Pixel 3a",
      description:"Dummy description",
      price:"3000",
    },
    {
      id:6,
      uri:'https://picsum.photos/id/287/200/300',
      title:"Google Pixel 3a",
      description:"Dummy description",
      price:"3000",
    },
    {
      id:7,
      uri:'https://picsum.photos/id/282/200/300',
      title:"Google Pixel 3a",
      description:"Dummy description",
      price:"3000",
    },
    {
      id:8,
      uri:'https://picsum.photos/id/345/200/300',
      title:"Google Pixel 3a",
      description:"Dummy description",
      price:"3000",
    },
    {
      id:9,
      uri:'https://picsum.photos/id/400/200/300',
      title:"Google Pixel 3a",
      description:"Dummy description",
      price:"54000",
    },
  ]

function ProductsScreen(props) {
  return (
    <>
      <InvoiceSection />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Products Catalog</Text>
        <ProductsList />
        {/* <AppButton title='+'
        position='absolute' 
        bottom={15} 
        right={15} 
        width={75}
        height={75}
        borderRadius={50}
        elevation={8}/> */}
      </View>
    </>
  );}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:5,
    backgroundColor:'snow',
  },
  scroll:{
    
  },
  heading:{
    fontSize:25,
    color:'#37474F',
    paddingTop:5,
},
  
})


export default ProductsScreen;

