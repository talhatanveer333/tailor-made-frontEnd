<<<<<<< HEAD
import React from "react";
import { View } from "react-native";
=======
import React from 'react';
import {View} from 'react-native'
import { scale } from 'react-native-size-matters';

import CartList from '../components/CartList';
import colors from '../config/colors';
import HeadSection from '../components/HeadSection';
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528

import CartList from "../components/CartList";
import colors from "../config/colors";
function CartScreen(props) {
<<<<<<< HEAD
  return (
    <View style={{ backgroundColor: colors.primary }}>
      <CartList />
    </View>
  );
=======
    return (
        <>
        <HeadSection title='Cart Items' />
        <View style={{paddingHorizontal:scale(7), backgroundColor:colors.screenBackground, paddingBottom:scale(76)}}>
            <CartList />
        </View>
        </>
    );
>>>>>>> 763ee3f93061c9e14bd05c001257ca4dd6c69528
}

export default CartScreen;
