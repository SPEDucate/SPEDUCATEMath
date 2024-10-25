import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function FiveWorld() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/FiveVillage.png")}
        style={styles.map}
      >
        <TouchableOpacity style={[styles.button, styles.location1]}>
          <Text style={styles.buttonText}>1. Red Runner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.location2]}>
          <Text style={styles.buttonText}>2. Calm Tide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.location3]}>
          <Text style={styles.buttonText}>3. Muggy Marsh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.location4]}>
          <Text style={styles.buttonText}>4. Marvel Mountain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.location5]}>
          <Text style={styles.buttonText}>5. Pristine Peak</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 20,
    color: "white",
    top: "40%",
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
  },
  map: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  location1: {
    position: "absolute",
    top: "85%",
    left: "50%",
    backgroundColor: "green",
  },
  location2: {
    position: "absolute",
    top: "55%",
    left: "60%",
    backgroundColor: "grey",
  },
  location3: {
    position: "absolute",
    top: "38%",
    left: "10%",
    backgroundColor: "grey",
  },
  location4: {
    position: "absolute",
    top: "25%",
    left: "40%",
    backgroundColor: "grey",
  },
  location5: {
    position: "absolute",
    top: "5%",
    left: "38%",
    backgroundColor: "grey",
  },
});
