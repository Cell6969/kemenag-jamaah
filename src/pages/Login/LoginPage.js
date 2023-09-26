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
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ToastNotification from "../../components/ToastMessage";
import { StylesLoginRegisPage as Styles } from "../../theme/stylesLoginRegis";
import { handleLoginPress } from "./authLogin";
import logo from "../../../assets/peruri-logo.png";


const LoginScreen = ({ navigation }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await handleLoginPress(
        emailOrUsername,
        password,
        navigation,
        () => {
          setLoading(false);
          setLoginSuccess(true);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            navigation.navigate("Drawer", { emailOrUsername });
          }, 1000); // Hide the toast after 3 seconds
        },
        (error) => {
          setLoading(false);
          setLoginSuccess(false);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 1500);
          console.log(error);
        }
      );
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
          {showToast && (
            <ToastNotification type={loginSuccess ? "success" : "danger"} />
          )}
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
                name={passwordIsVisible ? "eye" : "eye-off"}
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
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={Styles.loginButtonText}>Masuk</Text>
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
};

export default LoginScreen;
