import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { CardWeather } from "../../components/CardWeather";
import { DropdownList } from "../../components/DropdownList";
import Spinner from "react-native-loading-spinner-overlay";
import { getWeather } from "./getWeatherMeca";
import categoriesFilter from "../../constant/chipitemMecca";
import styles from "../../theme/stylesMadinaMeca";
import map_marker from "../../../assets/map_marker.png";

// Dropdown list
const data = categoriesFilter.map((item) => ({
  label: item.name,
  value: item.name,
}));

// categoriesFilter.map((category)=> {
//   if (category.name==='Rumah Sakit') {
//     console.log(category.data)
//   }
// })

const MecaPage = ({ route, navigation }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
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
          setLoading(false);
        });
    }, 2000);
  }, []);

  // Create function to search
  const filterCategories = (text) => {
    setSearchText(text);
    setFilteredCategories(null);
  };

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
            <View style={styles.topSection}>
              <DropdownList
                data={data}
                categories={categoriesFilter}
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
                {categoriesFilter.map((category, index) => (
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
                  latitude: 21.3891, // Center of Mecca City
                  longitude: 39.8579, // Center of Mecca City
                  latitudeDelta: 0.5, // Adjust as needed
                  longitudeDelta: 0.5, // Adjust as needed
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
                          marker.nama_hotel ||
                          marker.hospital_mekkah ||
                          marker.money_changer ||
                          marker.mekkah_stasiun ||
                          marker.name_bus_station ||
                          marker.pharmacy_name_mecca ||
                          marker.market_mekkah ||
                          marker.atm_mekkah ||
                          marker.posko_mekkah ||
                          marker.situs_mekkah
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
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerText}
        color="#3662AA"
      />
    </View>
  );
};

export default MecaPage;
