import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';
import fontConfig from '../config/fonts';

function InputField({placeholder, ...otherProps}) {
const [focus, setFocus]=useState(false);
const [placeholderVar, setPlaceholderVar] = useState(placeholder);

    return (
        <View style={styles.container}>
            {focus && <Text style={styles.heading}>{placeholder}</Text>}
            <TextInput style={styles.input}
            {...otherProps}
            onFocus={()=>{
                setFocus(true);
            }}
            onBlur={()=>{
                //setFocus(false)
                setPlaceholderVar(placeholder);
            }}
            placeholder={placeholderVar}
             />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:8,
        marginTop:10,
        overflow:'hidden',
        borderBottomWidth:2,
        borderColor:colors.primary,
    },
    input:{
        paddingLeft:5,
        width:'100%',
        color:colors.input,
        fontSize:fontConfig.fontSize.input,
        fontWeight:fontConfig.fontWiegth.text,
        fontFamily:fontConfig.fontFamily.primary,
    },
    heading:{
        color:colors.primary,
        fontSize:fontConfig.fontSize.heading,
        fontWeight:fontConfig.fontWiegth.heading,
        fontFamily:fontConfig.fontFamily.primary,
    }
})

export default InputField;