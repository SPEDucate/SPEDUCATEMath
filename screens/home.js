import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

const courses = [
  { id: "1", name: "Kindergarten math" },
  { id: "2", name: "1st grade math" },
  { id: "3", name: "2nd grade math" },
  { id: "4", name: "3rd grade math" },
  { id: "5", name: "4th grade math" },
  { id: "6", name: "5th grade math" },
];

export default function Home({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.courseContainer,
        { backgroundColor: selectedId === item.id ? "#88bb96" : "#fff" },
      ]}
      onPress={() => setSelectedId(item.id)}
    >
      <Text style={styles.courseName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleContinue = () => {
    if (selectedId) {
      const selectedCourse = courses.find((course) => course.id === selectedId);
      navigation.navigate(selectedCourse.name);
    } else {
      Alert.alert("No Selection", "Please select a course before continuing.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/homeBG.png")} // Replace with the actual path to your image file
      style={styles.container}
    >
      <Text style={styles.title}>SPEDucate Course Selection</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    position: "absolute",
    top: "10%",
    left: 0,
    right: 0,
  },
  list: {
    flexGrow: 1,
    marginTop: "30%",
  },
  courseContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    justifyContent: "flex-start",
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003087",
    flex: 1,
  },
  continueButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#003087",
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    width: "60%",
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
