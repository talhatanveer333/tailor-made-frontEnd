import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import { scale } from 'react-native-size-matters';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText  from './AppText';

function ProductCard({id, image, title, description, price, onPress}) {
  return (
    
        <TouchableWithoutFeedback onPress={onPress}>
          {image?
          <View style={{
            width:scale(135),
            height:scale(190),
            backgroundColor:colors.secondary,
            borderRadius:scale(12),
            alignItems: 'center',
            overflow: 'hidden',
            marginTop:scale(10),
            elevation: scale(8), 
            padding:scale(7),
            marginLeft:scale(5),
            marginBottom:scale(10),
          }}>
          <Image style={{borderRadius:scale(12)}} resizeMode={'cover'} source={{
              width:scale(120),
              height:scale(140),
              uri:image,
              }}/>
          <View style={{alignItems:'center', paddingTop:scale(3), flexDirection:'column'}}>
            <AppText text={title} fontSize={fonts.fontSize.heading} fontWeight={fonts.fontWiegth.heading} fontFamily={fonts.fontFamily.funky} color={colors.third}/>
            <AppText text={`${price} RS`} fontSize={fonts.fontSize.heading} fontWeight={fonts.fontWiegth.heading} fontFamily={fonts.fontFamily.primary} color={colors.third}/>
          </View>
          </View>
          :
          <View style={{
            width:scale(100),
            height:scale(100),
            backgroundColor:colors.secondary,
            borderRadius:scale(12),
            alignItems: 'center',
            overflow: 'hidden',
            marginTop:scale(10),
            elevation: scale(5), 
            padding:scale(7),
            marginLeft:scale(5),
            marginBottom:scale(10),
            justifyContent:'center',
            alignItems:'center',
          }}>
            <AppText text={title} fontSize={fonts.fontSize.headingPro} fontWeight={fonts.fontWiegth.headingPro} fontFamily={fonts.fontFamily.funky} color={colors.third}/>
            <AppText text={`${price} RS`} fontSize={fonts.fontSize.headingPro} fontWeight={fonts.fontWiegth.headingPro} fontFamily={fonts.fontFamily.primary} color={colors.third}/>
          </View>}
        </TouchableWithoutFeedback>
  );
}


export default ProductCard;