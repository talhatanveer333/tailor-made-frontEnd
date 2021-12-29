import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image, TouchableWithoutFeedback} from 'react-native';
import {scale} from 'react-native-size-matters';
import {AntDesign} from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from './AppText';



export default function TailorHomeCard({navigation, id, name, description, price, isNew, rating, image}) {

const [ratingStars, setRatingStars] =useState([]);
let ratingStarsArray=[];
useEffect(()=>{
    for(let i=0;i<5;i++){
        ratingStarsArray.push(
            <TouchableWithoutFeedback key={i}>
                <AntDesign name={i<rating?'star':'staro'} size={scale(10)} color={colors.third} />
            </TouchableWithoutFeedback>
        );
        setRatingStars(ratingStarsArray);
    }
},[])

  return (
      <Pressable onPress={() => console.log('dabb rha hai')}>
        <View style={{
            paddingHorizontal:scale(15),
            paddingVertical:scale(15),
            alignItems:'center',
            width:scale(180),
            height:scale(190),
            marginBottom:scale(12),
        }}>
            <View style={{
                borderRadius:100,
                overflow:'hidden',
                borderWidth:2,
                borderColor:colors.third
                }}>
                <Image resizeMode={'cover'} source={{
                    uri:image,
                    width:scale(100),
                    height:scale(100),
                }}/>
            </View>
            <View style={{paddingTop:10, alignItems:'center'}}>
                <AppText text={name} fontSize={fonts.fontSize.headingPro} fontWeight={fonts.fontWiegth.heading} color={colors.text} />
                <AppText numberOfLines={2} text={description} fontSize={fonts.fontSize.heading} fontWeight={fonts.fontWiegth.text} color={colors.hint} />
                <View style={{flexDirection:'row', marginTop:scale(3)}}>{ratingStars}</View>
            </View>
        </View>
      </Pressable>
  );
}
