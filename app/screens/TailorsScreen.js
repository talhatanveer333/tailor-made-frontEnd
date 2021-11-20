import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TailorCard from '../components/TailorCard';

function TailorsScreen(props) {
    return (
        <View style={styles.container}>
            <TailorCard heading='Basheer Tailors' subHeading='Satyana Road' price='1400'/>
            <TailorCard heading='Basheer Tailors' subHeading='Satyana Road' price='1400'/>
            <TailorCard heading='Basheer Tailors' subHeading='Satyana Road' price='1400'/>
            <TailorCard heading='Basheer Tailors' subHeading='Satyana Road' price='1400'/>
            <TailorCard heading='Basheer Tailors' subHeading='Satyana Road' price='1400'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default TailorsScreen;