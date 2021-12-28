import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

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
        height:scale(75),
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal:scale(10),
        paddingBottom:scale(2),
        flexDirection:'row',
        alignItems:'center',
    },
    profileImage:{
        position:'absolute',
        alignSelf:'center',
        width:scale(40),
        height:scale(40),
        borderRadius:scale(30),
        borderWidth:1,
        borderColor:colors.third,
        right:scale(6),
        bottom:scale(3.5),
    },
})

export default HeadSection;