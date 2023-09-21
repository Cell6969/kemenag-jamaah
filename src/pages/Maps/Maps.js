import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import MapView, { Marker, Polygon, Circle } from "react-native-maps";
import { GetLocation } from "../../utils/getLocation";
import MqttClient from "../../config/setupMqtt";
import * as geolib from "geolib";
import {
  checkpointLonLat,
  checkpointHajj,
} from "../../constant/checkpointHajj";
import { updateCheckpoint } from "../../utils/updateCheckpoint";

const DDICircleCoordinate = {
  latitude: -6.2714636596703865,
  longitude: 106.81692836752656,
};
const radius = 50;

// Define function for check user coordinate on checkpoint
function checkUserInRadius(coords, checkpointLonLat, radius, emailOrUsername) {
  for (const key in checkpointLonLat) {
    const checkpoint = checkpointLonLat[key];
    const isInsideCircle = geolib.isPointWithinRadius(
      coords,
      checkpoint,
      radius
    );
    if (isInsideCircle) {
      updateCheckpoint(emailOrUsername, key, checkpointHajj[key].recent);
      console.log('Already on Checkpoint and Successful Update')
    }
  }
}

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
        // const isInsideCircle = geolib.isPointWithinRadius(
        //   coords,
        //   checkpointLonLat[1],
        //   radius
        // );

        // if (isInsideCircle) {
        //   console.log("Already on Check point");
        // } else {
        //   console.log("Not in check point");
        // }
        checkUserInRadius(coords, checkpointLonLat, radius, emailOrUsername);
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

    // Create update fetch
    const locationInterval = setInterval(() => {
      fetchLocation();
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
        <Circle
          center={DDICircleCoordinate}
          radius={radius}
          strokeWidth={2}
          strokeColor="#3399ff"
          fillColor="#80bfff"
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
