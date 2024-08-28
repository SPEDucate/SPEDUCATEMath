import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { executeQuery } from "../scripts/database";

const PreferenceFormUI = () => {
  const [prompts, setPrompts] = useState([]);
  const [choices, setChoices] = useState([["Loading Data..."]]);

  // fetch the data from database
  useEffect(() => {
    const getQuestionData = async () => {
      let questionTexts = await executeQuery(
        "SELECT * FROM PrefQuestions ORDER BY question_id"
      );
      // console.log("GOT TEXTS: " + JSON.stringify(questionTexts));
      let choicesRaw = await executeQuery(
        "SELECT * FROM PrefChoices ORDER BY question_id"
      );
      // console.log("CHOICES: " + JSON.stringify(choicesRaw));

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

    getQuestionData().catch(console.error);
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
    <View style={styles.container}>
      <Text>
        {questionIndex + 1}. {prompts[questionIndex]}
      </Text>

      {choices[questionIndex].map((item, index) => (
        <Text key={index} onPress={incrementQuestion}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    margin: "auto",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default PreferenceFormUI;
