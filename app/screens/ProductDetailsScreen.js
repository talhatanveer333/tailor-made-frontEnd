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
                uri:`https://cdn.shopify.com/s/files/1/0671/0621/products/Untitled-9_46de192e-fea4-4281-973e-72168fa68fc4_400x.jpg?v=1635010664`,
                width:scale(350),
                height:scale(330),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://cdn.shopify.com/s/files/1/0671/0621/products/z3x1c3z12c_e1c01562-abc7-414f-9c21-226de5a939e2_400x.jpg?v=1635010674`,
                width:scale(350),
                height:scale(330),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://cdn.shopify.com/s/files/1/0671/0621/products/321z3c13x_15a876d4-f9c7-4e5c-b93e-560c65ab7d78_400x.jpg?v=1635010678`,
                width:scale(350),
                height:scale(330),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://cdn.shopify.com/s/files/1/0671/0621/products/26088_43401246-1989-4656-9a36-77722fadb3d3_400x.jpg?v=1634118997`,
                width:scale(350),
                height:scale(330),
            }}/>
          </ScrollView>
            <View style={{padding:scale(10), justifyContent:'center'}}>
                <AppText text={`HUDHUD MEN'S ANÁPOLIS STITCHED KURTA`} fontFamily={fonts.fontFamily.primary} fontSize={fonts.fontSize.headingPro1} fontWeight={fonts.fontWiegth.headingPro1} color={colors.third} />
                <AppText text='1099 RS' fontFamily={fonts.fontFamily.primary} fontSize={fonts.fontSize.headingPro} fontWeight={fonts.fontWiegth.headingPro} color={colors.price} />
                <AppText paddingTop={scale(25)} text='Offers' fontFamily={fonts.fontFamily.primary} fontSize={fonts.fontSize.headingPro1} fontWeight={fonts.fontWiegth.headingPro1} color={colors.third} />
                <OffersList />
            </View>
      </ScrollView>  
    );
}

export default ProductDetailsScreen;