// navigation/AppNavigator.js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginNew from '../screens/loginNew'; // Adjust path if needed
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
                <Stack.Screen name="Login" component={LoginNew} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Kindergarten math" component={KMath} />
                <Stack.Screen name="1st grade math" component={OneMath} />
                <Stack.Screen name="2nd grade math" component={TwoMath} />
                <Stack.Screen name="3rd grade math" component={ThreeMath} />
                <Stack.Screen name="4th grade math" component={FourMath} />
                <Stack.Screen name="5th grade math" component={FiveMath} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
