// RegistrationScreen.js

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Styles from "./styles/Styles";
import { Feather, Entypo } from "@expo/vector-icons";

function RegistrationScreen({ navigation }) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
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
        <View style={Styles.content}>
          <Text style={Styles.title}>Pendaftaran</Text>
          <View style={Styles.inputContainer}>
            <View style={Styles.icon}>
              <Feather name="user" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={Styles.input}
              placeholder="Nama lengkap anda"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
            />
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.icon}>
              <Feather name="user-check" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={Styles.input}
              placeholder="Username anda"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
            />
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.icon}>
              <Feather name="credit-card" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={Styles.input}
              placeholder="No.KTP anda"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
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
          {/* For Confirm Password */}
          <View style={Styles.inputContainer}>
            <View style={Styles.icon}>
              <Entypo name="lock" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={Styles.input}
              placeholder="Konfirmasi Password"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              secureTextEntry={!passwordIsVisible}
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
          <TouchableOpacity style={Styles.loginButton}>
            <Text style={Styles.loginButtonText}>Registrasi</Text>
          </TouchableOpacity>
          <View style={Styles.orContainer}>
            <View style={Styles.orLine} />
            <Text style={Styles.orText}>ATAU</Text>
            <View style={Styles.orLine} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={Styles.registerButtonText}>
              Sudah mempunyai akun?{" "}
              <Text style={Styles.registerButtonTextHighlight}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={Styles.registerButtonTextHighlight}>
                    Masuk disini
                  </Text>
                </TouchableOpacity>
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegistrationScreen;
