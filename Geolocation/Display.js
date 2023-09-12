// LocationDisplay.js
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useLocation } from './LocationProvider';

export default function LocationDisplay() {
  const { location, errorMsg, updateLocation } = useLocation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Location:</Text>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {location ? (
        <Text>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text>Waiting for location...</Text>
      )}
      <Button title="Update Location" onPress={updateLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 10,
  },
});
