import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using Expo
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

export const Lesson = ({ children }) => {
  const activeStyle = getActiveStyle();
  const navigation = useNavigation(); // Get navigation object

  return (
    <LinearGradient
      colors={FAV_COLOR} // Light blue to dark blue gradient
      style={activeStyle.container}
    >
      <ScrollView contentContainerStyle={activeStyle.contentContainer}>
        {children}

        {/* Complete Lesson Button */}
        <TouchableOpacity
          style={activeStyle.completeButton}
          onPress={() => navigation.navigate("Kindergarten math")} // Navigate to kMath.js
        >
          <Text style={activeStyle.completeButtonText}>Complete Lesson</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export const LessonTitle = ({ children }) => {
  const activeStyle = getActiveStyle();

  return <Text style={activeStyle.lessonTitle}>{children}</Text>;
};

export const LessonParagraph = ({ children }) => {
  const activeStyle = getActiveStyle();

  return <Text style={activeStyle.teachingParagraph}>{children}</Text>;
};

function getActiveStyle() {
  if (INTERFACE_TYPE == "structured") return elegant;
  return normal;
}

const normal = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 10,
    paddingTop: 30,
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
  completeButton: {
    marginTop: 30,
    marginBottom: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "#4CAF50", // Green background
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignSelf: "center", // Center horizontally
  },
  completeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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
    textAlign: "center",
    marginTop: 32, // Increased top margin
    fontFamily: "Georgia", // Changed font style to Georgia
  },
  teachingParagraph: {
    fontSize: 20, // Increased font size
    color: "white",
    marginBottom: 30, // Increased spacing
    textAlign: "center",
    fontFamily: "Georgia", // Changed font style to Georgia
    padding: 16,
    borderWidth: 3, // Thick border
    borderColor: "#ffffff",
  },
  completeButton: {
    marginTop: 30,
    marginBottom: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "#4CAF50", // Green background
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignSelf: "center", // Center horizontally
  },
  completeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
