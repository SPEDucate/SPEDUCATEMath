import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using Expo
import { useNavigation } from "@react-navigation/native";
import { QuizQuestion } from "./QuizQuestion";
import { getChoicesData } from "../../scripts/db-helper";

export function MathK() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#66CCFF", "#3399FF"]} // Light blue to dark blue gradient
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Kindergarten Math</Text>

        {/* Welcome Text in White Container */}

        {/* List Items in Another White Container */}
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>1. Basic Counting</Text>
          <Text style={styles.listItem}>
            2. Simple Addition and Subtraction
          </Text>
          <Text style={styles.listItem}>
            3. Introduction to Shapes and Patterns
          </Text>
          <Text style={styles.listItem}>4. Fun Math Games and Activities</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert("Starting the Kindergarten Math course!");
              navigation.navigate("K1");
            }}
          >
            <Text style={styles.buttonText}>Start Learning</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export function K1() {
  const [questionData, setQuestionData] = useState();

  useEffect(() => {
    const action = async () => {
      setQuestionData(await getChoicesData([1, 2]));
    };

    action();
  }, []);

  return (
    <LinearGradient
      colors={["#66CCFF", "#3399FF"]} // Light blue to dark blue gradient
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Container for Quiz Question */}
        <View style={styles.questionContainer}>
          <QuizQuestion data={questionData} id="1" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16,
    textAlign: "center",
  },

  // New container for description
  descriptionContainer: {
    backgroundColor: "#ffffff", // White background
    padding: 16,
    borderRadius: 10, // Rounded corners
    marginBottom: 24, // Space below
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Shadow for Android
  },
  description: {
    fontSize: 18,
    color: "#333", // Darker text color
    textAlign: "center",
  },

  // New container for the list of items
  listContainer: {
    backgroundColor: "#ffffff", // White background
    padding: 16,
    borderRadius: 10, // Rounded corners
    marginBottom: 24, // Space below the list
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Shadow for Android
  },
  listItem: {
    fontSize: 16,
    color: "#333", // Darker text color
    marginVertical: 8,
  },

  buttonContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f8f8f8", // Soft white background
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10, // Rounded corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  // New style for question container
  // questionContainer: {
  //   backgroundColor: "transparent", // Transparent background
  //   padding: 16,
  //   borderRadius: 10, // Rounded corners
  //   borderWidth: 3, // Thick border
  //   borderColor: "#ffffff", // White border
  //   marginBottom: 24, // Spacing below
  //},
});
