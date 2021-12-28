import React from 'react';
import { View } from 'react-native';

import Catalog from '../components/CatalogList';
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
        {/* <HeadSection title='Tailors' /> */}
        <View style={{backgroundColor:colors.screenBackground}}>
            <Catalog />
        </View>
        </>
    );
}

export default TempScreen;