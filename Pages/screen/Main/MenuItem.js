import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Maps from "./Maps";


const MenuComponent = ({ title, imageSource, destination }) => {
  const navigation = useNavigation();
  const HandlePress = () => {
    navigation.navigate(destination);
  };
  return (
    <View  style={styles.menuItemBox}>
      <TouchableOpacity style={styles.menuItem} onPress={HandlePress}>
        {/* <Image />  put image in here */}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridRow}>
        <MenuComponent title="item1" imageSource="" destination="" />
        <MenuComponent title="Maps" imageSource="" destination="Hometab" />
      </View>
      <View style={styles.gridRow}>
        <MenuComponent title="item3" imageSource="" destination="" />
        <MenuComponent title="item4" imageSource="" destination="" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%", // Adjust as needed
    marginBottom: 20,
  },
  menuItem: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItemBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
});

export default MenuItem;
