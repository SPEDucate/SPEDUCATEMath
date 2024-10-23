import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
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
  },
  teachingParagraph: {
    fontSize: 16,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
});
