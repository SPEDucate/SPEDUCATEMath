// screens/kMath.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Math4() {
  return (
    <View style={styles.container}>
      <Text>Kindergarten Math Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
