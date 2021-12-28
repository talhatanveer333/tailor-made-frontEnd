import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import { scale } from 'react-native-size-matters';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText  from './AppText';

function productCard({image, title, description, price, onPress}) {
  return (
    
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.container}>
          <Image style={{borderRadius:scale(12)}} resizeMode={'cover'} source={{
              width:scale(120),
              height:scale(140),
              uri:image,
              }}/>
          <AppText text={title} fontSize={fonts.fontSize.heading} fontWeight={fonts.fontWiegth.heading} fontFamily={fonts.fontFamily.primary} color={colors.third}/>
          <AppText text={`${price} RS`} fontSize={fonts.fontSize.heading} fontWeight={fonts.fontWiegth.heading} fontFamily={fonts.fontFamily.primary} color={colors.third}/>
          </View>
        </TouchableWithoutFeedback>
  );
}



//rnss
const styles = StyleSheet.create({
  container:{
    width:scale(135),
    height:scale(180),
    backgroundColor:colors.secondary,
    borderRadius:scale(12),
    alignItems: 'center',
    overflow: 'hidden',
    marginTop:scale(10),
    elevation: scale(10), 
    padding:scale(7),
    marginLeft:scale(5),
    marginBottom:scale(10),
  }
})

export default productCard;