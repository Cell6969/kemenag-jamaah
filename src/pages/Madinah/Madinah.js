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
import { CardWeather } from "../../components/CardWeather";
import Spinner from "react-native-loading-spinner-overlay";
import { getWeather } from "./getWeatherMadina";
import styles from "../../theme/stylesMadinaMeca";
import { DropdownList } from "../../components/DropdownList";
import categoriesFilterMadina from "../../constant/chipsItemMadina";
import map_marker from "../../../assets/map_marker.png";

const data = categoriesFilterMadina.map((item) => ({
  label: item.name,
  value: item.name,
}));

const MadinahPage = ({ route, navigation }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState(null);

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
            <View style={styles.topSection}>
              <DropdownList
                data={data}
                categories={categoriesFilterMadina}
                filteredCategories={filteredCategories}
                setFilteredCategories={setFilteredCategories}
              />
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
                {categoriesFilterMadina.map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.chipsItem,
                      filteredCategories === category.data
                        ? styles.filteredCategory
                        : null,
                    ]}
                    onPress={() => setFilteredCategories(category.data)}
                  >
                    {category.icon}
                    <Text> {category.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
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
                {filteredCategories
                  ? filteredCategories.map((marker) => (
                      <Marker
                        key={marker.id}
                        image={map_marker}
                        coordinate={{
                          latitude: marker.latitude,
                          longitude: marker.longitude,
                        }}
                        title={
                          marker.hotel_madina ||
                          marker.hospital_madina ||
                          marker.bus_station ||
                          marker.pharmacy_name_madinah ||
                          marker.madinah_stasiun_kereta ||
                          marker.madinah_market ||
                          marker.money_changer_madinah ||
                          marker.madina_atm ||
                          marker.posko_madinah
                        }
                      />
                    ))
                  : null}
              </MapView>
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

export default MadinahPage;
