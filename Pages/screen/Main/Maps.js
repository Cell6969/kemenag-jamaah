import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GetLocation } from "../../../Geolocation/getLocation";
import { useNavigation } from "@react-navigation/native";

const Maps = () => {
  const navigation = useNavigation(); // Access navigation from the context
  const [userCoordinate, setUserCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  });

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

  useEffect(() => {
    fetchLocation();

    const locationInterval = setInterval(() => {
      fetchLocation();
    }, 4000); // Fetch location every 5 seconds

    return () => {
      clearInterval(locationInterval);
    };
  }, [navigation]); // Include navigation in the dependency array
  console.log(userCoordinate);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.2,
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

export default Maps;
