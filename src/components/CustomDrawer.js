import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import Logo from "../../assets/peruri-logo.png";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#ffffff",
            marginBottom: 20,
          }}
        >
          <Image source={Logo} style={{ width: 130, height: 130 }} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 50,
          marginLeft: 8, // Add margin to the left side
          marginRight: 8, // Add margin to the right side
          backgroundColor: "#3662AA",
          paddingVertical: 10,
          paddingHorizontal: 1,
          borderRadius:5,
          flexDirection: "row", // Align icon and text horizontally
          justifyContent: "center", // Center icon and text horizontally
          alignItems: "center", // Center icon and text vertically
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="logout"
            size={24}
            color="white"
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
