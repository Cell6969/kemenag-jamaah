// LoginScreen.js

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Styles from "./styles/Styles";
import { Feather } from "@expo/vector-icons";
import { handleLoginPress } from "../Components/authLogin";
import logo from "../../assets/peruri-logo.png";

function LoginScreen({ navigation }) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={logo}
          style={{
            width: 150,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <View style={Styles.content}>
          <Text style={Styles.title}>Masuk</Text>
          <View style={Styles.inputContainer}>
            <View style={Styles.icon}>
              <Feather name="user-check" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={Styles.input}
              placeholder="Username"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              value={emailOrUsername}
              onChangeText={(text) => setEmailOrUsername(text)}
            />
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.icon}>
              <Feather name="lock" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={Styles.input}
              placeholder="Password"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              secureTextEntry={!passwordIsVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={Styles.passwordVisibleButton}
              onPress={() => setPasswordIsVisible(!passwordIsVisible)}
            >
              <Feather
                name={passwordIsVisible ? "eye-off" : "eye"}
                size={20}
                color="#7C808D"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={Styles.forgotPasswordButton}>
            <Text style={Styles.forgotPasswordButtonText}>Lupa Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.loginButton}
            onPress={() =>
              handleLoginPress(emailOrUsername, password, navigation)
            }
          >
            <Text style={Styles.loginButtonText}>Masuk</Text>
          </TouchableOpacity>
          <View style={Styles.orContainer}>
            <View style={Styles.orLine} />
            <Text style={Styles.orText}>ATAU</Text>
            <View style={Styles.orLine} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={Styles.registerButtonText}>
              Belum punya akun?{" "}
              <Text style={Styles.registerButtonTextHighlight}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={Styles.registerButtonTextHighlight}>
                    Registrasi disini
                  </Text>
                </TouchableOpacity>
              </Text>
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity style={Styles.googleButton}>
          <Image style={Styles.googleLogo} source={require("../../assets/icon.png")}/>
          <Text style={Styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;

/*
function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );

*/
