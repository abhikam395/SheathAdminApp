import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}