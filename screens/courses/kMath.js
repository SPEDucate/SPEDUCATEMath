// screens/kMath.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
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
              // Add logic to navigate to the first lesson or activity
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
        <QuizQuestion data={questionData} id="1"></QuizQuestion>
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
