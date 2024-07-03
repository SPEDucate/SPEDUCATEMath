import React, { useState, useRef } from "react";
import { View, Text } from "react-native";

const Question = (props) => {
  console.log(props);

  return (
    <View>
      <Text>{props.children.questionText}</Text>

      {props.children.options.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default Question;
