import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Maps from "../pages/Maps/Maps";
import MecaPage from "../pages/Mecca/Mecca";
import MadinahPage from "../pages/Madinah/Madinah";
import Guide from "../pages/HajjGuide/Guide";
import Emergency from "../pages/Emergency/Emergency";
import About from "../pages/About";
import logo from "../../assets/peruri-logo.png";

const Drawer = createDrawerNavigator();

const DrawerMenu = ({ route, navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <Drawer.Navigator
        initialRouteName="Maps"
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1,
                  backgroundColor: "white",
                }}
              >
                <Image source={logo} style={{ height: 130, width: 130 }} />
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
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
          drawerLabelStyle: {
            color: "black",
          },
        }}
      >
        <Drawer.Screen
          name="Maps"
          options={{
            drawerLabel: "Maps",
            title: "Maps",
            drawerIcon: () => (
              <MaterialIcons name="map" size={20} color="black" />
            ),
          }}
          // component={Maps}
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
            drawerIcon: () => (
              <MaterialIcons name="place" size={20} color="black" />
            ),
          }}
          component={MecaPage}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Madinah"
          options={{
            drawerLabel: "Madinah",
            title: "Madinah",
            drawerIcon: () => (
              <MaterialIcons name="place" size={20} color="black" />
            ),
          }}
          component={MadinahPage}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Tata Cara Haji"
          options={{
            drawerLabel: "Tata Cara Haji",
            title: "Tata Cara Haji",
            drawerIcon: () => (
              <MaterialIcons name="person" size={20} color="black" />
            ),
          }}
          component={Guide}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Emergency"
          options={{
            drawerLabel: "Emergency",
            title: "Emergency",
            drawerIcon: () => (
              <MaterialIcons name="warning" size={20} color="black" />
            ),
          }}
          component={Emergency}
        ></Drawer.Screen>
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerLabel: "About",
            title: "About",
            drawerIcon: () => (
              <MaterialIcons name="info" size={20} color="black" />
            ),
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </>
  );
};

export default DrawerMenu;
