import React from 'react';
import {View, Image, ScrollView } from 'react-native';
import {scale} from 'react-native-size-matters';

function ProductDetailsScreen(props) {
    return (
      <View>
          <ScrollView
          showsHorizontalScrollIndicator={true}
          pagingEnabled
          horizontal>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(250),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(250),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(250),
            }}/>
            <Image resizeMode={'cover'} source={{
                uri:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
                width:scale(350),
                height:scale(250),
            }}/>
          </ScrollView>
      </View>  
    );
}

export default ProductDetailsScreen;