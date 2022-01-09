import React from 'react';
import {View} from 'react-native'

import CartList from '../components/CartList';

function CartScreen(props) {
    return (
        <View>
            <CartList />
        </View>
    );
}

export default CartScreen;