import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { StylesLoginRegisPage as Styles } from "../../theme/stylesLoginRegis";
import { Feather, Entypo } from "@expo/vector-icons";
import { useFormInput } from "../../hooks/FormInput";
import { handleRegisPress } from "./authRegis";

const RegistrationScreen = ({ navigation }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  // initiate value
  const fullnameInput = useFormInput("");
  const usernameInput = useFormInput("");
  const noIdInput = useFormInput("");
  const passwordInput = useFormInput("");
  const confirmPasswordInput = useFormInput("");

  // Handle Regist and Animation
  const handleRegis = async () => {
    try {
      setLoading(true);
      await handleRegisPress(
        fullnameInput.value,
        usernameInput.value,
        noIdInput.value,
        passwordInput.value,
        confirmPasswordInput.value,
        navigation
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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
              // secureTextEntry={!passwordIsVisible}
              {...passwordInput}
            />
            <TouchableOpacity
              style={Styles.passwordVisibleButton}
              onPress={passwordInput.toggleVisibility}
            >
              <Feather
                name={passwordInput.isVisible ? "eye-off" : "eye"}
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
              // secureTextEntry={!passwordIsVisible}
              {...confirmPasswordInput}
            />
            <TouchableOpacity
              style={Styles.passwordVisibleButton}
              onPress={confirmPasswordInput.toggleVisibility}
            >
              <Feather
                name={confirmPasswordInput.isVisible ? "eye-off" : "eye"}
                size={20}
                color="#7C808D"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={Styles.loginButton} onPress={handleRegis}>
            <Text style={Styles.loginButtonText}>Registrasi</Text>
          </TouchableOpacity>
          {loading && (
            <View style={Styles.activityIndicatorContainer}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          )}
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
};

export default RegistrationScreen;
