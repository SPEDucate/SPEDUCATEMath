import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Audio } from "expo-av";

export const QuizQuestion = (props) => {
  const data = props.data;
  const [explanation, setExplanation] = useState();
  const [sound, setSound] = useState(); // State for sound

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
      playSoundCorrect();
    } else {
      // Alert.alert("INCORRECT");
      setExplanation("That is incorrect, try again!");
    }
  }

  // Function to play sound for correct answers
  async function playSoundCorrect() {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(
        require("../../assets/sounds/correct-electronic.mp3"),
        {
          shouldPlay: true,
          volume: 0.01,
        }
      );
      await sound.setPositionAsync(0);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }
};

// Styles
const styles = StyleSheet.create({
  questionContainer: {
    width: "100%",
    display: "block",
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
    width: "100%",
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

const elegant = StyleSheet.create({
  questionContainer: {
    backgroundColor: "transparent", // Keep it transparent
    padding: 16,
    //borderRadius: 10, // Rounded corners
    borderWidth: 0, // Thick border
    borderColor: "#ffffff", // White border
    marginBottom: 24, // Spacing below
  },
  questionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", // White text for the question
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Georgia",
  },
  answerContainer: {
    width: 350,
    marginVertical: 10,
    //borderRadius: 20,
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
    fontFamily: "Georgia",
  },
});
