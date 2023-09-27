import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { base64 } from "../constant/image";

export const CardProfile = ({
  fullname,
  noid,
  passport,
  embarcation,
  travelTour,
  hotel,
  kota_hotel
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <Text style={styles.infoTitle}>{fullname}</Text>
          <Image style={styles.image} source={{ uri: base64 }} />
        </View>
        <View>
          <View style={styles.infoBox}>
            <MaterialCommunityIcons
              name="card-account-details"
              size={25}
              color="white"
            />
            <Text style={styles.infoText}>KTP: {noid}</Text>
          </View>

          <View style={styles.infoBox}>
            <MaterialCommunityIcons name="passport" size={25} color="white" />
            <Text style={styles.infoText}>Passport: {passport}</Text>
          </View>

          <View style={styles.infoBox}>
            <MaterialCommunityIcons
              name="airplane-marker"
              size={25}
              color="white"
            />
            <Text style={styles.infoText}>Embarkasi: {embarcation}</Text>
          </View>

          <View style={styles.infoBox}>
            <MaterialCommunityIcons
              name="account-group"
              size={25}
              color="white"
            />
            <Text style={styles.infoText}>Travel: {travelTour}</Text>
          </View>
          <View style={styles.infoBox}>
            <MaterialIcons name="hotel" size={25} color="white" />
            <Text style={styles.infoText}>Hotel: {hotel} ({kota_hotel})</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#3662AA",
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    marginLeft: 20
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
