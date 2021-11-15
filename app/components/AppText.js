import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function AppText({text, ...otherProps}) {
    return (
        <View style={styles.container}>
            <Text style={{...otherProps}}
             >{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
})
export default AppText;