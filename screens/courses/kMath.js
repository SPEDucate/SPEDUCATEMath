// screens/kMath.js
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Assuming you're using Expo

export default function KMath({ navigation }) {
  return (
    <LinearGradient
      colors={['#66CCFF', '#3399FF']} // Light blue to dark blue gradient
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Kindergarten Math</Text>
        <Text style={styles.description}>
          Welcome to the Kindergarten Math course! Here, we will cover foundational math concepts suitable for young learners. The course includes:
        </Text>
        <Text style={styles.listItem}>1. Basic Counting</Text>
        <Text style={styles.listItem}>2. Simple Addition and Subtraction</Text>
        <Text style={styles.listItem}>3. Introduction to Shapes and Patterns</Text>
        <Text style={styles.listItem}>4. Fun Math Games and Activities</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Start Learning"
            onPress={() => {
              // Add logic to navigate to the first lesson or activity
              alert('Starting the Kindergarten Math course!');
            }}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 24,
    textAlign: 'center',
  },
  listItem: {
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
});
