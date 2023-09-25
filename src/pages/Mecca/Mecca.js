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
import {
  HotelMecca,
  HospitalMecca,
  MoneyChangerMecca,
} from "../../constant/coordinate";
import { CardWeather } from "../../components/CardWeather";
import Spinner from "react-native-loading-spinner-overlay";
import { getWeather } from "./getWeatherMeca";
import categoriesFilter from "../../constant/chipitem";
import Ionicons from "react-native-vector-icons/Ionicons";

const MecaPage = ({ route, navigation }) => {
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
          setLoading(false);
        });
    }, 2000);
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
              Lokasi Sekitar Mekah
            </Text>
            <View style={styles.mapBox}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 21.3891, // Center of Mecca City
                  longitude: 39.8579, // Center of Mecca City
                  latitudeDelta: 0.1, // Adjust as needed
                  longitudeDelta: 0.1, // Adjust as needed
                }}
              >
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
                    pinColor="red" // Change this to "red" for hospital markers
                  />
                ))}
                {MoneyChangerMecca.map((marker) => (
                  <Marker
                    key={marker.id}
                    coordinate={{
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }}
                    title={marker.money_changer}
                    pinColor="#6aa84f"
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
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerText}
        color="#3662AA"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  spinnerText: {
    color: "#3662AA",
  },
  overlay: {
    position: "absolute", // Fill the entire parent
    backgroundColor: "transparent", // Make it transparent
  },
});

export default MecaPage;
