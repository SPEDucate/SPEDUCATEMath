import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { executeQuery } from "../scripts/database";

const PreferenceFormUI = () => {
  const [prompts, setPrompts] = useState([]);
  const [choices, setChoices] = useState([["Loading Data..."]]);

  // fetch the data from database
  useEffect(() => {
    const getQuestionData = async () => {
      const [questionTexts, choicesRaw] = await Promise.all([
        executeQuery("SELECT * FROM PrefQuestions ORDER BY question_id"),
        executeQuery("SELECT * FROM PrefChoices ORDER BY question_id"),
      ]);

      cleanedTexts = [];
      for (let i = 0; i < questionTexts.length; i++) {
        cleanedTexts.push(questionTexts[i].question_text);
      }

      cleanedChoices = [];
      cleanedChoices.push([choicesRaw[0].choice_text]);
      for (let i = 1; i < choicesRaw.length; i++) {
        let currChoice = choicesRaw[i];
        if (currChoice.question_id == choicesRaw[i - 1].question_id) {
          cleanedChoices[cleanedChoices.length - 1].push(
            currChoice.choice_text
          );
        } else {
          cleanedChoices.push([currChoice.choice_text]);
        }
      }

      setPrompts(cleanedTexts);
      setChoices(cleanedChoices);
    };

    getQuestionData();
  }, []);

  const [questionIndex, setQuestionIndex] = useState(0);

  function incrementQuestion() {
    var nextQuestionIndex = questionIndex + 1;

    // If the index is out of bounds
    if (nextQuestionIndex >= prompts.length || nextQuestionIndex < 0) {
      Alert.alert("REACHED LAST ANSWER CHOICE");
      // Do something here, probably go to the curriculum or smth
      return;
    }

    // Update states (which then updates display)
    setQuestionIndex(nextQuestionIndex);
  }

  return (
    <ImageBackground
      source={require("../assets/background.jpg")} // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.question}>
          {questionIndex + 1}. {prompts[questionIndex]}
        </Text>

        {choices[questionIndex].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={incrementQuestion}
            style={styles.answerContainer}
          >
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  answerContainer: {
    width: 350,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 2, // Add border width
    borderColor: "lightblue", // Add light blue border color
    backgroundColor: "white", // Add white background color
    elevation: 2,
    alignSelf: "center",
  },
  answerText: {
    fontSize: 18,
    color: "#00384b", // Add light blue text color
    textAlign: "center",
    padding: 15,
  },
});

export default PreferenceFormUI;
