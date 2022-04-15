import React from 'react';
import {View, Text} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';
import {scale} from 'react-native-size-matters';

import colors from '../config/colors';

function CartSwipeable(props) {
    return (
        <View style={{
            backgroundColor:colors.screenBackground,
            justifyContent:'center',
            alignContent:'center',
            padding:20}}>
            <EvilIcons name='trash' size={scale(30)} color={colors.danger} />
        </View>
    );
}

export default CartSwipeable;