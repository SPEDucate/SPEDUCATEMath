import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login';
import Home from './home';
import KinderWorld from './kinderWorld';
import OneWorld from './oneWorld';
import TwoWorld from './twoWorld';
import ThreeWorld from './threeWorld';
import FourWorld from './fourWorld';
import FiveWorld from './fiveWorld';
import PreferenceFormUI from './preference-form';
import PathChooser from './pathChooser';  

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
