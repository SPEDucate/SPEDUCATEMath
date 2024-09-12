import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Modal } from "react-native";

const QuestionUI = () => {
  // Get the JSON files with all the questions, answers, and explanations
  const formData = require("../data/questions.json");
  const answerData = require("../data/answers.json");
  const explanationData = require("../data/explain.json");

  const [questionIndex, setQuestionIndex] = useState(0);
  const [currQuestionData, setCurrQuestionData] = useState(formData[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "", nextStep: null });

  function handleAnswerPress(selectedOption) {
    const correctAnswer = answerData.answers[questionIndex];
    const explanation = explanationData.explanations[questionIndex]; // Get the explanation for the current question

    if (selectedOption === correctAnswer) {
      setModalContent({
        title: "Good Job! That's correct!",
        message: "",
        nextStep: incrementQuestion,
      });
    } else {
      setModalContent({
        title: "Uh oh! That appears to be incorrect!",
        message: explanation,
        nextStep: null,
      });
    }
    setModalVisible(true);
  }

  function incrementQuestion() {
    var nextQuestionIndex = questionIndex + 1;

    // If the index is out of bounds
    if (nextQuestionIndex >= formData.length || nextQuestionIndex < 0) {
      setModalContent({
        title: "OUT OF BOUNDS INDEX",
        message: "You have reached the end of the quiz.",
        nextStep: null,
      });
      setModalVisible(true);
      return;
    }

    // Update states (which then updates display)
    setQuestionIndex(nextQuestionIndex);
    setCurrQuestionData(formData[nextQuestionIndex]);
    setModalVisible(false); // Close the modal after question increments
  }

  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Question Number and Question Text */}
        <Text style={styles.question}>{questionIndex + 1}. {currQuestionData.questionText}</Text>

        {/* Answer Choices */}
        {currQuestionData.options.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleAnswerPress(item)} style={styles.answerContainer}>
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Custom Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{modalContent.title}</Text>
              {modalContent.message ? <Text style={styles.modalMessage}>{modalContent.message}</Text> : null}
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  if (modalContent.nextStep) {
                    modalContent.nextStep();
                  } else {
                    setModalVisible(false);
                  }
                }}
              >
                <Text style={styles.modalButtonText}>
                  {modalContent.nextStep ? "Next Question" : "Try Again"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  modalButtonText: {
    fontSize: 18,
    color: "#00384b",
    textAlign: "center",
  },
});

export default QuestionUI;
