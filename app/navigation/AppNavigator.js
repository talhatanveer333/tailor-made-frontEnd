import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";

import TailorsScreen from "../screens/TailorsScreen";
import TailorDetailsScreen from "../screens/TailorDetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CartScreen from "../screens/CartScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import colors from "../config/colors";
=======
import TailorsScreen from '../screens/TailorsScreen';
import TailorDetailsScreen from '../screens/TailorDetailsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../config/colors';
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528

const Stack = createStackNavigator();
const TailorNavigator = () => (
  <Stack.Navigator
    initialRouteName="TailorsScreen"
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
<<<<<<< HEAD
  >
    <Stack.Screen name="TailorsScreen" component={TailorsScreen} />
    <Stack.Screen name="TailorDetailsScreen" component={TailorDetailsScreen} />
    <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
  </Stack.Navigator>
);
=======
    >
        <Stack.Screen
        name='TailorsScreen'
        component={TailorsScreen}
        />
        <Stack.Screen
        name='TailorDetailsScreen'
        component={TailorDetailsScreen}
        />
        <Stack.Screen
        name='ProductDetailsScreen'
        component={ProductDetailsScreen}
        />
    </Stack.Navigator>
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528

const BottomTab = createBottomTabNavigator();
const AppNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
<<<<<<< HEAD
      activeBackgroundColor: colors.third,
      activeTintColor: colors.screenBackground,
      inactiveBackgroundColor: colors.primary,
      inactiveTintColor: colors.third,
      showLabel: false,
    }}
  >
    <BottomTab.Screen
      name="Home"
      component={TailorNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="settings" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="cart" color={color} size={size} />
        ),
      }}
    />
  </BottomTab.Navigator>
=======
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
        tabBarIcon:({size, color}) => <MaterialCommunityIcons name='home' color={color} size={size} />
        }}
        />
        <BottomTab.Screen name='Settings'
        component={SettingsScreen}
        options={{
        headerShown:false,            
        tabBarIcon:({size, color}) => <Ionicons name='settings' color={color} size={size} />
        }}
        />
        <BottomTab.Screen name='Cart'
        component={CartScreen}
        options={{
        headerShown:false,            
        tabBarIcon:({size, color}) => <Ionicons name='cart' color={color} size={size} />
        }}
        />
    </BottomTab.Navigator>
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528
);
export default AppNavigator;
