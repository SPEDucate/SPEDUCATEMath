import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/login";
import Home from "../screens/home";
import KinderWorld from "../screens/worlds/kinderWorld";
import OneWorld from "../screens/worlds/oneWorld";
import TwoWorld from "../screens/worlds/twoWorld";
import ThreeWorld from "../screens/worlds/threeWorld";
import FourWorld from "../screens/worlds/fourWorld";
import FiveWorld from "../screens/worlds/fiveWorld";
import PreferenceFormUI from "../screens/preference-form";
import PathChooser from "../screens/pathChooser";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Kindergarten math"
          component={KinderWorld}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="1st grade math"
          component={OneWorld}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="2nd grade math"
          component={TwoWorld}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="3rd grade math"
          component={ThreeWorld}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="4th grade math"
          component={FourWorld}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="5th grade math"
          component={FiveWorld}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PreferenceForm"
          component={PreferenceFormUI}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PathChooser"
          component={PathChooser}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
