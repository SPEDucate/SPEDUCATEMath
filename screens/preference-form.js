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

  const navigation = useNavigation();

  // fetch the data from the database
  useEffect(() => {
    const getQuestionData = async () => {
      const [questionTexts, choicesRaw] = await Promise.all([
        executeQuery("SELECT * FROM PrefQuestions ORDER BY question_id"),
        executeQuery("SELECT * FROM PrefChoices ORDER BY question_id"),
      ]);

      let cleanedTexts = [];
      for (let i = 0; i < questionTexts.length; i++) {
        cleanedTexts.push(questionTexts[i].question_text);
      }

      let cleanedChoices = [];
      cleanedChoices.push([choicesRaw[0].choice_text]);
      for (let i = 1; i < choicesRaw.length; i++) {
        let currChoice = choicesRaw[i];
        if (currChoice.question_id === choicesRaw[i - 1].question_id) {
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
        setUserResponses({
          ...userResponses,
          sensory_sensitivities: selectedOption,
        });
        break;
      case 3:
        setUserResponses({
          ...userResponses,
          learning_method: selectedOption,
        });
        break;
      case 4:
        setUserResponses({
          ...userResponses,
          feedback_method: selectedOption,
        });
        break;
      case 5:
        setUserResponses({
          ...userResponses,
          interface_type: selectedOption,
        });
        break;
      case 6:
        setUserResponses({
          ...userResponses,
          reward_type: selectedOption,
        });
        break;
      case 7:
        setUserResponses({
          ...userResponses,
          focus_strategy: selectedOption,
        });
        break;
      default:
        break;
    }

    var nextQuestionIndex = questionIndex + 1;

    // If the index is out of bounds, insert the responses into the database
    if (nextQuestionIndex >= prompts.length) {
      saveResponsesToDatabase(userResponses);
      Alert.alert("REACHED LAST ANSWER CHOICE");
      navigation.navigate("Home", { gradientColors });
      return;
    }

    // Update states (which then updates display)
    setQuestionIndex(nextQuestionIndex);
  }

  function updateGradient(selectedOption) {
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

  function goBack() {
    const prevQuestionIndex = questionIndex - 1;

    if (prevQuestionIndex >= 0) {
      setQuestionIndex(prevQuestionIndex);
    }
  }

  // Save the user responses to the PrefData table in the database
  const saveResponsesToDatabase = async (responses) => {
    try {
      const userId = 1; // Replace with the actual user ID
      await executeQuery(
        `INSERT INTO PrefData (user_id, time_per_day, fav_color, sensory_sensitivities, learning_method, feedback_method, interface_type, reward_type, focus_strategy)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          userId,
          responses.time_per_day,
          responses.fav_color,
          responses.sensory_sensitivities,
          responses.learning_method,
          responses.feedback_method,
          responses.interface_type,
          responses.reward_type,
          responses.focus_strategy,
        ]
      );
      Alert.alert("Responses saved successfully!");
    } catch (error) {
      console.error("Error saving responses to the database: ", error);
    }
  };

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
