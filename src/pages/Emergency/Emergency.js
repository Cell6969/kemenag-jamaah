import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HandlePanicPress } from "./HandlePanic";
import { emergencyText } from "../../constant/emergencyText";
import ToastNotification from "../../components/ToastMessage";
import { MaterialIcons } from "@expo/vector-icons";

const Emergency = ({ route, navigation, emailOrUsername }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Perhatian!</Text>
          {emergencyText.map((text, index) => (
            <Text key={index} style={styles.subtitle}>
              {text}
            </Text>
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => HandlePanicPress(emailOrUsername)}
          >
            <View style={styles.inline}>
              <MaterialIcons name="warning" size={20} color="white" />
              <Text style={styles.text}> Emergency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  box: {
    backgroundColor: "#cfe2f3", // Background color of the box
    borderRadius: 10, // Optional: Add border radius for rounded corners
    padding: 20, // Optional: Add padding to create space inside the box
    shadowColor: "#000", // Optional: Add shadow to the box
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "red",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    marginBottom: 20,
    textAlign: "justify",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    width: "100%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  inline: {
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Center icon and text vertically
  },
});

export default Emergency;
