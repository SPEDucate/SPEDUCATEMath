import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/splash-screen";
import { useEffect, useState } from "react";
import LoginFormUI from "./screens/login";
import PreferenceFormUI from "./screens/preference-form";

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });

  return (
    <View style={styles.container}>
      {isShowSplashScreen ? <SplashScreen /> : <LoginFormUI></LoginFormUI>}

      <PreferenceFormUI></PreferenceFormUI>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
