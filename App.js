import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthStore from './app/auth/authStorage';
import CartStorage from './app/cart/cartStorage';
import CartContext from './app/cart/context';
import colors from './app/config/colors';
import TempScreen from './app/screens/TailorDetailsScreen';


export default function App() {
const [user, setUser]=useState();
const [cart, setCart]=useState();
const [isAppReady, setIsAppReady]=useState(false);

const restoreCart = async()=>{
  const cart=await CartStorage.getCartData();
  if(cart) setCart(cart);
  else setCart({
    total:0,
    products:[]
  });
}
const restoreUserData = async()=>{
  const user=await AuthStore.getUser();
  if(user) setUser(user);

  await restoreCart();
}


if(!isAppReady)
return(
  // this is when application is loading and we decode the token meanwhile
  <AppLoading startAsync={restoreUserData} onFinish={()=> setIsAppReady(true)} onError={console.warn}/>
  );

  return (
    <>
    
    <AuthContext.Provider value={{user, setUser}}>
      <CartContext.Provider value={{cart, setCart}}>
        <NavigationContainer >
          {/* {user? <AppNavigator /> : <AuthNavigator />} */}
          <TempScreen />
        </NavigationContainer>
        </CartContext.Provider>
    </AuthContext.Provider>

    <StatusBar style="inverted" />
    </>

  );
}

