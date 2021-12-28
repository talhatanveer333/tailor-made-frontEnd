import React from 'react';
import { View } from 'react-native';

import TestimonialCardList from '../components/TestimonialList';
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
        <View style={{backgroundColor:colors.screenBackground1}}>
            <TestimonialCardList />
        </View>
        </>
    );
}

export default TempScreen;