import { View, Text, TextInput, Button, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import PreferenceFormUI from '../screens/preference-form';

function Login() {
  const db = useSQLiteContext();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (userName.length === 0 || password.length === 0) {
      Alert.alert('Attention', 'Please enter both username and password');
      return;
    }
    try {
      const user = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [userName]);
      if (!user) {
        Alert.alert('Error', 'Username does not exist!');
        return;
      }
      const validUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ? AND password = ?', [userName, password]);
      if (validUser) {
        setUserName('');
        setPassword('');
        navigation.navigate('PreferenceForm');
      } else {
        Alert.alert('Error', 'Incorrect password');
      }
    } catch (error) {
      console.log('Error during login:', error);
    }
  };

  const handleRegister = async () => {
    if (userName.length === 0 || password.length === 0) {
      Alert.alert('Attention!', 'Please enter both username and password.');
      return;
    }
    try {
      const existingUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [userName]);
      if (existingUser) {
        Alert.alert('Error', 'Username already exists.');
        return;
      }

      await db.runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [userName, password]);
      Alert.alert('Success', 'Registration successful!');
      
      // Redirect to PreferenceFormUI after successful registration
      navigation.navigate('PreferenceFormUI');
      
    } catch (error) {
      console.log('Error during registration:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#9FCAF5', '#3399FF']}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/SPEDUCATE-Transparent.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Log in or Register to your account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="black"
          value={userName}
          onChangeText={(value) => setUserName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003087',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#003087',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    color: 'black',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#003087',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Login;
