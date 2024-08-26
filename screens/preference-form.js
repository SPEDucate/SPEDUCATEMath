import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

function PreferenceFormUI() {
  const formData = require("../data/preference-form-data.json");
  const navigation = useNavigation();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currQuestionData, setCurrQuestionData] = useState(formData[0]);
  const [gradientColors, setGradientColors] = useState(['#66CCFF', '#3399FF']); // Default gradient colors

  function incrementQuestion(selectedOption) {
    if (questionIndex === 1) { // Assuming the second question is the color preference
      switch (selectedOption) {
        case 'Blue':
          setGradientColors(['#66CCFF', '#3399FF']);
          break;
        case 'Red':
          setGradientColors(['#FF6347', '#FF4500']);
          break;
        case 'Green':
          setGradientColors(['#66FF66', '#32CD32']);
          break;
        case 'Purple':
          setGradientColors(['#D8BFD8', '#6A0D91']);
          break;
        default:
          setGradientColors(['#66CCFF', '#3399FF']);
          break;
      }
    }

    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex >= formData.length) {
      navigation.navigate('Home', { gradientColors });
    } else {
      setQuestionIndex(nextQuestionIndex);
      setCurrQuestionData(formData[nextQuestionIndex]);
    }
  }

  function goBack() {
    const prevQuestionIndex = questionIndex - 1;

    if (prevQuestionIndex >= 0) {
      setQuestionIndex(prevQuestionIndex);
      setCurrQuestionData(formData[prevQuestionIndex]);
    }
  }

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.question}>{questionIndex + 1}. {currQuestionData.questionText}</Text>

        {currQuestionData.options.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => incrementQuestion(item)} style={styles.answerContainer}>
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {questionIndex === formData.length - 1 && (
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.finishButton}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        )}
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
    borderWidth: 2,
    borderColor: 'lightblue',
    backgroundColor: 'white',
    elevation: 2,
    alignSelf: 'center',
  },
  answerText: {
    fontSize: 18,
    color: '#00384b',
    textAlign: 'center',
    padding: 15,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#003087',
    borderRadius: 50,
    elevation: 2,
  },
  finishButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#003087',
    borderRadius: 50,
    alignSelf: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PreferenceFormUI;