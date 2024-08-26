import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login';
import Home from '../screens/home';
import KMath from '../screens/courses/kMath';
import OneMath from '../screens/courses/1Math';
import TwoMath from '../screens/courses/2Math';
import ThreeMath from '../screens/courses/3Math';
import FourMath from '../screens/courses/4Math';
import FiveMath from '../screens/courses/5Math';
import PreferenceFormUI from '../screens/preference-form';  // Import the new form

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
          component={KMath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="1st grade math"
          component={OneMath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="2nd grade math"
          component={TwoMath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="3rd grade math"
          component={ThreeMath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="4th grade math"
          component={FourMath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="5th grade math"
          component={FiveMath}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreferenceForm" // Add the Preference Form screen
          component={PreferenceFormUI}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
