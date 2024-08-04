import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

const PreferenceFormUI = () => {
  // Get the JSON file with all the questions info
  const formData = require("../data/preference-form-data.json");
  // console.log(formData);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [currQuestionData, setCurrQuestionData] = useState(formData[0]);

  function incrementQuestion() {
    var nextQuestionIndex = questionIndex + 1;

    // If the index is out of bounds
    if (nextQuestionIndex >= formData.length || nextQuestionIndex < 0) {
      Alert.alert("OUT OF BOUNDS INDEX");
      // Do something here
      // probably go to the curriculum or smth
      return;
    }

    // Update states (which then updates display)
    setQuestionIndex(nextQuestionIndex);
    setCurrQuestionData(formData[nextQuestionIndex]);
  }

  return (
    <View style={styles.container}>
      {/* Question Number and Question Text*/}
      <Text>{questionIndex + 1}. {currQuestionData.questionText}</Text>

      {/* Answer Choices */}
      {currQuestionData.options.map((item, index) => (
        <Text 
          key={index} onPress={incrementQuestion}>{item}</Text>
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
