import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'userDatabase',
        location:'default',
    },
    ()=>{ },
    error => {console.log(error)}
);

export default function LoginNew() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        createTable();
    });

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                + "users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT;"
            )
        })
    }

    const setData = async () => {
        if (username.length == 0){
                Alert.alert('Enter data please.')
        } else {
            try{
                /*await AsyncStorage.setItem('username', username);
                await AsyncStorage.setItem('password', password);*/
                await db.transaction(async (tx)=>{
                    await tx.executeSql(
                        "INSERT INTO users (Username, Password) VALUES (?, ?)",
                        [username, password]
                    );
                })
                Alert.alert('Data saved successfully.')
            } catch (error) {
                console.log(error);
            }
        }
    }

    const getData = (usernameX, passwordX) => {
        try{
            db.transaction((tx) =>{
                tx.executeSql(
                    "SELECT * from users WHERE Username = ? AND Password  = ?",
                    [usernameX, passwordX],
                    (tx, results) => {
                        var len = results.rows.length;
                        if(len > 0) {
                            console.log('Login success');
                            Alert.alert('Login Success bro finally');
                        } else {
                            console.log('Login failed');
                        }
                    }
                )
            })
        } catch (error){
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(value) => setUsername(value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            <Button title="Login" onPress={setData} />
            <Button title="Register" onPress={getData(username, password)} />
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