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
    <View style={styles.questionContainer}>
      {/* Question text styled in white */}
      <Text style={styles.questionText}>{data[questionID][0]}</Text>

      {/* Answer choices */}
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
  );

  function checkAnswer(ansData) {
    var isCorrect = ansData[1];
    if (isCorrect) {
      // Alert.alert("CORRECT");
      setExplanation("Correct!");
    } else {
      // Alert.alert("INCORRECT");
      setExplanation("That is incorrect, try again!");
    }
  }
};

// Styles
const styles = StyleSheet.create({
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
