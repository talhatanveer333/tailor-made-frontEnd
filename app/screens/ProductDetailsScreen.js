import React from 'react';
import {View, Image, ScrollView } from 'react-native';
import {scale} from 'react-native-size-matters';

import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from '../components/AppText';
import OffersList from '../components/OffersList';

function ProductDetailsScreen(props) {
    return (
      <ScrollView style={{backgroundColor:colors.screenBackground}}>
          <ScrollView
          showsHorizontalScrollIndicator={true}
          pagingEnabled
          horizontal>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/3000/3000?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(330),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/3000/3000?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(330),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/3000/3000?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(330),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/3000/3000?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(330),
            }}/>
          </ScrollView>
            <View style={{padding:scale(10), justifyContent:'center'}}>
                <AppText text='Karandi suit' fontFamily={fonts.fontFamily.primary} fontSize={fonts.fontSize.headingPro1} fontWeight={fonts.fontWiegth.headingPro1} color={colors.third} />
                <AppText text='1800 RS' fontFamily={fonts.fontFamily.primary} fontSize={fonts.fontSize.headingPro} fontWeight={fonts.fontWiegth.headingPro} color={colors.price} />
                <AppText paddingTop={scale(25)} text='Offers' fontFamily={fonts.fontFamily.primary} fontSize={fonts.fontSize.headingPro1} fontWeight={fonts.fontWiegth.headingPro1} color={colors.third} />
                <OffersList />
            </View>
      </ScrollView>  
    );
}

export default ProductDetailsScreen;