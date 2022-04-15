import React, { useEffect, useState } from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TailorHomeCard  from './TailorHomeCard';
import colors from '../config/colors';
import fonts from '../config/fonts';
import userApi from '../api/userApi';
import AppText from '../components/AppText';

// const tailors=[
//     {
//         id:1,
//         name:'Mohsin',
//         description:'Main darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hunMain darzi hun',
//         price:1500,
//         isNew:true,
//         rating:3,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:2,
//         name:'Talha',
//         description:'Main darzi nahe hun',
//         price:100,
//         isNew:false,
//         rating:4,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:3,
//         name:'Azad',
//         description:'Main darzi nahe hun',
//         price:1800,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:4,
//         name:'Mohsin',
//         description:'Main darzi hun',
//         price:1500,
//         isNew:true,
//         rating:1,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:5,
//         name:'Talha',
//         description:'Main darzi nahe hun',
//         price:100,
//         isNew:false,
//         rating:2,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:6,
//         name:'Azad',
//         description:'Main darzi nahe hun',
//         price:1800,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:11,
//         name:'Mohsin',
//         description:'Main darzi hun',
//         price:1500,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:12,
//         name:'Talha',
//         description:'Main darzi nahe hun',
//         price:100,
//         isNew:false,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:13,
//         name:'Azad',
//         description:'Main darzi nahe hun',
//         price:1800,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:14,
//         name:'Mohsin',
//         description:'Main darzi hun',
//         price:1500,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:15,
//         name:'Talha',
//         description:'Main darzi nahe hun',
//         price:100,
//         isNew:false,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
//     {
//         id:16,
//         name:'Azad',
//         description:'Main darzi nahe hun',
//         price:1800,
//         isNew:true,
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`
//     },
// ]


function TailorHomeCardList() {
    const navigation = useNavigation();
    const [refreshing, setRefreshing]=useState(false);
    const [tailors, setTailors]=useState([]);
    const getTailorsList=async ()=>{
        const response=await userApi.getTailorsList();
        //console.log(response.data);
        setTailors(response.data);
    };
    useEffect(()=>{
        getTailorsList();
    },[]);
if(tailors.length>0)    
    return (
        <FlatList
            refreshing={refreshing}
            onRefresh={()=> ToastAndroid.show('Refreshing', ToastAndroid.SHORT) }
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={tailors}
            keyExtractor={tailors=>tailors._id.toString()}
            renderItem={({item}) => <TailorHomeCard id={item._id} name={item.name} description={item.intro} address={item.address} rating={item.rating} image={item.imageUrl} onPress={()=>navigation.push('TailorDetailsScreen',{name:item.name, rating:item.rating, id:item._id, imageUrl:item.imageUrl, description:item.intro, address:item.address})} />}
            />
    );
    return( // if server crashed
        <>
            <AppText text={`503 Service Unavailable`} color={colors.danger} fontSize={fonts.fontSize.headingPro} alignSelf='center' />
            <AppText text={`Server busy, site may have moved ,or you lost your dial-up Internet connection.`} color={colors.danger} fontSize={fonts.fontSize.text} alignSelf='center' />
        </>
    );
}

export default TailorHomeCardList;