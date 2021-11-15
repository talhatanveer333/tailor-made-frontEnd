import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Constants from 'expo-constants';
import {Formik} from 'formik';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import authApi from '../api/authApi';
import AuthContext from '../auth/context';
import AuthStore from '../auth/authStorage';

const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(8).label('Password')
})

function LoginScreen({navigation}) {
    const [loginFailed, setLoginFailed] = useState(false);
    const authContext=useContext(AuthContext);

    const getAuthToken = async ({email, password}) => {
        const result = await authApi.login(email, password);
        if(!result.ok) return setLoginFailed(true);

        setLoginFailed(false);
        AuthStore.storeToken(result.data);
        //console.log(result.data);
        const user=jwtDecode(result.data);
        authContext.setUser(user);
        //console.log(user);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='store' size={100} color='#5E35B1' style={styles.icon} />
            <Text style={styles.heading}>Chaudhry Traders</Text>
            <Formik
            initialValues={{email:'' , password:''}}
            onSubmit={getAuthToken}
            validationSchema={validationSchema}
            >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
                {loginFailed && <AppText text='Invalid email or password.' color='red' fontSize={18} alignSelf='center'/>}
                <AppTextInput
                icon='email'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Email'
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}/>
                {errors.email && touched.email && <AppText text={errors.email} color='red' fontSize={15} paddingLeft={15}/>}

                <AppTextInput
                icon='lock'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Password'
                textContentType='password'
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={()=> setFieldTouched('password')}/>
                {errors.password && touched.password && <AppText text={errors.password} color='red' fontSize={15} paddingLeft={15}/>}

                <AppButton title='Login' onPress={handleSubmit} />
            </>   
            )}
            </Formik>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'snow',
        paddingTop: Constants.statusBarHeight,
        paddingLeft:10,
        paddingRight:10,
    },
    icon:{
        //paddingBottom:10,
    },
    heading:{
        fontSize:30,
        color:'#5E35B1',
        paddingBottom:50,
    }
})
export default LoginScreen;