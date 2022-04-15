import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import InputField from '../components/InputField';
import AppText from '../components/AppText';
import colors from '../config/colors';
import fontConfig from '../config/fonts';
import AppButton from '../components/AppButton';
import userApi from '../api/userApi';
import authStorage from '../auth/authStorage';
import authContext from '../auth/authContext';


const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    name: Yup.string().required().label('Name'),
    password: Yup.string().required().min(8).label('Password')
})

function createAccountScreen(props) {
const [isErr, setIsErr] = useState(false); 
const [Err, setErr] = useState('Account already exists.');
const {setUser}=useContext(authContext);

const createAccount = async ({email,name,password})=>{
    const result=await userApi.signUp(email,name,password);
    if(!result.ok){
        setErr(result.data);
        return setIsErr(true);
    }
    setIsErr(false);
    console.log(result.data);
    authStorage.storeToken(result.data);
    setUser(jwtDecode(result.data));    
}

    return (
        <View style={{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding:10,
        backgroundColor:colors.screenBackground1,
        }}>
            <Formik
            initialValues={{email:'', password:'', name:''}}
            onSubmit={createAccount}
            validationSchema={validationSchema}
            >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
                {isErr && <AppText text={Err} color={colors.danger} fontSize={fontConfig.fontSize.heading} alignSelf='center'/>}

                <InputField                
                autoCapitalize='none'
                autoCorrent={false}
                placeholder='Email'
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && <AppText  text={errors.email} color={colors.danger} fontSize={fontConfig.fontSize.text} paddingLeft={15}/>}

                <InputField
                autoCapitalize='none'
                autoCorrent={false}
                placeholder='Full Name'
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                />
                {touched.name  && errors.name &&  <AppText  text={errors.name} color={colors.danger} fontSize={fontConfig.fontSize.text} paddingLeft={15}/>}

                <InputField
                autoCapitalize='none'
                autoCorrent={false}
                secureTextEntry
                placeholder='Password'
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                />
                {touched.password && errors.password  && <AppText  text={errors.password} color={colors.danger} fontSize={fontConfig.fontSize.text} paddingLeft={15}/>}
                <AppText text='*At least 8 characters' color={colors.hint} fontSize={fontConfig.fontSize.heading} alignSelf='center' marginTop={10}/>

                <AppButton title='Create Account' onPress={handleSubmit} position={'absolute'} bottom={10}/>
            </>
            )}
            </Formik>
        </View>
    );
}

export default createAccountScreen;