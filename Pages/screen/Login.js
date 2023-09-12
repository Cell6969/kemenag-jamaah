import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default class Login extends Component {
  render() {
    return (
      <View behavior="padding" style={styles.Wrapper}>
        <TextInput
          placeholder="email"
          underlineColorAndroid="white"
          placeholderTextColor="white"
          keyboardType="email-address"
          style={styles.inputField}
        />
        <TextInput
          placeholder="password"
          underlineColorAndroid="white"
          placeholderTextColor="white"
          secureTextEntry={true}
          style={styles.inputField}
        />
        <TouchableOpacity>
          <Text style={{ color: "white", marginTop: 10 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "white", marginTop: 10 }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputField: {
    width: 280,
    color: "white",
    borderColor: "white",
    marginTop: 5,
  },
  Wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F3A93",
  },
  text: {
    color: "blue",
    fontSize: 23,
  },
});
