import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/login";
import Home from "../screens/home";
import KMath from "../screens/courses/kMath";
import OneMath from "../screens/courses/1Math";
import TwoMath from "../screens/courses/2Math";
import ThreeMath from "../screens/courses/3Math";
import FourMath from "../screens/courses/4Math";
import FiveMath from "../screens/courses/5Math";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for Login screen
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide header for Home screen
        />
        <Stack.Screen
          name="Kindergarten math"
          component={KMath}
          options={{ headerShown: false }} // Hide header for Kindergarten math screen
        />
        <Stack.Screen
          name="1st grade math"
          component={OneMath}
          options={{ headerShown: false }} // Hide header for 1st grade math screen
        />
        <Stack.Screen
          name="2nd grade math"
          component={TwoMath}
          options={{ headerShown: false }} // Hide header for 2nd grade math screen
        />
        <Stack.Screen
          name="3rd grade math"
          component={ThreeMath}
          options={{ headerShown: false }} // Hide header for 3rd grade math screen
        />
        <Stack.Screen
          name="4th grade math"
          component={FourMath}
          options={{ headerShown: false }} // Hide header for 4th grade math screen
        />
        <Stack.Screen
          name="5th grade math"
          component={FiveMath}
          options={{ headerShown: false }} // Hide header for 5th grade math screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
