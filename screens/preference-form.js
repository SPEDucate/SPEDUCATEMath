import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { executeQuery } from "../scripts/database";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const PreferenceFormUI = () => {
  const [prompts, setPrompts] = useState([]);
  const [choices, setChoices] = useState([["Loading Data..."]]);
  const [userResponses, setUserResponses] = useState({
    time_per_day: "",
    fav_color: "",
    sensory_sensitivities: "",
    learning_method: "",
    feedback_method: "",
    interface_type: "",
    reward_type: "",
    focus_strategy: "",
  });

  // Fetch the data from the database
  useEffect(() => {
    const getQuestionData = async () => {
      const [questionTexts, choicesRaw] = await Promise.all([
        executeQuery("SELECT * FROM PrefQuestions ORDER BY question_id"),
        executeQuery("SELECT * FROM PrefChoices ORDER BY question_id"),
      ]);

      const cleanedTexts = questionTexts.map(q => q.question_text);
      const cleanedChoices = choicesRaw.reduce((acc, currChoice) => {
        const lastQuestionChoices = acc[acc.length - 1];
        if (lastQuestionChoices && lastQuestionChoices.question_id === currChoice.question_id) {
          lastQuestionChoices.choices.push(currChoice.choice_text);
        } else {
          acc.push({ question_id: currChoice.question_id, choices: [currChoice.choice_text] });
        }
        return acc;
      }, []);
      
      setPrompts(cleanedTexts);
      setChoices(cleanedChoices.map(choice => choice.choices));
    };

    getQuestionData();
  }, []);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [gradientColors, setGradientColors] = useState(["#66CCFF", "#3399FF"]); // Default gradient colors
  const navigation = useNavigation();

  function incrementQuestion(selectedOption) {
    // Store the user's selected option based on the current question index
    switch (questionIndex) {
      case 0:
        setUserResponses({ ...userResponses, time_per_day: selectedOption });
        break;
      case 1:
        setUserResponses({ ...userResponses, fav_color: selectedOption });
        updateGradient(selectedOption);
        break;
      case 2:
        setUserResponses({ ...userResponses, sensory_sensitivities: selectedOption });
        break;
      case 3:
        setUserResponses({ ...userResponses, learning_method: selectedOption });
        break;
      case 4:
        setUserResponses({ ...userResponses, feedback_method: selectedOption });
        break;
      case 5:
        setUserResponses({ ...userResponses, interface_type: selectedOption });
        break;
      case 6:
        setUserResponses({ ...userResponses, reward_type: selectedOption });
        break;
      case 7:
        setUserResponses({ ...userResponses, focus_strategy: selectedOption });
        break;
      default:
        break;
    }
  
    const nextQuestionIndex = questionIndex + 1;
  
    // If the index is out of bounds, insert the responses into the database
    if (nextQuestionIndex >= prompts.length) {
      console.log(userResponses);
      saveResponsesToDatabase(userResponses);
  
      // Navigate to the Home screen and pass the learning method along with gradient colors
      navigation.navigate("Home", { gradientColors, learningMethod: userResponses.learning_method });
      return;
    }
  
    // Update states (which then updates display)
    setQuestionIndex(nextQuestionIndex);
  }
  

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
}
export default PreferenceFormUI;
