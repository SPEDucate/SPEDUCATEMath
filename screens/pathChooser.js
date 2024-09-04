import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PathChooser() {  
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/pathChooserBG.png')} 
        style={styles.map}
      >
        <TouchableOpacity 
          style={[styles.button, styles.location1]} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Choose My Path</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.location2]} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Resume My Path</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  location1: {
    position: 'absolute',
    top: '35%',
    left: '45%',
    transform: [{ rotate: '315deg' }],
  },
  location2: {
    position: 'absolute',
    top: '35%',
    left: '-7%',
    transform: [{ rotate: '45deg' }],
  },
});
