import * as Location from "expo-location";


export const GetLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
      maximumAge: 0,
      enableHighAccuracy: true
    });

    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    return {latitude, longitude}
  } catch (error) {
    console.error("Error getting location:", error);
    return null; // Return null on error
  }
};
