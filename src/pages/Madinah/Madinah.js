import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { HotelMadina, HospitalMadina } from "../../constant/coordinate";
import LegendMap from "../../components/LegendMap";

const MadinnaCityCoordinates = [
  // Define the coordinates for the polygon (Mecca City)
  { latitude: 24.5247, longitude: 39.5692 },
  { latitude: 24.5247, longitude: 39.5702 },
  { latitude: 24.5257, longitude: 39.5702 },
  { latitude: 24.5257, longitude: 39.5692 },
];

const MadinahPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.5247, // Center of Mecca City
          longitude: 39.5692, // Center of Mecca City
          latitudeDelta: 0.1, // Adjust as needed
          longitudeDelta: 0.1, // Adjust as needed
        }}
        legalLabelInsets={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        {/* Draw the polygon for Mecca City */}
        <Polygon
          coordinates={MadinnaCityCoordinates}
          strokeWidth={2} // Adjust stroke width as needed
          strokeColor="red" // Color of the polygon border
          fillColor="rgba(255, 0, 0, 0.5)" // Fill color of the polygon
        />
        {HotelMadina.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.hotel_madinah}
            description={marker.sektor.toString()}
            pinColor="blue"
          />
        ))}
        {HospitalMadina.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longiude,
            }}
            title={marker.hospital_madinah}
            pinColor="red"
          />
        ))}
      </MapView>
      <LegendMap />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MadinahPage;
