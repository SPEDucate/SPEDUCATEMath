import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login'; // Adjust path if needed
import Home from '../screens/home'; // Adjust path if needed
import KMath from '../screens/kMath'; // Adjust path if needed
import OneMath from '../screens/1Math'; // Adjust path if needed
import TwoMath from '../screens/2Math'; // Adjust path if needed
import ThreeMath from '../screens/3Math'; // Adjust path if needed
import FourMath from '../screens/4Math'; // Adjust path if needed
import FiveMath from '../screens/5Math'; // Adjust path if needed

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
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