import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CardProfile = ({
  fullname,
  noid,
  passport,
  embarcation,
  travelTour,
  medicalCondition,
  numHeart,
  oxygenRate,
  temperature
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
            size={30}
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
          <MaterialCommunityIcons name="medical-bag" size={25} color="white" />
          <Text style={styles.infoText}>Keadaan Medis: {medicalCondition}</Text>
        </View>

        <View style={styles.infoBox}>
          <MaterialCommunityIcons name="cards-heart" size={25} color="white" />
          <Text style={styles.infoText}>Detak Jantung: {numHeart}</Text>
        </View>

        <View style={styles.infoBox}>
          <MaterialCommunityIcons name="water" size={25} color="white" />
          <Text style={styles.infoText}>Tingkat Oxygen: {oxygenRate}</Text>
        </View>

        <View style={styles.infoBox}>
          <MaterialCommunityIcons name="temperature-celsius" size={25} color="white" />
          <Text style={styles.infoText}>Temperatur: {temperature}</Text>
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
