import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import TailorHomeCardList from '../components/TailorHomeCardList';
import colors from '../config/colors';
import Constants  from 'expo-constants';
import HeadSection from '../components/HeadSection';

function TailorsScreen(props) {
    return (
        <>
        <HeadSection title='Tailors' />
        <View style={styles.container}>
            <TailorHomeCardList />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
    paddingBottom:scale(50),
    backgroundColor:colors.screenBackground,
    }
})

export default TailorsScreen;