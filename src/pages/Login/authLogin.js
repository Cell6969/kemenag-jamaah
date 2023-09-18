// auth.js
import React from "react";

export const handleLoginPress = async (
  emailOrUsername,
  password,
  navigation,
  onLoginSuccess,
  onLoginFailure
) => {
  try {
    // Simulate a login request to your server
    await new Promise((resolve, reject) => {
      // Simulated delay for demonstration
      setTimeout(() => {
        if (emailOrUsername === "Gusti" && password === "123") {
          // Successfully logged in
          resolve();
        } else {
          // Login failed due to missing credentials
          reject("Please fill in both fields");
        }
      }, 1000);
    });
    // Successfully logged in, navigate to the Home screen
    onLoginSuccess();
    // navigation.navigate("Drawer", {emailOrUsername});
  } catch (error) {
    // Handle login error (e.g., show error message)
    onLoginFailure();
  }
};
