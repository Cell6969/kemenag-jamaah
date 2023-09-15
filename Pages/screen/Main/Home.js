import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GetLocation } from "../../../Geolocation/getLocation";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation(); // Access navigation from the context
    const [userCoordinate, setUserCoordinate] = useState({
      latitude: 0,
      longitude: 0,
    });
  
    useEffect(() => {
      const fetchLocation = async () => {
        try {
          const coords = await GetLocation();
          if (coords) {
            setUserCoordinate(coords);
          } else {
            console.log("Permission Denied");
            // Navigate to the login page when permission is denied
            navigation.navigate("Login");
          }
        } catch (error) {
          console.log("Error fetching location", error);
        }
      };
      fetchLocation();
    }, [navigation]); // Include navigation in the dependency array
  
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.200000,
            longitude: 106.816666,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          legalLabelInsets={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Marker
            coordinate={userCoordinate}
            title="User's Location"
            description="This is where the user is."
          />
        </MapView>
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

// const Home = () => {
//   const osmTileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
//   const markerCoordinates = {
//     latitude: 51.505,
//     longitude: -0.09,
//   };
//   return (
//     <View>
//       <Text>Tes</Text>
//     </View>
//   );
// };

export default Home;
