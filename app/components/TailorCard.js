import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';

function TailorCard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <MaterialCommunityIcons style={{
                    paddingRight:20,
                }} name='face' size={80} color='black' />
                <View style={{
                    width:'60%'
                }}>
                    <Text numberOfLines={1} style={styles.heading}>{props.heading}</Text>
                    <Text numberOfLines={3} style={styles.subHeading}>{props.subHeading}</Text>
                </View>
                <View style={{

                }}>
                    <Text numberOfLines={1} style={styles.hint}>starting from</Text>
                    <Text numberOfLines={1} style={styles.price}>Rs. {props.price}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius:15,
        backgroundColor:colors.screenBackground,
        width:'100%',
        height:'15%',
        padding:10,
        justifyContent:'center',
        elevation:8,
        overflow:'hidden',
        marginTop:15,
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center',
        //justifyContent:'center',
    },
    heading:{
        color:colors.textHeading,
        fontFamily:fonts.fontFamily.primary,
        fontSize:fonts.fontSize.heading,
        fontWeight:fonts.fontWiegth.heading,
    },
    subHeading:{
        color:colors.hint,
        fontFamily:fonts.fontFamily.primary,
        fontSize:fonts.fontSize.text,
        fontWeight:fonts.fontWiegth.text,
        paddingTop:7,
        
    },
    price:{
        color:colors.textHeading,
        fontFamily:fonts.fontFamily.funky   ,
        fontSize:fonts.fontSize.headingPro,
        fontWeight:fonts.fontWiegth.bold,
    },
    hint:{
        color:colors.hint,
        fontFamily:fonts.fontFamily.primary,
        fontSize:fonts.fontSize.text,
        fontWeight:fonts.fontWiegth.text,
        alignSelf:'center',
    }
})

export default TailorCard;