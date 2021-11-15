//rsf
import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function productCard({image, title, description, price, onPress}) {
    return (
      
         <TouchableWithoutFeedback onPress={onPress}>
           <View style={styles.container}>
           <MaterialCommunityIcons name="heart-outline" size={25} style={styles.likeIcon} />
            <Image resizeMode={'stretch'} source={{
                width:'100%',
                height:'68%',
                uri:image,
                }}/>
            
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={2} style={styles.description}>{description}</Text>
            <Text style={styles.price}>Rs. {price}</Text>
            </View>
         </TouchableWithoutFeedback>
    );
}



//rnss
const styles = StyleSheet.create({
  container:{
    width:'49%',//185,
    height:230,
    backgroundColor:'snow',
    borderRadius:13,
    alignItems: 'center',
    overflow: 'hidden',
    marginTop:10,
    marginRight:5,
    elevation: 7, 
  },
  title:{
    color:'black',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    left: 5,
  },
  description:{
    color:'black',
    fontSize: 12,
    fontWeight: '200',
    alignSelf: 'flex-start',
    left: 5,
    width:120,
    bottom: -5
  },
  likeIcon:{
    position:'absolute',
    right:7,
    bottom:47,
  },
  price:{
    color:'green',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
})

export default productCard;