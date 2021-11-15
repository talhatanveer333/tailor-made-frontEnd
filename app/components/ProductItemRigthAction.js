import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

function ProductItemRigthAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome5 name='arrow-up' size={30} color='#37474F' />
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'snow',
        width:90,
        justifyContent:'center',
        alignItems: 'center',
    }
})
export default ProductItemRigthAction;