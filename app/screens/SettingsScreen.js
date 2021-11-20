import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Entypo, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';

import OptionsList from './../components/SettingsOptionsList';
import HeadSection from '../components/HeadSection';
import AuthContext from '../auth/context';
import Button from '../components/AppButton';


function SettingsScreen(props) {
const {user, setUser}=useContext(AuthContext);
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollView}>

            <HeadSection />
            
            
            <View style={styles.lowerContainer}>
                
                <Text style={styles.heading}>My Settings</Text>
                <View style={styles.profileDataContainer}>
                        <Image style={styles.profileImage} resizeMode={'cover'} source={{
                            uri:'https://picsum.photos/id/241/200/300',
                        }}/>
                        <View style={styles.iconView}>
                            <Entypo name='camera' size={15} style={styles.icon} /> 
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.name}>{'Talha' + ' ' + 'Tanveer'}</Text>
                            <Text style={styles.email}>{'talhatanveer333@gmail.com'}</Text>
                        </View>
                </View>
                    
                    <OptionsList />
                    {/* <Card uri={'https://picsum.photos/206'} heading={'Title'} price={'10,000'} title={'subTitle'} description={'I am the descriptions.'} />
                    <Card uri={'https://picsum.photos/206'} heading={'Title'} price={'10,000'} title={'subTitle'} description={'I am the descriptions.'} />
                    <Card uri={'https://picsum.photos/206'} heading={'Title'} price={'10,000'} title={'subTitle'} description={'I am the descriptions.'} /> */}
                    <Button title='Logout' onPress={() => setUser(null)}/>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        //width:'100%',
        //height:'100%',
        //paddingTop:Constants.statusBarHeight,
        //backgroundColor:'grey'
    },
    scrollView:{
        flex:1,
    },
    lowerContainer:{
        flex:1,
        backgroundColor:'snow',
        padding:20,
    },
    heading:{
        fontSize:32,
        color:'black',
        fontWeight:'bold',
        paddingBottom:20,
    },
    profileImage:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:10,
    },
    contentContainer:{
        //backgroundColor:'black',
        paddingLeft:20,
        width:'70%',
        justifyContent:'center',
    },
    name:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    email:{
        color:'grey',
        fontSize:13,
    },
    profileDataContainer:{
        flexDirection:'row',
    },
    iconView:{
        padding:5,
        position:'absolute',
        left:65,
        bottom:5,
        backgroundColor:'white',
        borderRadius:50,
    }
    
})

export default SettingsScreen;