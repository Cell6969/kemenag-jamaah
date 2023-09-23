import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LegendMap = () => {
  return (
    <View style={styles.legendContainer}>
      {/* Add legend items */}
      <View style={styles.legendItem}>
        <View style={[styles.legendIcon, { backgroundColor: "blue" }]} />
        <Text>Hotel</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.legendIcon, { backgroundColor: "red" }]} />
        <Text>Rumah Sakit</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.legendIcon, { backgroundColor: "#8fce00" }]} />
        <Text>Money Changer</Text>
      </View>
      {/* Add more legend items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  legendContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    elevation: 3,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  legendIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default LegendMap;
