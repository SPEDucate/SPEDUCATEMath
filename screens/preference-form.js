import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const PreferenceFormUI = () => {
  // Get the JSON file with all the questions info
  const formData = require("../data/preference-form-data.json");

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
    <ImageBackground 
      source={require('../assets/background.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
        <View style={styles.container}>
          {/* Question Number and Question Text*/}
          <Text style={styles.question}>{questionIndex + 1}. {currQuestionData.questionText}</Text>

          {/* Answer Choices */}
          {currQuestionData.options.map((item, index) => (
            <TouchableOpacity key={index} onPress={incrementQuestion} style={styles.answerContainer}>
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
    resizeMode: 'cover',
  },
  
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  answerContainer: {
    width: 350,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 2, // Add border width
    borderColor: 'lightblue', // Add light blue border color
    backgroundColor: 'white', // Add white background color
    elevation: 2,
    alignSelf: 'center',
  },
  answerText: {
    fontSize: 18,
    color: '#00384b', // Add light blue text color
    textAlign: 'center',
    padding: 15,
  },
});

export default PreferenceFormUI;
