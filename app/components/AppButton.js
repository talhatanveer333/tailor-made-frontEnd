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
        borderColor:colors.primary,
        borderWidth:1,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:5,
        padding:10,        
    },
    title:{
        color:colors.primary,
        fontSize:20,
        fontWeight: fontConfig.fontWiegth.bold,

    }
})
export default AppButton;