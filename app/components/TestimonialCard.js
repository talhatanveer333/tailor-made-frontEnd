import React, {useState, useEffect} from 'react';
import { View , StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {AntDesign} from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from './AppText';

function TestimonialCard({name, rating, comment, image}) {
    const [ratingStars, setRatingStars]=useState([]);
    const wholeRating=Math.round( rating );
    useEffect(()=>{
        let temp=[];
        for(let i=0;i<5;i++){
            temp.push(
                <AntDesign name={i<wholeRating?'star':'staro'} size={scale(8)} color={colors.third} />
            )
        }
        setRatingStars(temp);
    },[]);
    return (
        <View style={{
        backgroundColor:colors.screenBackground,
        width:scale(230),
        height:scale(110),
        padding:scale(5),
        borderRadius:scale(10),
        elevation:scale(12),
        marginHorizontal:scale(5),
        marginVertical:scale(10),
        }}>
            <View style={{flexDirection:'row', alignItems:'center', marginLeft:scale(2)}}>
            <Image style={{borderRadius:scale(50)}} resizeMode={'cover'} source={{
                    uri:image,
                    width:scale(35),
                    height:scale(35),
                }}/>
                <View style={{flexDirection:'column', marginLeft:scale(5), justifyContent:'center'}}>
                    <AppText text={name} fontFamily={fonts.fontFamily.primary} fontSize={fonts.fontSize.heading} fontWeight={fonts.fontWiegth.heading} color={colors.third}/>
                    <View style={{flexDirection:'row'}}>
                        {ratingStars}
                        {/* <AntDesign name='star' size={scale(8)} color={colors.third} />
                        <AntDesign name='star' size={scale(8)} color={colors.third} />
                        <AntDesign name='star' size={scale(8)} color={colors.third} />
                        <AntDesign name='star' size={scale(8)} color={colors.third} />
                        <AntDesign name='staro' size={scale(8)} color={colors.third} /> */}
                    </View>
                </View>
            </View>
            <View style={{borderWidth:scale(0.5), borderColor:colors.third, borderRadius:scale(5), padding:scale(5), justifyContent:'center', alignItems:'center', marginTop:scale(15)}}>
            <AppText numberOfLines={3} text={comment} fontFamily={fonts.fontFamily.funky} fontSize={fonts.fontSize.text} fontWeight={fonts.fontWiegth.text} color={colors.third}/>
            </View>
        </View>
    );
}

export default TestimonialCard;