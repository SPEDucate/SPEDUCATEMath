import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { executeQuery } from "../scripts/database";
import { LinearGradient } from "expo-linear-gradient";

export function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (userName.length === 0 || password.length === 0) {
      Alert.alert("Attention", "Please enter both a username and password");
      return;
    }

    try {
      const receivedData = await executeQuery(
        `SELECT user_id FROM Users WHERE username = '${userName}' AND password = '${password}'`
      );
      if (receivedData.length != 0) {
        Alert.alert("Success", "Login successful!");
        CURR_USER_ID = receivedData[0].user_id;
        console.log("CURRENT USER_ID: " + CURR_USER_ID);

        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Incorrect username or password");
      }
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  const handleRegister = async () => {
    if (userName.length === 0 || password.length === 0) {
      Alert.alert("Attention!", "Please enter both a username and password.");
      return;
    }

    try {
      const existingUser = await executeQuery(
        `SELECT * FROM Users WHERE username = "${userName}"`
      );
      if (existingUser.length > 0) {
        Alert.alert("Error", "Username already exists.");
        return;
      }

      await executeQuery(
        `INSERT INTO Users (username, password) VALUES ("${userName}", "${password}")`
      );
      setUserName("");
      setPassword("");

      const receivedData = await executeQuery(
        `SELECT user_id FROM Users WHERE username = '${userName}' AND password = '${password}'`
      );
      CURR_USER_ID = receivedData[0].user_id;
      console.log("CURRENT USER_ID: " + CURR_USER_ID);

      navigation.navigate("PreferenceForm");
      Alert.alert("Success", "Registration successful!");
    } catch (error) {
      console.error("Error during registration: ", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjusts based on platform
      style={{ flex: 1 }}
    >
      <LinearGradient colors={["#9FCAF5", "#3399FF"]} style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 40 }}>
          <View style={styles.innerContainer}>
            <Image
              source={require("../assets/SPEDUCATE-Transparent.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>
              Log in or Register to your account
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="black"
              value={userName}
              onChangeText={(value) => setUserName(value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#003087",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#003087",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    color: "black",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#003087",
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default LoginScreen;
