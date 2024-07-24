/*import React, { useState, useEffect } from 'react';


import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { openDatabase, createTable, insertUser, getUser } from './database';
import SQLite from 'react-native-sqlite-storage';


const Login = () => {
  //const [db, setDb] = useState(null);
  const db = SQLite.openDatabase({ name: 'userDatabase.db', location: 'default' });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Initialize the database when the component mounts
  useEffect(() => {
    const initDatabase = async () => {
      try {
        const database = await openDatabase();
        setDb(database);
        if (database) {
          await createTable(database);
        }
      } catch (error) {
        console.error("Database initialization failed:", error);
        Alert.alert('Database Error', 'Failed to initialize the database');
      }
    };
    initDatabase();
  }, []);

  const handleLogin = async () => {
    if (!db) {
      Alert.alert('Database Error', 'Database not initialized');
      return;
    }

    try {
      const users = await getUser(db, username);
      if (users.length > 0) {
        if (users[0].password === password) {
          Alert.alert('Login Successful', `Welcome, ${username}!`);
        } else {
          Alert.alert('Error', 'Incorrect password');
        }
      } else {
        Alert.alert('Error', 'User not found');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Error', 'An error occurred during login');
    }
  };

  const handleRegister = async () => {
    if (!db) {
      Alert.alert('Database Error', 'Database not initialized');
      return;
    }

    try {
      await insertUser(db, username, password);
      Alert.alert('Success', 'User registered successfully');
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Registration Error', 'An error occurred during registration');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Login;*/

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { openDatabase, createTable, insertUser, getUser } from './database';
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const Login = () => {
  const [db, setDb] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const initDatabase = async () => {
      try {
        const database = await openDatabase();
        setDb(database);
        /*if (database) {
          await createTable(database);
        }*/
      } catch (error) {
        console.error("Database initialization failed:", error);
        Alert.alert('Database Error', 'Failed to initialize the database');
      }
    };
    initDatabase();
  }, []);

  const handleLogin = async () => {
    console.log("in login");
    try {
      setDb("userDatabase.db");
    } catch (error) {
      console.log(error);
    }


    try {
      const users = await getUser(db, username);
      if (users.length > 0) {
        if (users[0].password === password) {
          Alert.alert('Login Successful', `Welcome, ${username}!`);
        } else {
          Alert.alert('Error', 'Incorrect password');
        }
      } else {
        Alert.alert('Error', 'User not found');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Error', 'An error occurred during login');
    }
  };

  const handleRegister = async () => {
    console.log("in register");
    if (!db) {
      Alert.alert('Database Error', 'Database not initialized');
      return;
    }

    try {
      await insertUser(db, username, password);
      Alert.alert('Success', 'User registered successfully');
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Registration Error', 'An error occurred during registration');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Login;
