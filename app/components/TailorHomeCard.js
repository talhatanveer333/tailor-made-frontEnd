import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from './AppText';

export default function TailorHomeCard({navigation, name, description, price, isNew}) {
  return (
      <View style={{
          paddingHorizontal:scale(15),
          paddingVertical:scale(15),
      }}>
        <View style={{
            borderRadius:150,
            overflow:'hidden',
            }}>
            <Image resizeMode={'cover'} source={{
                uri:'https://picsum.photos/id/244/200/300',
                width:scale(130),
                height:scale(130),
            }}/>
        </View>
      </View>
  );
}
