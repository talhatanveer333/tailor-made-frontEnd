import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import {MaterialCommunityIcons, Ionicons, Octicons} from '@expo/vector-icons';

import TailorsScreen from '../screens/TailorsScreen';
import TailorDetailsScreen from '../screens/TailorDetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../config/colors';

const Stack=createStackNavigator();
const TailorNavigator=()=>
    <Stack.Navigator
    initialRouteName='TailorsScreen'
    mode='modal'
    screenOptions={{
        headerShown:false,
    }}
    >
        <Stack.Screen
        name='TailorsScreen'
        component={TailorsScreen}
        />
        <Stack.Screen
        name='TailorDetailsScreen'
        component={TailorDetailsScreen}
        />
    </Stack.Navigator>

const BottomTab=createBottomTabNavigator();
const AppNavigator=()=>(
    <BottomTab.Navigator
    initialRouteName='Home'
    tabBarOptions={{
    activeBackgroundColor:colors.third,
    activeTintColor:colors.screenBackground,
    inactiveBackgroundColor:colors.primary,
    inactiveTintColor:colors.third,
    showLabel:false
    }}>
        <BottomTab.Screen name='Home'
        component={TailorNavigator}
        options={{
        headerShown:false,
        tabBarIcon:({size, color}) => <MaterialCommunityIcons name='home' color={color} size={40} />
        }}
        />
        <BottomTab.Screen name='Settings'
        component={SettingsScreen}
        options={{
        headerShown:false,            
        tabBarIcon:({size, color}) => <Ionicons name='settings' color={color} size={40} />
        }}
        />
    </BottomTab.Navigator>
);
export default AppNavigator;