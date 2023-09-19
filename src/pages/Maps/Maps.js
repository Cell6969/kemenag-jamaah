import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import { GetLocation } from "../../utils/getLocation";
import MqttClient from "../../config/setupMqtt";
import * as geolib from "geolib"

const DDICoordinate = [
  { latitude: -6.2704636596703865, longitude: 106.81582836752656 },
  { latitude: -6.2704636596703865, longitude: 106.81702836752656 },
  { latitude: -6.272140096703865, longitude: 106.81702836752656 },
  { latitude: -6.272140096703865, longitude: 106.81582836752656 },
];

const Maps = ({ route, navigation, emailOrUsername }) => {
  const [userCoordinate, setUserCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  });

  const mqttclient = new MqttClient({ clientId: emailOrUsername });

  const updateLocation = (latitude, longitude) => {
    setUserCoordinate({ latitude, longitude });
    mqttclient.sendLocation(latitude, longitude);
  };

  // if permission for getting location is rejected
  const fetchLocation = async () => {
    try {
      const coords = await GetLocation();
      if (coords) {
        updateLocation(coords.latitude, coords.longitude);
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
    // Connect MQtt
    mqttclient.connect();

    // FetchLocation
    fetchLocation();

    // Create update fetch
    const locationInterval = setInterval(() => {
      fetchLocation();
      const isInsidePolygon = geolib.isPointInPolygon(
        userCoordinate,
        DDICoordinate
      );

      if (isInsidePolygon) {
        console.log('Already on Check point')
      } else {
        console.log('Not in check point')
      }
    }, 4000); // Fetch location every 5 seconds

    return () => {
      mqttclient.disconnect();
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
        <Polygon
          coordinates={DDICoordinate}
          strokeWidth={2} // Adjust stroke width as needed
          strokeColor="red" // Color of the polygon border
          fillColor="rgba(255, 0, 0, 0.5)" // Fill color of the polygon
        />
        <Marker
          coordinate={userCoordinate}
          title={emailOrUsername}
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
