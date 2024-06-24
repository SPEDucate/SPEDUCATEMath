import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./views/SplashScreen";
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
      {isShowSplashScreen ? <SplashScreen /> : <Text> Home Screen </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});