// screens/kMath.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LinearGradient,
} from "react-native";

export const QuizQuestion = (props) => {
  const data = props.data;

  if (props.data === undefined) {
    return (
      <View>
        <Text>Loading Data...</Text>
      </View>
    );
  }

  let questionID = props.id;
  return (
    <View style={styles.container}>
      <Text>{data[questionID][0]}</Text>

      {data[questionID][1].map((item, index) => (
        <TouchableOpacity
          key={index}
          // onPress={() => incrementQuestion(item)}
          style={styles.answerContainer}
        >
          <Text style={styles.answerText}>{item[0]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// this is all copy-pasted from PrefForm
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
