import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import InputField from '../components/InputField';
import AppText from '../components/AppText';
import colors from '../config/colors';
import fontConfig from '../config/fonts';
import AppButton from '../components/AppButton';


const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    name: Yup.string().required().label('Name'),
    password: Yup.string().required().min(8).label('Password')
})

function createAccountScreen(props) {
const [isErr, setIsErr] = useState(false); 
const [Err, setErr] = useState('Account already exists.');

const createAccount = async ()=>{
    setIsErr(true);
    setErr('Account already exists.');
}

    return (
        <View style={styles.mainContainer}>
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
                placeholder='Name'
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

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding:10,
        //backgroundColor:'grey'
    }
})

export default createAccountScreen;