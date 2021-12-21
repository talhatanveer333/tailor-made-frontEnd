import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import Constants from 'expo-constants';

import AuthContext from '../auth/context';
import colors from '../config/colors';

function HomeScreen(props) {
    const {user, setUser} = useContext(AuthContext);
    return (
        <View style={styles.container}>
          <View style={styles.topView}>
              <Text style={styles.Text}>Business: {'user.selectedBusiness'}</Text>
              <Text style={styles.Text}>Logged-in as: {'user.firstName' + ' ' + 'user.lastName'}</Text>
          </View>
          <View style={styles.middleView}>
              <View style={styles.iconView}>
                  <Fontisto name='shopping-pos-machine' size={70} color='rgb(96, 39, 99)'/>
              </View>
          </View>

          <View style={styles.bottomView}>
            <View style={styles.barcodeIconView}>
                <Image style={styles.image} source={require('../assets/barcode.gif')} resizeMode='contain'/>
            </View>

            
            <Text style={styles.heading}>New Sale</Text>

          <View style={styles.gridView}>
            <View style={styles.gridViewParentLeft}>
              <View style={styles.returnView}>
                  <MaterialCommunityIcons name="keyboard-return" size={70} color="white" />
              </View>
              <Text style={styles.heading}>Return Item</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate("Create Account")}>
            <View style={styles.gridViewParentRight}>
              <View style={styles.searchView}>
                  <Ionicons name="md-search" size={70} color="white" />
              </View>
              <Text style={styles.heading}>Search Inventory</Text>
            </View>
            </TouchableWithoutFeedback>
          </View>



          </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems: 'center',
        //paddingTop: Constants.statusBarHeight,
        backgroundColor:colors.screenBackground,
        paddingTop:Constants.statusBarHeight,
    },
    topView:{
        //width:'100%',
        flex:0.17,
        backgroundColor: 'rgb(71, 29, 73)',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:15,
    },
    Text:{
        color:'rgb(189, 173, 189)',
        fontSize:15,
        //fontWeight: 'bold',
    },
    middleView:{
        flex:0.3,
        backgroundColor:'rgb(96, 39, 99)',
        alignItems:'center',
        justifyContent:'center',
    },
    iconView:{
        backgroundColor: 'white',
        borderRadius:60,
        width:110,
        height:110,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:9,
        borderColor: 'rgb(112, 60, 115)',
    },
    bottomView:{
        flex:1,
        padding:20,
        backgroundColor:'snow',
        //justifyContent:'center',
        alignItems:'center',
    },
    barcodeIconView:{
        width:'100%',
        height:180,
        borderWidth:9,
        backgroundColor:'rgb(96, 39, 99)',
        borderColor: 'rgb(112, 60, 115)',
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
    },
    gridView:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:30,
        //backgroundColor:'black'
    },
    returnView:{
        width:'100%',
        height:130,
        borderWidth:9,
        borderRadius:20,
        borderColor:'rgb(118, 128, 242)',
        backgroundColor:'rgb(95, 106, 240)',
        alignItems:'center',
        justifyContent:'center',

    },
    searchView:{
        width:'100%',
        height:130,
        borderWidth:9,
        borderRadius:20,
        borderColor:'rgb(0, 195, 255)',
        backgroundColor:'rgb(0, 185, 255)',
        alignItems:'center',
        justifyContent:'center',
    },
    heading:{
        color:'black',
        fontSize:18,
        fontWeight:'300',
        paddingTop:10,
    },
    gridViewParentLeft:{
        alignItems:'center',
        justifyContent:'center',
        width:'50%',
        paddingRight:10,
    },
    gridViewParentRight:{
        alignItems:'center',
        justifyContent:'center',
        width:'50%',
        paddingLeft:10,
    },
    image:{
        width:'80%',
    }
    
})


export default HomeScreen; 