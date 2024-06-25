import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./splashScreen";
import Signupform from "./signup";
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
      {isShowSplashScreen ? <SplashScreen/> : <Text> Home Screen </Text>}
      
      {/* Use the stuff in FORM.js to put into a login */}
      <Signupform></Signupform>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});