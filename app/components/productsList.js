import React, { useEffect, useState, useContext } from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, FlatList, Modal, TouchableWithoutFeedback} from 'react-native';
import Moment from 'moment'

import productsApi from '../api/productsApi';
import AppButton from './AppButton';
import Card from './Card';
import ProductItemRigthAction from './ProductItemRigthAction';
import CartContext from '../cart/context';

function productsList(props) {
    const [refreshing, setRefreshing]=useState(false);
    const [error, setError] = useState(false);
    const [products, setProducts]= useState([]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [inventoryString, setInventoryString] = useState('');
    const {cart, setCart}=useContext(CartContext);

    const [modalData, setmodalData] = useState({
        "__v": 0,
        "_id": "",
        "author": "",
        "business": "",
        "description": "",
        "inventory":  {
            "_id": "",
            "au": 0,
            "modifiedDate": "",
            "place": "",
            "worth": 0,
        },
        "name": "",
        "pp": 0,
        "sp": 0,
        "upc": 0,
    });
  
  useEffect(()=>{
    getProducts();
  }, []);

  const getProducts= async () =>{
    const response=await productsApi.getProducts();
    if(response.ok){
        setProducts(response.data);
        setError(false);
    }
    else
        setError(true);

     console.log('\n yeh data aya hai\n');
     console.log(response);
  }
  const calculateCartons= async (item) =>{
    let cartons=0;
    let totalUnits=item.inventory.au;
    while(totalUnits > item.upc)
    {
        cartons++;
        totalUnits-=item.upc
    }
    //console.log(`${cartons} Cartons And ${totalUnits} Pieces`);
    setInventoryString(`${cartons} Cartons And ${totalUnits} Pieces`);
    setmodalData(item);
  }
  const handleSwipe = (product) => {
    cart.products.push(product);
    setCart(cart);
    console.log(cart);
    setProducts(products.filter((p) => p._id !== product._id));

  }

  ////// rendering ////////
  if(error)
  return(
      <View style={styles.erroContainer}>
        <Text style={styles.error}>Something went wrong. Please contact admin</Text>
      </View>
  );
  return (
    <>
        {products && <FlatList
        refreshing={refreshing}
        onRefresh={()=> getProducts()}
        nestedScrollEnabled
        numColumns='1'
        data={products}
        keyExtractor={products => products._id.toString()}
        renderItem={({item}) => <Card uri={'https://picsum.photos/id/405/200/300'} title={item.name} description={item.description} price={item.sp} onPress={()=>{
            if(item)
            {   
                // use await before calculateCartons() if data inconsistent
                calculateCartons(item);  
                setmodalVisible(true);
            }
        }}
        renderRightActions={() => <ProductItemRigthAction 
        onPress={() => handleSwipe(item)} />}
        />


        }/>}

        <Modal
            visible={modalVisible}
            transparent={true}
            animationType={'slide'}>
            <View style={styles.modalContainer}>
                <TouchableWithoutFeedback onPress={() => setmodalVisible(false)}>
                <View style={styles.transparentView} />
                </TouchableWithoutFeedback>

            <View style={styles.workingViewBackground}>
                <View style={styles.workingView}>
                    <Text style={styles.productName}>{modalData.name}</Text>
                    <Text style={styles.description}>{modalData.description}</Text>
                    <Text style={styles.heading}>Inventory:</Text>
                    <Text style={styles.text}>Available Units: {inventoryString}</Text>
                    <Text style={styles.text}>Place: {modalData.inventory.place}</Text>
                    <Text style={styles.text}>Modified Date: {Moment(modalData.inventory.modifiedDate).format('MMMM Do YYYY, h:mm: a')}</Text>
                    <Text style={styles.heading}>Total Worth: {modalData.inventory.worth}</Text>
                    <AppButton title="Okay" 
                    position='absolute'
                    bottom={15}
                    alignSelf='center'
                    onPress={() => setmodalVisible(false)}/>
                </View>
            </View>
            </View>
        </Modal>
    </>
    );
}

const styles = StyleSheet.create({
  listContainer:{
    
  },
  list:{
    backgroundColor:'snow'
  },
  modalContainer:{
    flex:1,
    //backgroundColor:'#00000066',
  },
  transparentView:{
      flex:3,
      backgroundColor:'#00000066',
  },
  workingViewBackground:{
    backgroundColor:'#00000066',
    flex:1.5,
    paddingBottom:10,
    paddingHorizontal:5,
  },
  workingView:{
      flex:2,
      backgroundColor:'snow',
      //alignItems:'center',
      padding:20,
      //borderTopLeftRadius: 50,
      //borderTopRightRadius:50,
      borderRadius:25,
      borderColor:'black',
      //elevation:50,
      //borderWidth:2,
  },
  productName:{
    color:'black',
    fontSize:20,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  description:{
      fontSize:15,
      color:'grey',
      alignSelf:'center',
  },
  heading:{
    paddingTop:7,
    fontSize:14,
    //color:'grey',
    fontWeight:'bold',
  },
  text:{
    fontSize:11,
    //color:'grey',
  },
  error:{
    color:'red',
    fontSize:15,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  erroContainer:{
      flex:1,
      justifyContent:'center',
  }
})
export default productsList;