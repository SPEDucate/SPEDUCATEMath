import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const QuizScreen = () => {
  const questions = [
    { questionText: 'What is the capital of France?', answerOptions: ['Paris', 'Berlin', 'London', 'Rome'], correctAnswer: 'Paris' },
    { questionText: 'Who wrote "To Kill a Mockingbird"?', answerOptions: ['George Orwell', 'J.K. Rowling', 'Harper Lee', 'Stephen King'], correctAnswer: 'Harper Lee' },
    // Add more questions as needed!
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz finished! You scored ${score} out of ${questions.length}`);
    }
  };

  return (
    <View>
      <Text>{questions[currentQuestion].questionText}</Text>
      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <Button title={answerOption} onPress={() => handleAnswerOptionClick(answerOption)} />
      ))}
    </View>
  );
};

export default QuizScreen;