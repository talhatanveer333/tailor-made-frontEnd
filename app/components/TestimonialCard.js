import React, {useState, useEffect} from 'react';
import { View , StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {AntDesign} from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from './AppText';

function TestimonialCard({name, rating, comment, image, authorRating}) {
    const [ratingStars, setRatingStars]=useState([]);
    const [authorRatingStars, setAuthorRatingStars]=useState([]);
    const wholeRating=Math.round( authorRating );
    const wholeAuthorRating=Math.round(rating);
    useEffect(()=>{
        let temp=[];
        for(let i=0;i<5;i++){
            temp.push(
                <AntDesign name={i<wholeRating?'star':'staro'} size={scale(6)} color={colors.hint} />
            )
        }
        setRatingStars(temp);
        temp=[];
        for(let i=0;i<5;i++){
            temp.push(
                <AntDesign name={i<wholeAuthorRating?'star':'staro'} size={scale(12)} color={colors.third} />
            )
        }
        setAuthorRatingStars(temp);
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
                    </View>
                </View>
                <View style={{flexDirection:'row', position:'absolute', right:5, top:5}}>
                        {authorRatingStars}
                </View>
            </View>
            <View style={{borderWidth:scale(0.5), borderColor:colors.third, borderRadius:scale(5), padding:scale(5), justifyContent:'center', alignItems:'center', marginTop:scale(15)}}>
            <AppText numberOfLines={3} text={comment} fontFamily={fonts.fontFamily.funky} fontSize={fonts.fontSize.text} fontWeight={fonts.fontWiegth.text} color={colors.third}/>
            </View>
        </View>
    );
}

export default TestimonialCard;