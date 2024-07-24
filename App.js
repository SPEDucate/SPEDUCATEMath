import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/splash-screen";
import { useEffect, useState } from "react";
import LoginFormUI from "./screens/login";
import PreferenceFormUI from "./screens/preference-form";
import Login from "./screens/login";
import { openDatabase, createTable } from './screens/database';
import LoginNew from "./screens/loginNew";

const App = () => {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  const [db, setDb] = useState(null);

  /*useEffect(() => {
    const initDatabase = async () => {
      try {
        const database = await openDatabase();
        //const database = openDatabase();
        console.log("db created");
        setDb(database);
        /*if (database) {
          await createTable(database);
        }
      } catch (error) {
        console.error("Database initialization failed:", error);
      }
    }
    initDatabase();
  });*/

    /*const logDatabaseContents = async () => {
      try {
        if (!db) return;
        const [results] = await db.executeSql('SELECT * FROM users;');
        const users = results.rows.raw();
        console.log('Database contents:', users);
      } catch (error) {
        console.error('Error fetching database contents:', error);
      }
    };*/

    // Initialize the database
  //initDatabase();

    // Log the database contents every 10 seconds
    //const intervalId = setInterval(logDatabaseContents, 10000);

    // Clean up the interval on component unmount
    /*return () => clearInterval(intervalId);
  }, [db]);*/

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {isShowSplashScreen ? <SplashScreen /> : <LoginNew />}
    </View>
    
  );

  /*return (
    <View style={styles.container}>
      <SplashScreen></SplashScreen>
    </View>
  );*/
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;


