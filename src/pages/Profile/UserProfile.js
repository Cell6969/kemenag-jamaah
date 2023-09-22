import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { CardProfile } from "../../components/CardProfile";
import { fetchUserInfo } from "./getInformation";
import { CustomCircularProgress } from "../../components/CircularProgress";
import Spinner from "react-native-loading-spinner-overlay";
import { CardMedical } from "../../components/CardMedical";
import { ProgressLine } from "../../components/StepCheckpoint";
import { CardCheckpoint } from "../../components/CardCheckpoint";

const UserProfile = ({ route, navigation, emailOrUsername }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSwipe = (index) => {
    setSwiperIndex(index);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUserInfo(emailOrUsername)
        .then((data) => {
          if (data) {
            setUserInfo(data);
          }
        })
        .catch((error) => {
          console.log("Error Fetching user information", error);
        })
        .finally(() => {
          // Turn off the loading spinner when the data is fetched
          setLoading(false);
        });
    }, 2000); // Simulate a 2-second delay for the API cal
  }, [emailOrUsername]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* User Information Card */}
      {userInfo && (
        <>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Informasi Pengguna
          </Text>
          <CardProfile
            fullname={userInfo.fullname}
            noid={userInfo.noId}
            passport={userInfo.passport}
            embarcation={userInfo.embarkasiName}
            travelTour={userInfo.travelName}
            hotel={userInfo.hotel}
          />
          <Text style={[styles.todoTitle, {marginTop: 25}]}>Kondisi Kesehatan</Text>
          <CardMedical
            medicalCondition={userInfo.medicalCondition}
            numHeart={userInfo.heart_rate}
            oxygenRate={userInfo.oxygenLevel}
            temperature={userInfo.temperatureLevel}
          />
          <Text style={[styles.todoTitle, {marginBottom: 15, marginTop:25}]}>Checkpoint Haji</Text>
          <CardCheckpoint userInfo={userInfo} />
        </>
      )}
      <Spinner
        visible={loading} // Set to true to display the spinner
        textContent={"Loading..."}
        textStyle={styles.spinnerText}
        color="#3662AA"
      />
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
    marginBottom: 10,
    marginTop: 10,
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
  spinnerText: {
    color: "#3662AA",
  },
});

export default UserProfile;
