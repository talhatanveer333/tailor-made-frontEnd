import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TailorsList from '../components/TailorsList';

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
    backgroundColor:'snow',
    }
})

export default TailorsScreen;