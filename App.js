import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormLogin from './src/FormLogin'
import PrivateOffice from './src/PrivateOffice'
import Schedule from './src/Schedule'
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
                <Stack.Screen
                name = "Schedule"
                component = {Schedule}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App