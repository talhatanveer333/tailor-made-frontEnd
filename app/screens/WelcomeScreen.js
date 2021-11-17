import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground resizeMode='stretch' source={require('../assets/frontPage.png')} style={styles.container}>
            <AppButton title='Log in' onPress={()=>props.navigation.navigate('Log in')}/>
            <AppButton title='Create Account' onPress={()=>props.navigation.navigate('Create Account')} marginTop={20}/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:colors.background,
        padding:10,
    }
})

export default WelcomeScreen;