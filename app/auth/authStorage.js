import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key="authToken";

const storeToken = async (authToken) =>{
    try{
        await SecureStore.setItemAsync(key, authToken);
    }
    catch(err)
    {
        console.log('Error storing the token' + err);
    }
}

const getToken = async () =>{
    try{
        return await SecureStore.getItemAsync(key);
    }
    catch(err){
        console.log('Error getting the token'+err);
    }
} 

const removeToken=async ()=>{
    try{
        await SecureStore.deleteItemAsync(key);
    }
    catch(err){
        console.log('Error deleting the token'+err);
    }
}

const getUser=async()=>{
    const token=await getToken();
    return token ? jwtDecode(token) : null;
    //return null;
    
    
}

export default {storeToken, removeToken, getUser, getToken}