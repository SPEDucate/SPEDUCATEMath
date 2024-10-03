// App.js
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "./screens/splash-screen";
import { AppNavigator } from "./scripts/app-navigator";

const App = () => {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000); // Show splash screen for 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      {isShowSplashScreen ? <SplashScreen /> : <AppNavigator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
