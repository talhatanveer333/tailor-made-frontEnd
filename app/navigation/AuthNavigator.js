import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import LoginPageScreen from '../screens/LoginPageScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack=createStackNavigator();
const AuthNavigator=()=>(
    <Stack.Navigator
    screenOptions={{
        //headerShown:false,
        presentation:'modal',
        gestureEnabled:true
    }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Log in' component={LoginPageScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Create Account' component={CreateAccountScreen}/>
    </Stack.Navigator>
)

export default AuthNavigator;