import * as SecureStore from 'expo-secure-store';

const key="cartData";

const storeCartData = async (data) =>{
    try{
        await SecureStore.setItemAsync(key, data);
    }
    catch(err)
    {
        console.log('Error storing the cart data' + err);
    }
}

const getCartData = async () =>{
    try{
        return await SecureStore.getItemAsync(key);
    }
    catch(err){
        console.log('Error getting the cart data'+err);
    }
} 

const removeCartData=async ()=>{
    try{
        await SecureStore.deleteItemAsync(key);
    }
    catch(err){
        console.log('Error deleting the cart data'+err);
    }
}

export default {storeCartData, getCartData, removeCartData}