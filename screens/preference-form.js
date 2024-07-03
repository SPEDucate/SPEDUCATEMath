import React, { useState, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import Question from "./question";

const PreferenceFormUI = () => {
  const formData = require("../data/preference-form-data.json");

  console.log(formData);

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = () => {};

  return (
    <View>
      <Text>hello</Text>
      {formData.map((data, index) => {
        <Question key={index} {...data}></Question>;
      })}
    </View>
  );
};

export default PreferenceFormUI;
