// LocationDisplay.js
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LocationContext } from "./Provider";

export default function LocationDisplay() {
  const { latitude, longitude, errorMsg } = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
