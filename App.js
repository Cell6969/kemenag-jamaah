import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Paho from "paho-mqtt";
import * as Location from "expo-location";

const CLIENT_ID = "Infinix";
const client = new Paho.Client("p1a944b2.emqx.cloud", Number(8083), CLIENT_ID);

const mqttUsername = "raka";
const mqttPassword = "ddi123";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  function onMessage(message) {
    if (message.destinationName === "mqtt-tes") {
      // Handle MQTT messages if needed
    }
  }

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation, // Set the desired accuracy
        maximumAge: 0, // Set maximumAge to 0 to clear the cache
      });

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);

      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      // Send location to MQTT broker
      sendLocation(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error("Error getting location:", error);
      setErrorMsg("Error getting location: " + error.message);
    }
  };

  useEffect(() => {
    // Connect to MQTT broker
    client.connect({
      onSuccess: () => {
        console.log("Connected to MQTT!");
        client.subscribe("geo");
        client.onMessageArrived = onMessage;
      },
      onFailure: () => {
        console.log("Failed to connect to MQTT!");
      },
      userName: mqttUsername,
      password: mqttPassword,
    });

    // Request location initially
    getLocation();

    // Set up interval to update location every 1 second
    const locationUpdateInterval = setInterval(() => {
      getLocation();
    }, 0);

    // Clean up MQTT subscription and interval when the component unmounts
    return () => {
      client.unsubscribe("geo"); // Unsubscribe from the MQTT topic
      client.disconnect(); // Disconnect from MQTT broker
      clearInterval(locationUpdateInterval); // Clear the location update interval
    };
  }, []);

  // Function to send location data through MQTT
  function sendLocation(latitude, longitude) {
    if (client.isConnected()) {
      const locationMessage = new Paho.Message(
        JSON.stringify({ CLIENT_ID, latitude, longitude })
      );
      locationMessage.destinationName = "geo"; // Change the destination topic as needed
      client.send(locationMessage);
    } else {
      console.log("Not connected to the MQTT broker");
    }
  }

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