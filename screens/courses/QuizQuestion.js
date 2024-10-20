// screens/QuizQuestion.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export const QuizQuestion = (props) => {
  const data = props.data;
  const [explanation, setExplanation] = useState();

  if (props.data === undefined) {
    return (
      <View>
        <Text>Loading Data...</Text>
      </View>
    );
  }

  let questionID = props.id;
  return (
    <View style={styles.container}>
      {/* Lesson Title */}
      <Text style={styles.lessonTitle}>Lesson 01: Counting</Text>

      {/* Teaching Paragraph */}
      <Text style={styles.teachingParagraph}>
        Today, we are going to practice counting from 1 to 10! Counting lets us
        know how much of something we have. {"\n\n"} Let’s say the numbers out
        loud in the correct order: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. {"\n\n"} Now,
        let’s answer some questions to see how well we can count!
      </Text>

      {/* Question Container */}
      <View style={styles.questionContainer}>
        {/* Question text styled in white */}
        <Text style={styles.questionText}>{data[questionID][0]}</Text>

        {data[questionID][1].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => checkAnswer(item)}
            style={styles.answerContainer}
          >
            <Text style={styles.answerText}>{item[0]}</Text>
          </TouchableOpacity>
        ))}

        {/* Explanation for answer */}
        <Text>{explanation}</Text>
      </View>
    </View>
  );

  function checkAnswer(ansData) {
    var isCorrect = ansData[1];
    if (isCorrect) {
      Alert.alert("CORRECT");
      setExplanation("This is a correct answer explanation.");
    } else {
      Alert.alert("INCORRECT");
    }
  }
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  questionContainer: {
    backgroundColor: "transparent", // Keep it transparent
    padding: 16,
    borderRadius: 10, // Rounded corners
    borderWidth: 3, // Thick border
    borderColor: "#ffffff", // White border
    marginBottom: 24, // Spacing below
  },
  questionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", // White text for the question
    marginBottom: 20,
    textAlign: "center",
  },
  answerContainer: {
    width: 350,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "lightblue",
    backgroundColor: "white",
    elevation: 2,
    alignSelf: "center",
  },
  answerText: {
    fontSize: 18,
    color: "#00384b",
    textAlign: "center",
    padding: 15,
  },
});
