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
    focus_strategy: "fds",
  });

  // Fetch the data from the database
  useEffect(() => {
    const getQuestionData = async () => {
      const [questionTexts, choicesRaw] = await Promise.all([
        executeQuery("SELECT * FROM PrefQuestions ORDER BY question_id"),
        executeQuery("SELECT * FROM PrefChoices ORDER BY question_id"),
      ]);

      const cleanedTexts = questionTexts.map((q) => q.question_text);
      const cleanedChoices = choicesRaw.reduce((acc, currChoice) => {
        const lastQuestionChoices = acc[acc.length - 1];
        if (
          lastQuestionChoices &&
          lastQuestionChoices.question_id === currChoice.question_id
        ) {
          lastQuestionChoices.choices.push(currChoice.choice_text);
        } else {
          acc.push({
            question_id: currChoice.question_id,
            choices: [currChoice.choice_text],
          });
        }
        return acc;
      }, []);

      setPrompts(cleanedTexts);
      setChoices(cleanedChoices.map((choice) => choice.choices));
    };

    getQuestionData();
  }, []);

  const [questionIndex, setQuestionIndex] = useState(0);
  const navigation = useNavigation();

  function incrementQuestion(selectedOption) {
    switch (questionIndex) {
      case 0:
        setUserResponses({ ...userResponses, time_per_day: selectedOption });
        break;
      case 1:
        setUserResponses({ ...userResponses, fav_color: selectedOption });
        saveColor(selectedOption);
        break;
      case 2:
        setUserResponses({
          ...userResponses,
          sensory_sensitivities: selectedOption,
        });
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

    if (nextQuestionIndex >= prompts.length) {
      console.log(userResponses);
      saveResponsesToDatabase(userResponses);
      // Alert.alert("REACHED LAST ANSWER CHOICE");
      navigation.navigate("Home");
      return;
    }

    // Special handling for auditory learners
    if (
      userResponses.learning_method === "Auditory Instruction" &&
      selectedOption === "Correct Answer"
    ) {
      playCorrectSound(); // Play sound when auditory learners get correct answers
    }

    setQuestionIndex(nextQuestionIndex);
  }

  function decrementQuestion() {
    const prevQuestionIndex = questionIndex - 1;

    if (prevQuestionIndex >= 0) {
      setQuestionIndex(prevQuestionIndex);
    }
  }

  function saveColor(selectedOption) {
    // Assuming the second question is the color preference
    switch (selectedOption) {
      case "Blue":
        FAV_COLOR = ["#66CCFF", "#3399FF"];
        break;
      case "Red":
        FAV_COLOR = ["#FF6F61", "#BF2A2A"];
        break;
      case "Green":
        FAV_COLOR = ["#66FF66", "#2E8B57"];
        break;
      case "Purple":
        FAV_COLOR = ["#D8BFD8", "#6A0D91"];
        break;
    }
  }

  // Save the user responses to the PrefData table in the database
  const saveResponsesToDatabase = async (responses) => {
    try {
      await executeQuery(
        `REPLACE INTO PrefData (user_id, time_per_day, fav_color, sensory_sensitivities, learning_method, feedback_method, interface_type, reward_type, focus_strategy) 
        VALUES (
          ${CURR_USER_ID},
          "${responses.time_per_day}",
          "${responses.fav_color}",
          "${responses.sensory_sensitivities}",
          "${responses.learning_method}",
          "${responses.feedback_method}",
          "${responses.interface_type}",
          "${responses.reward_type}",
          "${responses.focus_strategy}"
        )`
      );
    } catch (error) {
      console.error("Error saving responses to the database: ", error);
    }
  };

  return (
    <LinearGradient colors={FAV_COLOR} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity onPress={decrementQuestion} style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.question}>
          {questionIndex + 1}. {prompts[questionIndex]}
        </Text>

        {choices[questionIndex]?.map((item, index) => (
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PreferenceFormUI;
