import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function AppText({text, numberOfLines, ...otherProps}) {
    return (
        <View style={styles.container}>
            <Text numberOfLines={numberOfLines} style={{...otherProps}}
             >{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        //width:'100%',
    },
})
export default AppText;