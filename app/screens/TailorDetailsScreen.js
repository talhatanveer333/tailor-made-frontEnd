import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import {scale} from 'react-native-size-matters';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from '../components/AppText';
import Catalog from '../components/CatalogList';
import RecommendationList from '../components/TailorHomeCardList';

function TailorDetailsScreen(props) {
    return (
        <ScrollView>
        <View styles={styles.container}>
            <View style={{backgroundColor:colors.screenBackground}}>
            <Image style={{borderBottomLeftRadius:120}} resizeMode={'cover'} source={{
                    uri:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
                    width:scale(350),
                    height:scale(250),
                }}/>
            </View>
                <View style={{paddingHorizontal:scale(10), paddingTop:scale(20), backgroundColor:colors.screenBackground}}>
                    <AppText numberOfLines={1} text='I am' fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.funky} />
                    <AppText numberOfLines={1} text='Talha Tanveer' fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.primary}/>
                    <AppText numberOfLines={3} text='I am the description I am the description I am the description I am the description I am the description' fontSize={fonts.fontSize.heading} fontWieght={fonts.fontWiegth.heading} color={colors.hint} fontFamily={fonts.fontFamily.primary}/>
                </View>
                <View style={{paddingHorizontal:scale(10), backgroundColor:colors.screenBackground, paddingTop:scale(10)}}>
                    <AppText numberOfLines={1} text='Catalog' fontSize={fonts.fontSize.headingPro1} fontWieght={fonts.fontWiegth.headingPro} color={colors.third} fontFamily={fonts.fontFamily.primary}/>
                </View>
                <View style={{backgroundColor:colors.screenBackground}}>
                    <Catalog />
                </View>
                <View style={{paddingHorizontal:scale(10), backgroundColor:colors.screenBackground, paddingTop:scale(10)}}>
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