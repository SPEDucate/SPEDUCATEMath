import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using Expo
import { useNavigation } from "@react-navigation/native";
import { QuizQuestion } from "./QuizQuestion";
import { getChoicesData } from "../../scripts/db-helper";
import { useColor } from "../../scripts/ColorContext"; // Assuming you're using context to manage color

export function MathK() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#66CCFF", "#3399FF"]} // Light blue to dark blue gradient
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Kindergarten Math</Text>
        <Text style={styles.description}>
          Welcome to the Kindergarten Math course! Here, we will cover
          foundational math concepts suitable for young learners. The course
          includes:
        </Text>
        <Text style={styles.listItem}>1. Basic Counting</Text>
        <Text style={styles.listItem}>2. Simple Addition and Subtraction</Text>
        <Text style={styles.listItem}>
          3. Introduction to Shapes and Patterns
        </Text>
        <Text style={styles.listItem}>4. Fun Math Games and Activities</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Start Learning"
            onPress={() => {
              alert("Starting the Kindergarten Math course!");
              navigation.navigate("K1");
            }}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export function K1() {
  const [questionData, setQuestionData] = useState();
  const { fav_color } = useColor(); // Use context to get favorite color

  useEffect(() => {
    const action = async () => {
      setQuestionData(await getChoicesData([1, 2]));
    };

    action();
  }, []);

  return (
    <LinearGradient
      colors={fav_color ? getGradientColors(fav_color) : ["#66CCFF", "#3399FF"]} // Use the selected color here
      style={styles.container}
    >
      <Text>Sample Text (not part of quiz)</Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <QuizQuestion data={questionData} id="1"></QuizQuestion>
      </ScrollView>
    </LinearGradient>
  );
}

// Function to return gradient colors based on the selected color
const getGradientColors = (color) => {
  switch (color) {
    case "Blue":
      return ["#66CCFF", "#3399FF"];
    case "Red":
      return ["#FF6F61", "#BF2A2A"];
    case "Green":
      return ["#66FF66", "#2E8B57"];
    case "Purple":
      return ["#D8BFD8", "#6A0D91"];
    default:
      return ["#66CCFF", "#3399FF"];
  }
};

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
  description: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 24,
    textAlign: "center",
  },
  listItem: {
    fontSize: 16,
    color: "#FFFFFF",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: "center",
  },
});
