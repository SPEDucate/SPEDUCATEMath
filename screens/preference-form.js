import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Papa from "papaparse";
import * as FileSystem from 'expo-file-system';

async function getQuestionData() {
  const relative_path = "data/".concat("preference form questions - Sheet1.csv");

  const fileUrl = FileSystem.documentDirectory + relative_path;
  console.log(fileUrl)
  const fileContent = await FileSystem.readAsStringAsync(fileUrl);
  console.log(fileContent);

  // let res = Papa.parse(fileContent, {
  //   header: true,
  //   skipEmptyLines: true,
  //   complete: (results) => {
  //     console.log(results);
  //   }
  // });

  // return res;
}

const PreferenceFormUI = () => {
  // Get the JSON file with all the questions info
  const formData = getQuestionData();
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
