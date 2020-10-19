

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PrivateOffice from './PrivateOffice'
import Schedule from './Schedule'
import {TaskPage}  from './TaskPage';

const Tab = createBottomTabNavigator();
const Screen = () =>{
    return(
       
        <Tab.Navigator>
   
            <Tab.Screen
            name="Личный кабинет"
            component = {PrivateOffice}
            />
            <Tab.Screen
            name = "Schedule"
            component = {Schedule}
            />
            <Tab.Screen
            name = "TaskPage"
            component ={TaskPage}
            />

        </Tab.Navigator>
    
    )
}

export default Screen