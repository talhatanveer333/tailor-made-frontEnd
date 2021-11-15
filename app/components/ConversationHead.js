import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

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
        backgroundColor:'snow',
        borderTopWidth:0.5,
        borderColor:'#E0E0E0',
        justifyContent:'center',
        padding:15,
    },
    name:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        paddingBottom:5,
    },
    description:{
        fontSize:13,
        fontWeight:'600',
        color:'grey',
    },
    icon:{
        position:'absolute',
        right:-5,

    }
})

export default ConversationHead;