import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormLogin from './src/FormLogin'
import PrivateOffice from './src/PrivateOffice'
import Schedule from './src/Schedule'
import {TaskPage}  from './src/TaskPage';
import TaskInfo from './src/TaskInfo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function SecondComponent() {
    return (
        <NavigationContainer>
         
        <Tab.Navigator>
        <Stack.Screen
        name="Логин"
        component = {FormLogin}
        />
        <Tab.Screen
        name="Кабинет"
        component = {PrivateOffice}
        />
          <Tab.Screen
        name = "Задачи"
        component ={TaskPage}
        />
        <Tab.Screen
        name = "График"
        component = {Schedule}
        />
      

    </Tab.Navigator>
    </NavigationContainer>
    );
  }



const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Вход"
                component = {FormLogin}
                />
                <Stack.Screen
                name="Личный кабинет"
                component = {PrivateOffice}
                />
                <Stack.Screen
                name = "График"
                component = {Schedule}
                />
                <Stack.Screen
                name = "Задачи"
                component ={TaskPage}
                />
                <Stack.Screen
                name = "К задачам"
                component ={TaskInfo}
                />
                
            </Stack.Navigator>

            
        </NavigationContainer>
        
    )
}
const PrivatStack = createStackNavigator();


export default App