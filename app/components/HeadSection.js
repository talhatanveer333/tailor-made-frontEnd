import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons';

import AuthContext from '../auth/context';
import colors from '../config/colors';
import Constants from 'expo-constants';
import AppText from '../components/AppText';
import fonts from '../config/fonts';

function HeadSection(props) {
const {user, setUser}=useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AppText text={props.title} color={colors.textHeading} 
            fontSize={fonts.fontSize.headingPro1}/>
            <Image style={styles.profileImage} resizeMode={'cover'} 
            source={{
                uri:'https://picsum.photos/id/241/200/300',
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:120,
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal:20,
        paddingBottom:5,
        flexDirection:'row',
        alignItems:'center',
    },
    profileImage:{
        position:'absolute',
        alignSelf:'center',
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:10,
        borderWidth:2,
        borderColor:colors.third,
        right:15,
        bottom:15,
    },
})

export default HeadSection;