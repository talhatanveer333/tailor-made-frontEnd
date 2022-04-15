import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Entypo, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';

import OptionsList from './../components/SettingsOptionsList';
import HeadSection from '../components/HeadSection';
import Button from '../components/AppButton';
import colors from '../config/colors';
import fonts from '../config/fonts';
import AuthContext from '../auth/authContext';


function SettingsScreen(props) {
const {user, setUser}=useContext(AuthContext);
    return (
        <View style={styles.mainContainer}>
            <HeadSection title={'Settings'}/>
            <ScrollView style={styles.scrollView}>            
            <View style={styles.lowerContainer}>
                
                <Text style={styles.heading}>My Settings</Text>
                <View style={styles.profileDataContainer}>
                        <Image style={styles.profileImage} resizeMode={'cover'} source={{
                            uri:`${user.imageUrl}`,
                        }}/>
                        <View style={styles.iconView}>
                            <Entypo name='camera' size={15} color={colors.third} /> 
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.name}>{`${user.name}`}</Text>
                            <Text style={styles.email}>{`${user.email}`}</Text>
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
        backgroundColor:colors.screenBackground,
        padding:20,
    },
    heading:{
        fontSize:fonts.fontSize.heading,
        color:colors.textHeading,
        fontWeight:fonts.heading,
        paddingBottom:20,
    },
    profileImage:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:10,
        borderWidth:2,
        borderColor:colors.third,
    },
    contentContainer:{
        //backgroundColor:'black',
        paddingLeft:20,
        width:'70%',
        justifyContent:'center',
    },
    name:{
        color:colors.textHeading,
        fontSize:fonts.fontSize.headingPro,
        fontWeight:fonts.fontWiegth.heading,
    },
    email:{
        color:colors.hint,
        fontSize:fonts.fontSize.text,
    },
    profileDataContainer:{
        flexDirection:'row',
        marginBottom:10,
    },
    iconView:{
        padding:5,
        position:'absolute',
        left:65,
        bottom:5,
        backgroundColor:colors.screenBackground,
        borderRadius:50,
    }
    
})

export default SettingsScreen;