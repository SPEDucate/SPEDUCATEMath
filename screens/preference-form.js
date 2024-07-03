import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Question from "./question";

const PreferenceFormUI = () => {
  const formData = require("../data/preference-form-data.json");

  // console.log(formData);
  // const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Text>sample text</Text>
      <Question>{formData[0]}</Question>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "auto",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default PreferenceFormUI;
