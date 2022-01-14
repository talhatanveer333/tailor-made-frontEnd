import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import {scale} from 'react-native-size-matters';
import {AntDesign} from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from '../components/AppText';
import Catalog from '../components/CatalogList';
import RecommendationList from '../components/TailorHomeCardList';
import TestimonialList from '../components/TestimonialList';

function TailorDetailsScreen({route}) {
    const [ratingStars, setRatingStars]=useState([]);
    const rating=route.params.rating;
    useEffect(()=>{
        let temp=[];
        for(let i=0;i<5;i++){
            temp.push(
                <AntDesign name={i<rating?'star':'staro'} size={scale(15)} color={colors.third} />
            )
        }
        setRatingStars(temp);
    },[]);
    
    return (
        <ScrollView>
        <View styles={styles.container}>
            <View style={{backgroundColor:colors.screenBackground}}>
            <Image style={{borderBottomLeftRadius:120}} resizeMode={'cover'} source={{
                    uri:`https://picsum.photos/3000/3000?random=${Math.random() * 10}`,
                    width:scale(350),
                    height:scale(250),
                }}/>
            </View>
                <View style={{paddingHorizontal:scale(10), paddingTop:scale(20), backgroundColor:colors.screenBackground}}>
                    <AppText numberOfLines={1} text='I am' fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.funky} />
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AppText numberOfLines={1} text={route.params.name} fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.primary}/>
                        <View style={{flexDirection:'row', right:scale(5), position:'absolute'}}>{ratingStars}</View>           
                    </View>
                    <AppText numberOfLines={3} text='I am the description I am the description I am the description I am the description I am the description' fontSize={fonts.fontSize.heading} fontWieght={fonts.fontWiegth.heading} color={colors.hint} fontFamily={fonts.fontFamily.primary}/>
                </View>
                <View style={{paddingHorizontal:scale(10), backgroundColor:colors.screenBackground, paddingTop:scale(20)}}>
                    <AppText numberOfLines={1} text='Catalog' fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.primary}/>
                </View>
                <View style={{backgroundColor:colors.screenBackground}}>
                    <Catalog />
                </View>
                <View style={{paddingHorizontal:scale(10), backgroundColor:colors.screenBackground, paddingTop:scale(20), paddingBottom:scale(10)}}>
                    <AppText numberOfLines={1} text='Testimonials' fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.primary}/>
                </View>
                <View style={{backgroundColor:colors.screenBackground1}}>
                    <TestimonialList />
                </View>
                <View style={{paddingHorizontal:scale(10), backgroundColor:colors.screenBackground, paddingTop:scale(20)}}>
                    <AppText numberOfLines={1} text='Recommendations' fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.primary}/>
                </View>
                <View style={{backgroundColor:colors.screenBackground}}>
                    <RecommendationList />
                </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.screenBackground,
    }
    
})
export default TailorDetailsScreen;