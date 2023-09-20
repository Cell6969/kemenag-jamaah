import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper"; // Import Card component from a UI library
import ColoredBoxList from "../../components/ListBoxProgress";
import { CardProfile } from "../../components/CardProfile";
import { fetchUserInfo } from "./getInformation";

const UserProfile = ({ route, navigation, emailOrUsername }) => {
  const [userInfo, setUserInfo] = useState(null);
  const task = [
    { id: "1", task: "Ihram" },
    { id: "2", task: "Wukuf di Arafah" },
    { id: "3", task: "Tawaf" },
    { id: "4", task: "Sa'i" },
    { id: "5", task: "Tahallul" },
    { id: "6", task: "Lempar Jumroh di Mina" },
  ];

  useEffect(() => {
    fetchUserInfo(emailOrUsername)
      .then((data) => {
        if (data) {
          setUserInfo(data);
        }
      })
      .catch((error) => {
        console.log("Error Fetching user information", error);
      });
  }, [emailOrUsername]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* User Information Card */}
      {userInfo && (
        <CardProfile
          fullname={userInfo.fullname}
          noid={userInfo.noId}
          passport={userInfo.passport}
          embarcation={userInfo.embarkasiName}
          travelTour={userInfo.travelName}
          medicalCondition={userInfo.medicalCondition}
          numHeart={userInfo.heart_rate}
          oxygenRate={userInfo.oxygenLevel}
          temperature={userInfo.temperatureLevel}
        />
      )}
      {/* To-Do List */}
      <Text style={styles.todoTitle}>Checkpoint Haji</Text>
      <ColoredBoxList tasks={task} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f6f6f6",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default UserProfile;
