import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';

function TailorCard(props) {
    return (
        <View style={styles.container}>
            <View style={{
                    width:80,
                    height:80,
                    backgroundColor:colors.third,
                    borderRadius:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <Image style={{
                        width:50,
                        height:50,
                        resizeMode:'stretch',
                    }} source={require('../assets/maleAvatar0.png')} />
                </View>

            <View style={styles.subContainer}>                
                <View style={{//1st view
                    width:'50%',
                    paddingLeft:12,
                    //backgroundColor:'red'
                }}>
                    <Text numberOfLines={1} style={styles.heading}>{props.heading}</Text>
                    <Text numberOfLines={3} style={styles.subHeading}>{props.subHeading}</Text>
                </View>
                <View style={{//2nd view
                    width:'30%',
                    //backgroundColor:'green',
                }}>
                    <Text numberOfLines={1} style={styles.hint}>starting from</Text>
                    <Text numberOfLines={1} style={styles.price}>Rs. {props.price}</Text>
                </View>

            </View>{/*subView*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius:15,
        backgroundColor:colors.secondary,
        padding:10,
        justifyContent:'center',
        elevation:5,
        overflow:'hidden',
        marginTop:15,
        flexDirection:'row',
        borderWidth:1.5,
        borderColor:colors.third,
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
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