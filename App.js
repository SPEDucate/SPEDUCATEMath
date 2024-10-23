import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the settings icon

import LoginScreen from "./screens/login";
import Home from "./screens/home";
import { KinderWorld } from "./screens/worlds/kinderWorld";
import OneWorld from "./screens/worlds/oneWorld";
import TwoWorld from "./screens/worlds/twoWorld";
import ThreeWorld from "./screens/worlds/threeWorld";
import FourWorld from "./screens/worlds/fourWorld";
import FiveWorld from "./screens/worlds/fiveWorld";
import PreferenceFormUI from "./screens/preference-form";
import PathChooser from "./screens/pathChooser";
import SplashScreen from "./screens/splash-screen";
import "./scripts/global-vars";

import * as K from "./screens/courses/kMath";

const Stack = createStackNavigator();

const App = () => {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000); // Show splash screen for 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      {isShowSplashScreen ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={({ route, navigation }) => ({
              gestureEnabled: false,
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "Back",
              headerBackTitleStyle: {
                fontSize: 20,
                color: "red",
              },
              headerBackImageSource: "./assets/favicon.png",
              headerBackTitleVisible: false,
              headerShown: true, // Show the header for Home screen
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      "Change UI Preferences",
                      "Do you want to change your UI preferences?",
                      [
                        {
                          text: "Cancel",
                          style: "cancel",
                        },
                        {
                          text: "Yes",
                          onPress: () => navigation.navigate("PreferenceForm"),
                        },
                      ],
                      { cancelable: true }
                    );
                  }}
                  style={{ marginRight: 20 }}
                >
                  <Ionicons name="settings-outline" size={24} color="#fff" />
                </TouchableOpacity>
              ),
            })}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerLeft: () => null }}
            />

            <Stack.Screen name="Kindergarten math" component={KinderWorld} />
            <Stack.Screen name="K Home" component={K.MathK} />
            <Stack.Screen name="K1" component={K.K1} />

            <Stack.Screen name="1st grade math" component={OneWorld} />
            <Stack.Screen name="2nd grade math" component={TwoWorld} />
            <Stack.Screen name="3rd grade math" component={ThreeWorld} />
            <Stack.Screen name="4th grade math" component={FourWorld} />
            <Stack.Screen name="5th grade math" component={FiveWorld} />

            <Stack.Screen
              name="PreferenceForm"
              component={PreferenceFormUI}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="PathChooser" component={PathChooser} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
