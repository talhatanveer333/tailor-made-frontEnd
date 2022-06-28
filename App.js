import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AuthContext from "./app/auth/authContext";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthStore from "./app/auth/authStorage";
import CartStorage from "./app/cart/cartStorage";
import CartContext from "./app/cart/context";
import colors from "./app/config/colors";
import TempScreen from "./app/screens/FeedbackScreen";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState();
  const [isAppReady, setIsAppReady] = useState(false);

  const restoreUserData = async () => {
    const user = await AuthStore.getUser();
    if (user) setUser(user);
  };

  if (!isAppReady)
    return (
      // this is when application is loading and we decode the token meanwhile
      <AppLoading
        startAsync={restoreUserData}
        onFinish={() => setIsAppReady(true)}
        onError={console.warn}
      />
    );

  return (
    <>
      <StripeProvider publishableKey="pk_test_51LDvPeAThn3fA2tcWhGVAaWjjRK67Pecj60QOcDHmZO9fFGwHWFm56uhUAXj3Qb7FP2qv8iWTmdDn3YZpO3f3ncR00VZbYx6yG">
        <AuthContext.Provider value={{ user, setUser }}>
          <NavigationContainer>
            {user ? <AppNavigator /> : <AuthNavigator />}
            {/* <TempScreen
              tailor={{ imgUrl: "https://picsum.photos/200", name: "Talha" }}
            /> */}
          </NavigationContainer>
        </AuthContext.Provider>
      </StripeProvider>

      <StatusBar style="inverted" />
    </>
  );
}
