import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import InputField from '../components/InputField';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email')
})

function LoginPageScreen(props) {
    const login=async()=>{

    }

    return (
        <View style={styles.container}>
            <Formik
            initialValues={{email:''}}
            onSubmit={login}
            validationSchema={validationSchema}
            >
            {({handleChange, touched, handleSubmit, setFieldTouched, errors})=>(
            <>
                <InputField
                autoCapitalize='none'
                autoCorrent={false}
                placeholder='Email'
                textContentType='emailAddress'
                onBlur={()=>setFieldTouched('email')}
                onChangeText={handleChange('email')}
                />
                {errors.email && touched.email && <AppText text={errors.email} color={colors.danger} />}

                <AppButton title={'Next'} onPress={handleSubmit} position={'absolute'} bottom={10}/>
            </>
            )}
            
            </Formik>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    }
})

export default LoginPageScreen;