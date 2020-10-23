import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FormLogin from '../FormLogin'
import PrivateOffice from '../PrivateOffice'
import Schedule from '../Schedule'
import TaskPage from '../TaskPage';
import TaskInfo from '../TaskInfo';
const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return(
       
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
        
    )
}


export {MainStackNavigator}