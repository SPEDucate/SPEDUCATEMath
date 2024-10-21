import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using Expo

export const Lesson = ({ children }) => {
  return (
    <LinearGradient
      colors={FAV_COLOR} // Light blue to dark blue gradient
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export const LessonTitle = ({ children }) => {
  return <Text style={styles.lessonTitle}>{children}</Text>;
};

export const LessonParagraph = ({ children }) => {
  return <Text style={styles.teachingParagraph}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 24,
  },
  teachingParagraph: {
    fontSize: 16,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
});
const elegant = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonTitle: {
    fontSize: 36, // Increased font size
    fontWeight: "bold",
    color: "white",
    marginBottom: 20, // Increased spacing
    textAlign: "center", // Align text to the right
    marginTop: 32, // Increased top margin
    fontFamily: "Georgia", // Changed font style to Georgia
  },
  teachingParagraph: {
    fontSize: 20, // Increased font size
    color: "white",
    marginBottom: 30, // Increased spacing
    textAlign: "center", // Align text to the right
    fontFamily: "Georgia", // Changed font style to Georgia
    padding: 16, 
    borderWidth: 3, // Thick border
    borderColor: "#ffffff",
  },
});



