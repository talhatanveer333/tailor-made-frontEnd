import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function ProductDetailsScreen(props) {
    return (
        <View style={styles.container}>
            <Image resizeMode='stretch' source={{
                uri:'https://picsum.photos/id/500/200/300',
                width:395,
                height:300,
            }}
            />
            <Text>Tower for Sale</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    }
})

export default ProductDetailsScreen;