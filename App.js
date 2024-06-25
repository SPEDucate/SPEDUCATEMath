import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/splashScreen";
import Signupform from "./screens/signup";
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
      {isShowSplashScreen ? <SplashScreen/> : <Signupform></Signupform>}
      
      {/* Use the stuff in FORM.js to put into a login */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});