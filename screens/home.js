import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Assuming you're using Expo

const courses = [
  { id: '1', name: 'Kindergarten math' },
  { id: '2', name: '1st grade math' },
  { id: '3', name: '2nd grade math' },
  { id: '4', name: '3rd grade math' },
  { id: '5', name: '4th grade math' },
  { id: '6', name: '5th grade math' },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.courseContainer, { backgroundColor: selectedId === item.id ? '#e0f7fa' : '#fff' }]}
      onPress={() => setSelectedId(item.id)}
    >
      <Text style={styles.courseName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleContinue = () => {
    if (selectedId) {
      Alert.alert('Selected Course', `You selected: ${courses.find(course => course.id === selectedId).name}`);
      // Handle the continue action, e.g., navigate to the next screen
    } else {
      Alert.alert('No Selection', 'Please select a course before continuing.');
    }
  };

  return (
    <LinearGradient
      colors={['#66CCFF', '#3399FF']} // Light blue to dark blue with slight gradient
      style={styles.container}
    >
      <Text style={styles.title}>SPEDucate Course Selection</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60, // Increased padding at the top
  },
  title: {
    fontSize: 36, // Made the title bigger
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 24, // Increased vertical margin
    color: '#FFFFFF', // White color for title
  },
  list: {
    flexGrow: 1,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'space-between',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003087',
  },
  continueButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#003087',
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
