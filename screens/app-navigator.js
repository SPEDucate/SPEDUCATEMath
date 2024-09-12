import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login';
import Home from '../screens/home';
import KinderWorld from '../screens/kinderWorld';
import OneWorld from '../screens/oneWorld';
import TwoWorld from '../screens/twoWorld';
import ThreeWorld from '../screens/threeWorld';
import FourWorld from '../screens/fourWorld';
import FiveWorld from '../screens/fiveWorld';
import QuestionUI from '../screens/question'; // Import the QuestionUI component
import KMath from './courses/kMath';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={ KinderWorld}
          options={{ headerShown: false }} // Hide header for Login screen
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide header for Home screen
        />
        <Stack.Screen
          name="KinderWorld"
          component={KinderWorld}
          options={{ headerShown: false }} // Hide header for KinderWorld screen
        />
        <Stack.Screen
          name="OneWorld"
          component={OneWorld}
          options={{ headerShown: false }} // Hide header for OneWorld screen
        />
        <Stack.Screen
          name="TwoWorld"
          component={TwoWorld}
          options={{ headerShown: false }} // Hide header for TwoWorld screen
        />
        <Stack.Screen
          name="ThreeWorld"
          component={ThreeWorld}
          options={{ headerShown: false }} // Hide header for ThreeWorld screen
        />
        <Stack.Screen
          name="FourWorld"
          component={FourWorld}
          options={{ headerShown: false }} // Hide header for FourWorld screen
        />
        <Stack.Screen
          name="FiveWorld"
          component={FiveWorld}
          options={{ headerShown: false }} // Hide header for FiveWorld screen
        />
        <Stack.Screen
          name="QuestionUI"
          component={QuestionUI} // Add QuestionUI component
          options={{ headerShown: false }} // Hide header for QuestionUI screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
