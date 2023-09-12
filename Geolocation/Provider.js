// LocationProvider.js
import React, { useState, useEffect, createContext, useContext } from "react";
import * as Location from "expo-location";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
      maximumAge: 0,
    });
    setLocation(currentLocation);
  };

  const updateLocation = async () => {
    getLocation();
  };

  return (
    <LocationContext.Provider value={{ location, errorMsg, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
