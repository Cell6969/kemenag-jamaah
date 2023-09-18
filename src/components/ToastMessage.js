import React from "react";
import { View, Text } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

const ToastNotification = ({ type}) => {
  const toastStyle = {
    info: {
      backgroundColor: "#20639B",
      iconColor: "white",
      icon: 'info',
      textColor: "#F6F4F4",
    },
    success: {
      backgroundColor: "#4BB543",
      iconColor: "white",
      icon: 'check-circle',
      textColor: "#F6F4F4",
      title: "Login Succes",
      body: "Directed to Application"
    },
    danger: {
      backgroundColor: "#FF0000",
      iconColor: "white",
      icon: 'alert-triangle',
      textColor: "#F6F4F4",
      title: "Login Failed",
      body: "Invalid Login. Please try Again"
    },
  };
  const style = toastStyle[type] || toastStyle.info
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={{
        alignContent: "center",
        position: "absolute",
        backgroundColor: style.backgroundColor,
        width: "100%",
        borderRadius: 5,
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        shadowColor: "#003049",
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
      }}
    >
      <Feather name={style.icon} size={30} color={style.iconColor} />
      <View>
        <Text
          style={{
            color: style.textColor,
            fontWeight: "bold",
            marginLeft: 10,
            fontSize: 16,
          }}
        >
          {style.title}
        </Text>
        <Text
          style={{
            color: "#F6F4F4",
            fontWeight: "500",
            marginLeft: 10,
            fontSize: 14,
          }}
        >
          {style.body}
        </Text>
      </View>
    </Animated.View>
  );
};

export default ToastNotification;
