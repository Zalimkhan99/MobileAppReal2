import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormLogin from './src/FormLogin'
import PrivateOffice from './src/PrivateOffice'
//import {StackNavigator } from '@react-navigation/native'
//import { createStackNavigator, createAppContainer } from 'react-navigation';
const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component = {FormLogin}
                />
                <Stack.Screen
                name="Личный кабинет"
                component = {PrivateOffice}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App