import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { checkpointTimeline } from "../constant/checkpointHajj";

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#93c47d",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#93c47d",
  stepStrokeUnFinishedColor: "#f44336",
  separatorFinishedColor: "#93c47d",
  separatorUnFinishedColor: "#f44336",
  stepIndicatorFinishedColor: "#93c47d",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#93c47d",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#f44336",
  labelColor: "white",
  labelSize: 13,
  currentStepLabelColor: "#93c47d",
};

export const ProgressLine = ({positon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={positon}
          labels={checkpointTimeline.map((step) => step.label)}
          stepCount={checkpointTimeline.length}
          direction="horizontal"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
  },
  stepIndicatorContainer: {
    width: '100%', // Set a fixed width for the container
  },
});
