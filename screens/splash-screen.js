import { Image, StyleSheet, View } from "react-native";
import Icon from "../assets/splash-screen.png";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.image} />
      <Image
        source={{
          uri: "../assets/splash-screen.png",
        }}
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B0F18",
  },
  image: {
    width: 370,
    height: 1000,
    resizeMode: "cover",
  },
});
