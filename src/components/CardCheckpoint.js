import React from "react";
import { View, StyleSheet } from "react-native";
import { ProgressLine } from "./StepCheckpoint";
import { CustomCircularProgress } from "./CircularProgress";
import { Card } from "react-native-paper";

export const CardCheckpoint = ({ userInfo }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <CustomCircularProgress checkpoint={userInfo.checkpoint} />
        <ProgressLine positon={userInfo.checkpoint - 1} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#45818e",
  },
});
