// App.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './screens/splash-screen';
import AppNavigator from './screens/appNavigator';
import { SQLiteProvider } from 'expo-sqlite';

// Initialize the database
const initializeDatabase = async (db) => {
    try {
        await db.execAsync(`
           CREATE TABLE IF NOT EXISTS users (
                id       INTEGER         PRIMARY KEY AUTOINCREMENT,
                username VARCHAR         UNIQUE
                  NOT NULL,
                password VARCHAR (8, 20) NOT NULL
            );
        `);
        console.log('Database initialized!');
    } catch (error) {
        console.log('Error while initializing the database:', error);
    }
};

const App = () => {
    const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsShowSplashScreen(false);
        }, 3000);
    }, []);

    return (
        <SQLiteProvider databaseName="userDatabase.db" onInit={initializeDatabase}>
            <View style={styles.container}>
                {isShowSplashScreen ? <SplashScreen /> : <AppNavigator />}
            </View>
        </SQLiteProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
