import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import Question from "./question";

const PreferenceFormUI = () => {
  const formData = require("../data/preference-form-data.json");

  const [questionIndex, setQuestionIndex] = useState(0);
  const [currQuestionData, setCurrQuestionData] = useState(formData[0]);
  
  // Get the JSON file with all the questions info
  console.log(formData);

  function incrementQuestion() {
    var nextQuestionIndex = questionIndex + 1;

    // If the index is out of bounds
    if (nextQuestionIndex >= formData.length || nextQuestionIndex < 0) {
      Alert.alert("NO");
      return;
    }

    // Set states (which updates display)
    setQuestionIndex(questionIndex => nextQuestionIndex);
    setCurrQuestionData(currQuestionData => formData[nextQuestionIndex]);
  }

  return (
    <View style={styles.container}>
      {/* Question Number and Question*/}
      <Text>{questionIndex + 1}. {currQuestionData.questionText}</Text>

      {/* Answer Choices */}
      {currQuestionData.options.map((item, index) => (
        <Text 
          key={index} onPress = {incrementQuestion}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "auto",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default PreferenceFormUI;
