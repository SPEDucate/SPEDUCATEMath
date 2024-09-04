import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { executeQuery } from "../scripts/database";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const PreferenceFormUI = () => {
  const [prompts, setPrompts] = useState([]);
  const [choices, setChoices] = useState([["Loading Data..."]]);
  const navigation = useNavigation();

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
  const [gradientColors, setGradientColors] = useState(["#66CCFF", "#3399FF"]); // Default gradient colors

  function incrementQuestion(selectedOption) {
    if (questionIndex === 1) {
      // Assuming the second question is the color preference
      switch (selectedOption) {
        case "Blue":
          setGradientColors(["#66CCFF", "#3399FF"]);
          break;
        case "Red":
          setGradientColors(["#FF6347", "#FF4500"]);
          break;
        case "Green":
          setGradientColors(["#66FF66", "#32CD32"]);
          break;
        case "Purple":
          setGradientColors(["#D8BFD8", "#6A0D91"]);
          break;
        default:
          setGradientColors(["#66CCFF", "#3399FF"]);
          break;
      }
    }

    var nextQuestionIndex = questionIndex + 1;

    // If the index is out of bounds
    if (nextQuestionIndex >= prompts.length) {
      Alert.alert("REACHED LAST ANSWER CHOICE");
      navigation.navigate("Home", { gradientColors });
      return;
    }

    // Update states (which then updates display)
    setQuestionIndex(nextQuestionIndex);
  }

  function goBack() {
    const prevQuestionIndex = questionIndex - 1;

    if (prevQuestionIndex >= 0) {
      setQuestionIndex(prevQuestionIndex);
    }
  }

  return (
    <LinearGradient colors={gradientColors} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.question}>
          {questionIndex + 1}. {prompts[questionIndex]}
        </Text>

        {choices[questionIndex].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => incrementQuestion(item)}
            style={styles.answerContainer}
          >
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
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
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#003087",
    borderRadius: 50,
    elevation: 2,
  },
  finishButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#003087",
    borderRadius: 50,
    alignSelf: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PreferenceFormUI;
