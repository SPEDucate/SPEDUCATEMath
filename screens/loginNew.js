// screens/LoginNew.js
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';

function LoginNew() {
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
                Alert.alert('Success', 'Login successful');
                setUserName('');
                setPassword('');
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', 'Incorrect password');
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
    }

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
        } catch (error) {
            console.log('Error during registration:', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login/Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={userName}
                onChangeText={(value) => setUserName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={handleRegister} />
        </View>
    )
}

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

export default LoginNew;
