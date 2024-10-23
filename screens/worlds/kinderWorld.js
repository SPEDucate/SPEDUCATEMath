import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export const KinderWorld = ({ navigation }) => {
  const [K1Complete, setK1Complete] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/kVillage.png")}
        style={styles.map}
      >
        <TouchableOpacity
          style={[styles.button, styles.location1, styles.levelUnlocked]}
        >
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("K Home")}
          >
            1. Welcome Center
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.location2,
            K1_DONE ? styles.levelUnlocked : styles.levelLocked,
          ]}
        >
          <Text style={styles.buttonText}>2. Supplies Shack</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.location3]}>
          <Text style={styles.buttonText}>3. Light Lake</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.location4]}>
          <Text style={styles.buttonText}>4. Crunchy Cafe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.location5]}>
          <Text style={styles.buttonText}>5. Magic Mansion</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
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
    top: "70%",
    left: "50%",
    backgroundColor: "green",
  },
  location2: {
    position: "absolute",
    top: "63%",
    left: "10%",
    backgroundColor: "grey",
  },
  location3: {
    position: "absolute",
    top: "50%",
    left: "30%",
    backgroundColor: "grey",
  },
  location4: {
    position: "absolute",
    top: "25%",
    left: "5%",
    backgroundColor: "grey",
  },
  location5: {
    position: "absolute",
    top: "15%",
    left: "40%",
    backgroundColor: "grey",
  },

  levelLocked: {
    backgroundColor: "grey",
  },
  levelUnlocked: {
    backgroundColor: "green",
  },
});
