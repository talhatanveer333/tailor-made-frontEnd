import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import {MaterialCommunityIcons, Ionicons, Octicons} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack=createStackNavigator();
const mainNavigator=()=>(
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />

    </Stack.Navigator>
);

const Tab=createBottomTabNavigator();
const AppNavigator=()=>(
    <Tab.Navigator
    initialRouteName='Products'
    tabBarOptions={{
    activeBackgroundColor:'snow',
    activeTintColor:'rgb(97, 106, 232)',
    inactiveBackgroundColor:'snow',
    inactiveTintColor:'rgb(127, 127, 127)',
    showLabel:false
    }}>
        <Tab.Screen name='Home'
        component={mainNavigator}
        options={{
        headerShown:false,
        tabBarIcon:({size, color}) => <MaterialCommunityIcons name='home' color={color} size={40} />
        }}
        />
        <Tab.Screen name='Products'
        component={ProductsScreen}
        options={{
        headerShown:false,            
        tabBarIcon:({size, color}) => <MaterialCommunityIcons name='store' color={color} size={40} />
        }}
        />
        <Tab.Screen name='Settings'
        component={SettingsScreen}
        options={{
        headerShown:false,            
        tabBarIcon:({size, color}) => <Ionicons name='settings' color={color} size={40} />
        }}
        />
        {/* <Tab.Screen name='Product Details Screen'
        component={ProductDetailsScreen}
        options={{
        headerShown:false,            
        tabBarIcon:({size, color}) => <Ionicons name='settings' color={color} size={size} />
        }}
        /> */}
        
    </Tab.Navigator>
);
export default AppNavigator;