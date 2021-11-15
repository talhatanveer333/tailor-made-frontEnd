import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Entypo} from '@expo/vector-icons';

function invoiceCard({title, qty, price}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>{title.substring(0,2)}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{title}</Text>
                    <Text style={styles.qty}> x {qty}</Text>
                    <Text style={styles.total}>{qty*price}</Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <Entypo color='#78909C' name='circle-with-cross' size={30} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'snow',
        flexDirection:'row',
        elevation:7,
        width:'100%',
        height:45,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#FFEB3B',
        overflow:'hidden',
        marginTop:5,
    },
    leftContainer:{
        justifyContent:'center',
        alignItems: 'center',
        width:60,
        backgroundColor:'#FFEB3B'
    },
    rightContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'snow',
        //width:370,
    },
    detailsContainer:{
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:20,
    },
    title:{
        fontSize:22,
        fontWeight:'600',
    },
    name:{
        fontSize:15,
        fontWeight:'400',
    },
    qty:{
        fontSize:16,
        fontWeight:'500',
    },
    total:{
        fontSize:18,
        fontWeight:'700',
        position: 'absolute',
        right:5,
    },
    iconContainer:{
        //flex:1,
        justifyContent:'center',
        alignItems: 'center',
        width:50,
        //backgroundColor:'red',
    },
})

export default invoiceCard;