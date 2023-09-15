// auth.js
import React from "react";

export const handleLoginPress = async (emailOrUsername, password, navigation) => {
    try {
      // Simulate a login request to your server
      await new Promise((resolve, reject) => {
        // Simulated delay for demonstration
        setTimeout(() => {
          if (emailOrUsername.trim() && password.trim()) {
            // Successfully logged in
            resolve();
          } else {
            // Login failed due to missing credentials
            reject("Please fill in both fields");
          }
        }, 1000);
      });
  
      // Successfully logged in, navigate to the Home screen
      navigation.navigate("Home", {emailOrUsername});
    } catch (error) {
      // Handle login error (e.g., show error message)
      console.log(error);
    }
  };
  