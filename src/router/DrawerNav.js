import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import CustomDrawerIcon from "../components/CustomDrawerIcon";
import Maps from "../pages/Maps/Maps";
import MecaPage from "../pages/Mecca/Mecca";
import MadinahPage from "../pages/Madinah/Madinah";
import Guide from "../pages/HajjGuide/Guide";
import Emergency from "../pages/Emergency/Emergency";
import About from "../pages/About";
import UserProfile from "../pages/Profile/UserProfile";

const Drawer = createDrawerNavigator();

const DrawerMenu = ({ route, navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <Drawer.Navigator
        initialRouteName="Maps"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "black",
          drawerStyle: {
            backgroundColor: "#ffffff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#3662AA",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveBackgroundColor: "#3662AA",
        }}
      >
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: ({ focused }) => (
              <CustomDrawerIcon name="person" size={20} focused={focused} />
            ),
          }}
        >
          {(props) => (
            <UserProfile
              {...props}
              emailOrUsername={route.params.emailOrUsername}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="Maps"
          options={{
            drawerLabel: "Maps",
            title: "Maps",
            drawerIcon: ({ focused }) => (
              <CustomDrawerIcon name="map" size={20} focused={focused} />
            ),
          }}
        >
          {(props) => (
            <Maps {...props} emailOrUsername={route.params.emailOrUsername} />
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="Mekah"
          options={{
            drawerLabel: "Mekah",
            title: "Mekah",
            drawerIcon: ({ focused }) => (
              <CustomDrawerIcon name="place" size={20} focused={focused} />
            ),
          }}
          component={MecaPage}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Madinah"
          options={{
            drawerLabel: "Madinah",
            title: "Madinah",
            drawerIcon: ({ focused }) => (
              <CustomDrawerIcon name="place" size={20} focused={focused} />
            ),
          }}
          component={MadinahPage}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Tata Cara Haji"
          options={{
            drawerLabel: "Tata Cara Haji",
            title: "Tata Cara Haji",
            drawerIcon: ({ focused }) => (
              <CustomDrawerIcon name="person" size={20} focused={focused} />
            ),
          }}
          component={Guide}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Emergency"
          options={{
            drawerLabel: "Emergency",
            title: "Emergency",
            drawerIcon: ({ focused }) => (
              <CustomDrawerIcon name="warning" size={20} focused={focused} />
            ),
          }}
        >
          {(props) => (
            <Emergency
              {...props}
              emailOrUsername={route.params.emailOrUsername}
            />
          )}
        </Drawer.Screen>
        {/* <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerLabel: "About",
            title: "About",
            drawerIcon: () => (
              <MaterialIcons name="info" size={20} color="black" />
            ),
          }}
        ></Drawer.Screen> */}
      </Drawer.Navigator>
    </>
  );
};

export default DrawerMenu;
