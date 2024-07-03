import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/splash-screen";
import LoginForm from "./screens/login-form";
import { useEffect, useState } from "react";

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });
  
  return (
    <View style={styles.container}>
      {isShowSplashScreen ? <SplashScreen/> : <LoginForm></LoginForm>}      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// src/App.js
import React from 'react';
import './App.css';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the React App</h1>
        <Users />
      </header>
    </div>
  );
}


