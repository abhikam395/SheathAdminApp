import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AddProductScreen from '../screens/product/AddProductScreen';
import { BLUE } from '../../utils/commoncolors';

const Stack = createStackNavigator();

export default function () {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home">
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
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="AddProduct"
                    options={{
                        title: 'Add Product', 
                        headerTintColor: 'white',
                        headerStyle: {backgroundColor: BLUE}
                    }}
                    component={AddProductScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}