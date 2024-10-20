import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using Expo
import { useNavigation } from "@react-navigation/native";

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
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
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
