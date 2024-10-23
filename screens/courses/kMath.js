import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using Expo
import { QuizQuestion } from "./QuizQuestion";
import { getChoicesData } from "../../scripts/db-helper";
import {
  Lesson,
  LessonParagraph,
  LessonTitle,
  LessonCompleteButton,
} from "./Lesson";

export const MathK = ({ navigation }) => {
  return (
    <LinearGradient
      colors={FAV_COLOR} // Light blue to dark blue gradient
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Kindergarten Math</Text>

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
              navigation.navigate("K1");
            }}
          >
            <Text style={styles.buttonText}>Start Learning</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export const K1 = ({ navigation }) => {
  const [questionData, setQuestionData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setQuestionData(await getChoicesData([1, 2, 3, 4, 5]));
    };
    fetchData();
  }, []);

  return (
    <Lesson completionVar={K1_DONE}>
      <LessonTitle>Lesson 01: Counting</LessonTitle>
      <LessonParagraph>
        Today, we are going to practice counting from 1 to 10! Counting lets us
        know how much of something we have. {"\n\n"} Let’s say the numbers out
        loud in the correct order: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. {"\n\n"} Now,
        let’s answer some questions to see how well we can count!
      </LessonParagraph>
      <QuizQuestion data={questionData} id="1"></QuizQuestion>
      <QuizQuestion data={questionData} id="2"></QuizQuestion>
      <QuizQuestion data={questionData} id="3"></QuizQuestion>
      <QuizQuestion data={questionData} id="4"></QuizQuestion>
      <QuizQuestion data={questionData} id="5"></QuizQuestion>

      <LessonCompleteButton
        action={() => {
          K1_DONE = true;
          navigation.goBack();
          navigation.goBack();
          navigation.goBack();
          navigation.navigate("Kindergarten math");
        }}
      ></LessonCompleteButton>
    </Lesson>
  );
};

export const K2 = ({ navigation }) => {
  const [questionData, setQuestionData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setQuestionData(await getChoicesData([6, 7, 8, 9, 10]));
    };
    fetchData();
  }, []);

  return (
    <Lesson completionVar={K2_DONE}>
      <LessonTitle>Lesson 2: Basic Addition (Within 5)</LessonTitle>
      <LessonParagraph>
        Let’s learn how to add today! {"\n\n"}
        Adding means putting two groups of things together. If you have 1 apple
        and I give you 2 more, you put them together to get 3 apples. {"\n\n"}
        You can use your fingers to help count the total when adding!
      </LessonParagraph>
      <QuizQuestion data={questionData} id="6"></QuizQuestion>
      <QuizQuestion data={questionData} id="7"></QuizQuestion>
      <QuizQuestion data={questionData} id="8"></QuizQuestion>
      <QuizQuestion data={questionData} id="9"></QuizQuestion>
      <QuizQuestion data={questionData} id="10"></QuizQuestion>

      <LessonCompleteButton
        action={() => {
          K2_DONE = true;
          navigation.goBack();
          navigation.goBack();
          navigation.goBack();
          navigation.navigate("Kindergarten math");
        }}
      ></LessonCompleteButton>
    </Lesson>
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
  lessonParagraph: {
    marginTop: 30, // Added marginTop for the teaching paragraph
  },
});
