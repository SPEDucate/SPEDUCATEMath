/*import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

// Function to open or create the database
const openDatabase = async () => {
  try {
    const db = await SQLite.openDatabase({ name: 'userDatabase.db', location: 'default' });
    console.log("Database opened");
    return db;
  } catch (error) {
    console.error("Error opening database:", error);
    return null;
  }
};

// Function to create the users table
const createTable = async (db) => {
  if (!db) return;

  try {
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      );`
    );
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

// Function to insert a new user
const insertUser = async (db, username, password) => {
  if (!db) return;

  try {
    await db.executeSql(
      'INSERT INTO users (username, password) VALUES (?, ?);',
      [username, password]
    );
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// Function to retrieve a user by username
const getUser = async (db, username) => {
  if (!db) return [];

  try {
    const [results] = await db.executeSql(
      'SELECT * FROM users WHERE username = ?;',
      [username]
    );
    return results.rows.raw();
  } catch (error) {
    console.error('Error retrieving user:', error);
    return [];
  }
};

// Exporting the functions
export { openDatabase, createTable, insertUser, getUser };*/

import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

// Function to open or create the database
const openDatabase = async () => {
  try {
    //const db = await SQLite.openDatabase({ name: 'userDatabase.db', location: 'default' });
    //const db = SQLite.openDatabase('userDatabase.db');
    const db=SQLite.openDatabase({ name: 'ShanthaTest.db', location: 'default' });
    console.log("db is " +db);
    console.log("Database opened");
    /*const testing = "CREATE TABLE test (id INTEGER ,username TEXT);";
    SQLite.executeSql(testing);*/
    //return db;
  } catch (error) {
    //db.close();
    console.error("Error opening database:", error);
    return null;
  }
};

// Function to create the users table
const createTable = async (db) => {
  console.log("in table creation");
  console.log("db" +db);
  //if (!db) return;

  try {
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      );`
    );
    /*await db.executeSql(
      `CREATE TABLE test (
        id INTEGER ,
        username TEXT
      );`
    );*/
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

/*const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
      )`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error: ', error);
      }
    );
  });
};*/

// Function to insert a new user
const insertUser = async (db, username, password) => {
  if (!db) return;

  try {
    await db.executeSql(
      'INSERT INTO users (username, password) VALUES (?, ?);',
      [username, password]
    );
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// Function to retrieve a user by username
const getUser = async (db, username) => {
  if (!db) return [];

  try {
    const [results] = await db.executeSql(
      'SELECT * FROM users WHERE username = ?;',
      [username]
    );
    return results.rows.raw();
  } catch (error) {
    console.error('Error retrieving user:', error);
    return [];
  }
};

// Exporting the functions
export { openDatabase, createTable, insertUser, getUser };
