import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

export const QuizQuestion = (props) => {
  const data = props.data;
  const [explanation, setExplanation] = useState();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const activeStyle = getActiveStyle();

  if (props.data === undefined) {
    return (
      <View>
        <Text>Loading Data...</Text>
      </View>
    );
  }

  let questionID = props.id;
  return (
    <View style={activeStyle.questionContainer}>
      {/* Question text styled in white */}
      <Text style={activeStyle.questionText}>{data[questionID][0]}</Text>

      {/* Answer choices */}
      {data[questionID][1].map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => checkAnswer(item, index)}
          style={[
            activeStyle.answerContainer,
            selectedAnswerIndex === index &&
              (isCorrectAnswer
                ? activeStyle.correctAnswer
                : activeStyle.incorrectAnswer),
          ]}
        >
          <Text style={activeStyle.answerText}>{item[0]}</Text>
        </TouchableOpacity>
      ))}

      {/* Explanation for answer */}
      <Text>{explanation}</Text>
    </View>
  );

  function checkAnswer(ansData, index) {
    var isCorrect = ansData[1];
    setSelectedAnswerIndex(index);
    setIsCorrectAnswer(isCorrect);
    if (isCorrect) {
      //setExplanation("Correct!");
      playSoundCorrect();
    } else {
      //setExplanation("That is incorrect, try again!");
      playSoundIncorrect();
    }
  }

  async function playSoundCorrect() {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(
        require("../../assets/sounds/correct-electronic.mp3"),
        {
          shouldPlay: true,
          volume: 0.08,
        }
      );
      await sound.setPositionAsync(0);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }
};

async function playSoundIncorrect() {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(require("../../assets/sounds/clack-edit.mp4"), {
      shouldPlay: true,
      volume: 0.1,
    });
    await sound.setPositionAsync(0);
    await sound.playAsync();
  } catch (error) {
    console.error(error);
  }
}

function getActiveStyle() {
  if (INTERFACE_TYPE == "structured") return elegant;
  return normal;
}

// Styles
const normal = StyleSheet.create({
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
  correctAnswer: {
    backgroundColor: "#d4edda", // Light green for correct answer
  },
  incorrectAnswer: {
    backgroundColor: "#f8d7da", // Light red for incorrect answer
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
    borderWidth: 2,
    borderColor: "lightblue",
    backgroundColor: "white",
    elevation: 2,
    alignSelf: "center",
  },
  correctAnswer: {
    backgroundColor: "#d4edda",
  },
  incorrectAnswer: {
    backgroundColor: "#f8d7da",
  },
  answerText: {
    fontSize: 18,
    color: "#00384b",
    textAlign: "center",
    padding: 15,
    fontFamily: "Georgia",
  },
});
