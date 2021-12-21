import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TailorsList from '../components/TailorsList';
import colors from '../config/colors';
import Constants  from 'expo-constants';

function TailorsScreen(props) {
    return (
        <View style={styles.container}>
            <TailorsList />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    paddingHorizontal:10,
    backgroundColor:colors.screenBackground,
    paddingTop:Constants.statusBarHeight,
    }
})

export default TailorsScreen;