import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';

function ConversationHead({name, description}) {
    return (
        <View style={styles.container}>
            <Text style={styles.name} numberOfLines={1}>
                {name}
            </Text>
            <Text style={styles.description} numberOfLines={1}>
                {description}
            </Text>
            <Ionicons style={styles.icon} name="chevron-forward" size={24} color="grey" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.screenBackground,
        borderTopWidth:0.5,
        borderColor:colors.third,
        justifyContent:'center',
        padding:15,

    },
    name:{
        fontSize:fonts.fontSize.heading,
        fontWeight:fonts.fontWiegth.heading,
        color:colors.textHeading,
        paddingBottom:5,
    },
    description:{
        fontSize:fonts.fontSize.text,
        fontWeight:fonts.fontWiegth.text,
        color:colors.text,
    },
    icon:{
        position:'absolute',
        right:-5,

    }
})

export default ConversationHead;