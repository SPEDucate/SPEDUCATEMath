// kMath.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using Expo
import { useNavigation, useRoute } from "@react-navigation/native";
import { QuizQuestion } from "./QuizQuestion";
import { getChoicesData } from "../../scripts/db-helper";
import { useColor } from "../../scripts/ColorContext"; // Assuming you're using context to manage color

export function MathK() {
  const navigation = useNavigation();
  const route = useRoute();
  const { learningMethod } = route.params; // Get the learning method from navigation params

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

        {/* Conditionally render components based on learning method */}
        {renderLearningMethodFeature(learningMethod)}

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

// Function to render features based on learning method
const renderLearningMethodFeature = (learningMethod) => {
  switch (learningMethod) {
    case "Visual aids":
      return <Text style={styles.featureText}>Using visual aids to enhance learning!</Text>;
    case "Hands-on activities":
      return <Text style={styles.featureText}>Engaging in hands-on activities for practical learning!</Text>;
    case "Repetition":
      return <Text style={styles.featureText}>Focusing on repetition to solidify understanding!</Text>;
    case "Auditory Instruction":
      return <Text style={styles.featureText}>Utilizing auditory instruction to support learning!</Text>;
    default:
      return <Text style={styles.featureText}>Choose a learning method to see specific features!</Text>;
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
  featureText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: "center",
  },
});
