import React, { useState, useRef } from "react";
import { View, Text } from "react-native";

const Question = (props) => {
  return (
    <View>
      <Text>{props.questionText}</Text>
    </View>
  );
};

export default Question;
