import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

// Function to open or create the database
const openDatabase = async () => {
  try {
    const db = await SQLite.openDatabase({ name: 'userDatabase.db', location: 'default' });
    console.log("Database opened:", db);
    return db;
  } catch (error) {
    console.error("Error opening database:", error);
    return null;
  }
};

// Function to create the users table
const createTable = async () => {
  const db = await openDatabase();
  if (!db) {
    console.error("Database object is null");
    return;
  }

  try {
    await db.transaction(tx => {
      tx.executeSql(
          `CREATE TABLE IF NOT EXISTS users (
                                id       INTEGER         PRIMARY KEY AUTOINCREMENT,
                                username VARCHAR         UNIQUE
                                  NOT NULL,
                                password VARCHAR (8, 20) NOT NULL
           );
          `,
          [],
          () => {
            console.log('Table created successfully');
          },
          (tx, error) => {
            console.error('Error creating table:', error);
            return true; // Rollback the transaction in case of error
          }
      );
    });
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

// Function to insert a new user
const insertUser = async (username, password) => {
  const db = await openDatabase();
  /*if (!db) {
    console.error("Database object is null");
    return;
  }*/

  try {
    await db.transaction(tx => {
      tx.executeSql(
          'INSERT INTO users (username, password) VALUES (?, ?);',
          [username, password],
          () => {
            console.log('User added successfully');
          },
          (tx, error) => {
            console.error('Error adding user:', error);
            return true; // Rollback the transaction in case of error
          }
      );
    });
  } catch (error) {
    console.error('Error adding user:', error);
  }
};
/*
// Function to retrieve a user by username
const getUser = async (username) => {
  const db = await openDatabase();
  if (!db) {
    console.error("Database object is null");
    return [];
  }

  try {
    const results = await new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM users WHERE username = ?;',
            [username],
            (tx, results) => {
              resolve(results.rows.raw());
            },
            (tx, error) => {
              reject(error);
              return true; // Rollback the transaction in case of error
            }
        );
      });
    });
    return results;
  } catch (error) {
    console.error('Error retrieving user:', error);
    return [];
  }
};

// Initialize the database and create the table
const initializeDatabase = async () => {
  await createTable();
};
*/
// Test the database operations
const testDatabaseOperations = async () => {
  await initializeDatabase();

  await insertUser('testuser', 'password123');
  const user = await getUser('testuser');
  console.log('Retrieved user:', user);
};

// Exporting the functions
export { openDatabase, createTable, insertUser,testDatabaseOperations };

// Run the test to ensure everything works
testDatabaseOperations();