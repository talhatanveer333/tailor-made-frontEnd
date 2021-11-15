import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function Card({uri, price, title, description, onPress, renderRightActions}) {
    const [qty, setQty]=useState(1);
    return (
        <Swipeable
        renderRightActions={renderRightActions}>
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.mainContainer}>
                

                <View style={styles.leftContainer}>
                    <View style={styles.iconContainer}><Text style={styles.icon}>{title.substring(0,2)}</Text></View>
                </View>

                <View style={styles.rightContainer}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    <Text numberOfLines={2} style={styles.description}>{description}</Text>
                    <View style={styles.qtyPriceContainer}>
                        <Text style={styles.qty}>Qty. {qty}</Text>
                        <Text style={styles.price}>{price} PKR</Text>
                    </View>
                </View>
                <View style={styles.qtyContainer}>
                    <TouchableOpacity onPress={() => setQty(qty+1)}>
                        <View style={styles.buttonView}>
                            <MaterialCommunityIcons size={30} name='plus' />    
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {if(qty>0) setQty(qty-1)}}>
                        <View style={styles.buttonView}>
                            <MaterialCommunityIcons size={30} name='minus' />    
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        //width:550,
        height:130,
        overflow:'hidden',
        padding: 2,
        backgroundColor:'snow',
        flexDirection:'row',
        borderBottomWidth:0.6,
        borderColor:'grey',
        paddingBottom:10,
        paddingTop:10,
        //marginTop:10,
        //marginBottom:20,
        justifyContent:'flex-start',
    },
    leftContainer:{
        justifyContent:'center',
        width:'20%',
        height:'100%',
    },
    rightContainer:{
        justifyContent:'center',
        paddingLeft:25,
        paddingRight:25,
        //backgroundColor:'red',
        width:'69%',
    },
    qtyPriceContainer:{
        flexDirection:'row',
        paddingTop:10,
        alignItems: 'center',
    },
    price:{
        fontSize:16,
        fontWeight:'400',
        color:'#37474F',
        position: 'absolute',
        right:10,
        top:15,
    },
    title:{
        fontSize:20,
        fontWeight:'400',
        color:'black',
    },
    description:{
        fontSize:15,
        fontWeight:'300',
        color:'grey',
        //lineHeight:25,
    },
    qty:{
        fontSize:15,
        color:'grey',
        fontWeight:'300',
    },
    qtyContainer:{
        //position: 'absolute',
        alignSelf:'center',
        //justifyContent:'center',
        //right:5,
        //top:6,
        width:'10%',
        height:125,
        //backgroundColor:'grey',
    },
    buttonView:{
        backgroundColor:'#E0E0E0',
        width:50,
        height:58,
        marginTop:3,
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    iconContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#FFEB3B',
        borderRadius:10,
    },
    icon:{
        fontSize:50,
        fontWeight:'bold',
    },
    
})

export default Card;