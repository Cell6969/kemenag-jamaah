import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Emergency = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Perhatian!</Text>
          <Text style={styles.subtitle}>
            Tombol Panic Button digunakan sebagai sarana penting dalam situasi
            darurat ketika jamaah haji menghadapi kondisi-kondisi kritis seperti
            sakit yang berat, tersesat, atau situasi darurat lainnya selama
            perjalanan mereka. Dengan sekali tekan tombol ini, jamaah haji dapat
            segera memicu respons darurat yang akan menghubungkan mereka dengan
            pihak berwenang atau bantuan medis untuk memberikan pertolongan dan
            bantuan secepat mungkin. Tombol Panic Button adalah alat yang
            krusial untuk memastikan keselamatan dan kesejahteraan jamaah haji
            dalam perjalanan mereka yang penuh tantangan ini.
          </Text>
          <TouchableOpacity style={styles.button}>
            <View style={styles.inline}>
              <MaterialIcons name="warning" size={20} color="white" />
              <Text style={styles.text}> Panic</Text>
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
    backgroundColor: "#fff", // Background color of the box
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
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    marginBottom: 20,
    textAlign:'justify'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    width: 150,
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
