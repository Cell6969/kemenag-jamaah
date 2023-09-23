import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { HotelMadina, HospitalMadina } from "../../constant/coordinate";
import LegendMap from "../../components/LegendMap";
import { CardWeather } from "../../components/CardWeather";
import Spinner from "react-native-loading-spinner-overlay";
import { getWeather } from "./getWeatherMadina";

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
            <View style={styles.legend}>
              <LegendMap />
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
  mapContainer: {
    flex: 1, // Use flex to adjust map and legend to take available space
    marginTop: 10,
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
});


export default MadinahPage;
