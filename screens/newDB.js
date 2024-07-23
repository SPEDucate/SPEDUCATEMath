import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// Enable SQLite debugging (optional)
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const App = () => {
  useEffect(() => {
    // Open or create the database
    const openDB = async () => {
      try {
        const db = await SQLite.openDatabse(
          {
            name: 'userDatabase.db',
            location: 'default',
          },
          () => {
            console.log('Database opened');
          },
          error => {
            console.log('Error: ', error);
          }
        );

        // Function to create the table
        // Create the table
        createTable();
      } catch (error) {
        console.log('Error: ', error);
      }
    };

    openDB();
  }, []);


  return (
    <View>
      <Text>SQLite Example</Text>
    </View>
  );
};