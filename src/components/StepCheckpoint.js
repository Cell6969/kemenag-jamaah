import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { checkpointTimeline } from "../constant/checkpointHajj";

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#2986cc",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#2986cc",
  stepStrokeUnFinishedColor: "#f44336",
  separatorFinishedColor: "#2986cc",
  separatorUnFinishedColor: "#f44336",
  stepIndicatorFinishedColor: "#2986cc",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#2986cc",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#f44336",
  labelColor: "white",
  labelSize: 13,
  currentStepLabelColor: "#2986cc",
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
