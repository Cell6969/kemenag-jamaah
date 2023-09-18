import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { HotelMecca, HospitalMecca } from "../../constant/coordinate";
import LegendMap from "../../components/LegendMap";


const MeccaCityCoordinates = [
  // Define the coordinates for the polygon (Mecca City)
  { latitude: 21.3891, longitude: 39.8579 },
  { latitude: 21.3891, longitude: 39.8577 },
  { latitude: 21.3887, longitude: 39.8577 },
  { latitude: 21.3887, longitude: 39.8579 },
];

const MecaPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.3891, // Center of Mecca City
          longitude: 39.8579, // Center of Mecca City
          latitudeDelta: 0.1, // Adjust as needed
          longitudeDelta: 0.1, // Adjust as needed
        }}
        legalLabelInsets={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        {/* Draw the polygon for Mecca City */}
        <Polygon
          coordinates={MeccaCityCoordinates}
          strokeWidth={2} // Adjust stroke width as needed
          strokeColor="red" // Color of the polygon border
          fillColor="rgba(255, 0, 0, 0.5)" // Fill color of the polygon
        />
        {HotelMecca.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.nama_hotel}
            description={marker.sektor.toString()}
            pinColor="blue"
          />
        ))}
        {HospitalMecca.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.hospital_mekkah}
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

export default MecaPage;
