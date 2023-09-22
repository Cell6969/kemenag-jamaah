import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/Login/LoginPage";
import RegistrationScreen from "../pages/Registration/RegistrationPage";
import DrawerMenu from "./DrawerNav";


const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Drawer" component={DrawerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
