import React from 'react';
import {View} from 'react-native'
import { scale } from 'react-native-size-matters';

import CartList from '../components/CartList';
import colors from '../config/colors';
import HeadSection from '../components/HeadSection';

function CartScreen(props) {
    return (
        <>
        <HeadSection title='Cart Items' />
        <View style={{paddingHorizontal:scale(7), backgroundColor:colors.screenBackground, paddingBottom:scale(76)}}>
            <CartList />
        </View>
        </>
    );
}

export default CartScreen;