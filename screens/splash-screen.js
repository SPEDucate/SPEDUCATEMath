import { Image, StyleSheet, View } from "react-native";
import Icon from "../assets/splash-screen.png";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Icon} style={styles.image} />
      </View>
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
/*
// Import sqlite3 library
const sqlite3 = require('sqlite3').verbose();

// Specify the path and filename of the SQLite database
const dbPath = './mydatabase.db';

// Create a new SQLite database instance
let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});*/
