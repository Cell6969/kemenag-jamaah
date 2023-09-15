import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native"; // Import useRoute from React Navigation
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import About from "./Main/About";
import DocumentPray from "./Main/Prayer";
import Emergency from "./Main/Emergency";
import Maps from "./Main/Maps";
import MecaPage from "./Main/Meca";
import MadinahPage from "./Main/Madinah";
import { SafeAreaView, View, Image } from "react-native";
import logo from "../../assets/peruri-logo.png";

const Drawer = createDrawerNavigator();

const HomePage = () => {
  const route = useRoute(); // Access the route object

  const { emailOrUsername } = route.params;

  return (
    <>
      <StatusBar style="light" />
      <Drawer.Navigator
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
          component={Maps}
        ></Drawer.Screen>
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
          component={DocumentPray}
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

export default HomePage;
