import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CardMedical = ({
  medicalCondition,
  numHeart,
  oxygenRate,
  temperature,
}) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <Card style={[styles.card, { backgroundColor: "#93c47d" }]}>
          <Card.Content>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons
                name="medical-bag"
                size={25}
                color="white"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.infoText}>Keadaan Medis</Text>
              <Text style={styles.infoText}>{medicalCondition}</Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={[styles.card, { backgroundColor: "#76a5af" }]}>
          <Card.Content>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons
                name="cards-heart"
                size={25}
                color="white"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.infoText}>Detak Jantung</Text>
              <Text style={styles.infoText}>{numHeart}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.cardContainer}>
        <Card style={[styles.card, { backgroundColor: "#f6b26b" }]}>
          <Card.Content>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name="water" size={25} color="white" />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.infoText}>Tingkat Oxygen</Text>
              <Text style={styles.infoText}>{oxygenRate}</Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={[styles.card, { backgroundColor: "#8e7cc3" }]}>
          <Card.Content>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons
                name="temperature-celsius"
                size={25}
                color="white"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.infoText}>Suhu Badan</Text>
              <Text style={styles.infoText}>{temperature}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f6f6f6",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:10
  },
  card: {
    flex: 1,
    marginRight: 10,
  },
  iconBox: {
    alignItems: "center",
    marginTop: 10,
  },
  textBox: {
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 12,
    color: "white",
  },
});
