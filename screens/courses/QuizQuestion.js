import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon"; // Import Confetti Cannon

export const QuizQuestion = ({ data, id }) => {
  if (data == undefined) {
    return (
      <View>
        <Text>Loading Data...</Text>
      </View>
    );
  }

  const [explanation, setExplanation] = useState();
  const [confettiActive, setConfettiActive] = useState(false);

  var questionID = id;
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

      {confettiActive && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fallSpeed={2000}
          explosionSpeed={500}
          fadeOut={true}
          autoStart={true}
        />
      )}
    </View>
  );

  function checkAnswer(ansData) {
    var isCorrect = ansData[1];
    if (isCorrect) {
      // Alert.alert("CORRECT");
      setExplanation("Correct!");
      releaseConfetti();
    } else {
      // Alert.alert("INCORRECT");
      setExplanation("That is incorrect, try again!");
    }
  }

  function releaseConfetti() {
    setConfettiActive(true);

    setTimeout(() => {
      setConfettiActive(false);
    }, 6000); // Show splash screen for 3 seconds
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
