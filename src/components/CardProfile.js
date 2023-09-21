import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const CardProfile = ({
  fullname,
  noid,
  passport,
  embarcation,
  travelTour,
  hotel
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.infoTitle}>{fullname}</Text>

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
          <MaterialIcons
            name="hotel"
            size={25}
            color="white"
          />
          <Text style={styles.infoText}>Hotel: {hotel}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#3662AA",
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
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
});
