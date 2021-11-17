import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

import colors from '../config/colors';
import fontConfig from '../config/fonts';

function AppButton({title, onPress, ...otherProps}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, {...otherProps}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        //backgroundColor:colors.primary,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:8,
        padding:17,        
    },
    title:{
        color:colors.screenBackgroung,
        fontSize:fontConfig.fontSize.button,
        fontWeight: fontConfig.fontWiegth.bold,
    }
})
export default AppButton;