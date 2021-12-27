import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from './AppText';

export default function TailorHomeCard({navigation, name, description, price, isNew}) {
  return (
      <Pressable onPress={() => console.log('dabb rha hai')}>
        <View style={{
            paddingHorizontal:scale(15),
            paddingVertical:scale(15),
            alignItems:'center',
            width:scale(180),
            height:scale(180),
        }}>
            <View style={{
                borderRadius:100,
                overflow:'hidden',
                borderWidth:2,
                borderColor:colors.third
                }}>
                <Image resizeMode={'cover'} source={{
                    uri:'https://picsum.photos/id/242/200/300',
                    width:scale(100),
                    height:scale(100),
                }}/>
            </View>
            <View style={{paddingTop:10, alignItems:'center'}}>
                <AppText text={name} fontSize={fonts.fontSize.headingPro} fontWeight={fonts.fontWiegth.heading} color={colors.text} />
                <AppText numberOfLines={2} text={description} fontSize={fonts.fontSize.heading} fontWeight={fonts.fontWiegth.text} color={colors.hint} />
            </View>
        </View>
      </Pressable>
  );
}
