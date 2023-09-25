import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { HotelMadina, HospitalMadina } from "../../constant/coordinate";
import { CardWeather } from "../../components/CardWeather";
import Spinner from "react-native-loading-spinner-overlay";
import categoriesFilter from "../../constant/chipitem";
import { getWeather } from "./getWeatherMadina";
import { Ionicons } from "@expo/vector-icons";

const MadinahPage = ({ route, navigation }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getWeather()
        .then((data) => {
          setWeatherInfo(data);
        })
        .catch((error) => {
          console.log("Error Fetching user information", error);
        })
        .finally(() => {
          // Turn off the loading spinner when the data is fetched
          setLoading(false);
        });
    }, 2000); // Simulate a 2-second delay for the API cal
  }, []);

  return (
    <View style={styles.container}>
      {weatherInfo && (
        <>
          <View style={styles.weather}>
            <CardWeather weatherInfo={weatherInfo} />
          </View>
          <View style={styles.mapContainer}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Lokasi Sekitar Madinah
            </Text>
            <View style={styles.mapBox}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 24.5247, // Center of Mecca City
                  longitude: 39.5692, // Center of Mecca City
                  latitudeDelta: 0.1, // Adjust as needed
                  longitudeDelta: 0.1, // Adjust as needed
                }}
              >
                {/* Draw the polygon for Mecca City */}
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
              <View style={styles.overlay}>
                <View style={styles.topSection}>
                  <View style={styles.searchBox}>
                    <TextInput
                      placeholder="Search here"
                      placeholderTextColor="#000"
                      autoCapitalize="none"
                      style={{ flex: 1, padding: 0 }}
                    />
                    <Ionicons name="ios-search" size={20} />
                  </View>
                  <ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    height={50}
                    style={styles.chipsScrollView}
                    contentInset={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 20,
                    }}
                    contentContainerStyle={{
                      paddingRight: Platform.OS === "android" ? 20 : 0,
                    }}
                  >
                    {categoriesFilter.map((category, index) => (
                      <TouchableOpacity key={index} style={styles.chipsItem}>
                        {category.icon}
                        <Text> {category.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
      <Spinner
        visible={loading} // Set to true to display the spinner
        textContent={"Loading..."}
        textStyle={styles.spinnerText}
        color="#3662AA"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  weather: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topSection: {
    flexDirection: "column",
    padding: 15,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  chipsScrollView: {
    marginBottom: 10,
  },
  chipsItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  mapContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
  mapBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
  },
  map: {
    flex: 1,
  },
  legend: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  spinnerText: {
    color: "#3662AA",
  },
  overlay: {
    position: "absolute", // Fill the entire parent
    backgroundColor: "transparent", // Make it transparent
  },
});

export default MadinahPage;
