import React from 'react';
import { View } from 'react-native';

import TailorHomeCardList from '../components/TailorHomeCardList';
import colors from '../config/colors';

const item={
    name:'I am tailor',
    description:'main kapry seeta hun',
    price:1200,
    isNew:true,
}

function TempScreen(props) {
    return (
        <View style={{backgroundColor:colors.hint}}>
            <TailorHomeCardList  />
        </View>
    );
}

export default TempScreen;