import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Image,
} from "react-native";
import Logo from "../assets/SPEDUCATE-Transparent.png";

const LoginFormUI = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const buttonAnim = useRef(new Animated.Value(1)).current;

  const handleLogin = () => {
    if (username === "" || password === "") {
      Alert.alert("Error", "Please enter both username and password");
    } else {
      // Perform login logic here
      Alert.alert("Login Successful", `Welcome, ${username}!`);
    }
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(handleLogin);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder='Enter your username'
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder='Enter your password'
        secureTextEntry
      />
      <Animated.View style={{ transform: [{ scale: buttonAnim }] }}>
        <TouchableOpacity style={styles.button} onPress={animateButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#1B0F18",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: 1000,
    resizeMode: "cover",
  },
});

/*const styleImage = StyleSheet.create({
  image: {
    width: 370,
    height: 1000,
    resizeMode: "cover",
  },
});*/

export default LoginFormUI;
