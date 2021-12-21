import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import {MaterialCommunityIcons, Ionicons, Octicons} from '@expo/vector-icons';

import HomeScreen from '../screens/TailorsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../config/colors';

const BottomTab=createBottomTabNavigator();
const AppNavigator=()=>(
    <BottomTab.Navigator
    initialRouteName='Home'
    tabBarOptions={{
    activeBackgroundColor:colors.third,
    activeTintColor:colors.screenBackground,
    inactiveBackgroundColor:colors.screenBackground,
    inactiveTintColor:colors.third,
    showLabel:false
    }}>
        <BottomTab.Screen name='Home'
        component={HomeScreen}
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