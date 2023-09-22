import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  AnimatedCircularProgress,
} from "react-native-circular-progress"; // Import CircularProgress from the library
import { checkpointHajj } from "../constant/checkpointHajj";

export const CustomCircularProgress = ({
  checkpoint,
}) => {
  const statusJamaah = checkpointHajj[checkpoint];
  return (
    <View style={styles.container}>
      <View style={styles.progressBox}>
        <AnimatedCircularProgress
          size={100}
          width={10}
          fill={statusJamaah.activityPercent}
          tintColor={statusJamaah.color}
          backgroundColor="white"
        >
          {(fill) => (
            <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>Sekarang: {statusJamaah.recent}</Text>
        <Text style={styles.bottomText}>Selanjutnya: {statusJamaah.next}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20
  },
  progressBox: {
    alignItems: "center",
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  textContainer: {
    marginLeft: 20,
  },
  topText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white'
  },
  bottomText: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'white'
  },
});
