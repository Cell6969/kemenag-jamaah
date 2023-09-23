import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export const CardWeather = ({ weatherInfo }) => {
  const average = (array) =>
    Math.round(array.reduce((a, b) => a + b) / array.length, 3);
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View>
          <Text style={styles.title}>Informasi Cuaca</Text>
        </View>
        <View>
          <View style={styles.infoBox}>
            <FontAwesome5 name="temperature-high" size={25} color="white" />
            <Text style={styles.infoText}>
              Temperatur Area: {average(weatherInfo.temperature_2m)} °C
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.infoBox}>
            <MaterialCommunityIcons
              name="water-circle"
              size={25}
              color="white"
            />
            <Text style={styles.infoText}>
              Kelembapan: {average(weatherInfo.relativehumidity_2m)} %
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.infoBox}>
            <MaterialCommunityIcons
              name="weather-windy-variant"
              size={25}
              color="white"
            />
            <Text style={styles.infoText}>
              Kecepatan Angin: {average(weatherInfo.windspeed_10m)} km/h
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3662AA",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: "white",
  },
});
