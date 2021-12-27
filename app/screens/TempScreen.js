import React from 'react';
import { View } from 'react-native';

import TailorHomeCardList from '../components/TailorHomeCardList';
import colors from '../config/colors';
import HeadSection from '../components/HeadSection';

const item={
    name:'I am tailor',
    description:'main kapry seeta hun',
    price:1200,
    isNew:true,
}

function TempScreen(props) {
    return (
        <>
        <HeadSection title='Tailors' />
        <View style={{backgroundColor:colors.screenBackground}}>
            <TailorHomeCardList  />
        </View>
        </>
    );
}

export default TempScreen;