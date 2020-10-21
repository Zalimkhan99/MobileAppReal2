import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import TaskPage from '../TaskPage';
import Schedule from '../Schedule';
import PrivateOffice from '../PrivateOffice';
import {MainStackNavigator,LoginIn} from './MainStackNavigator';
import FormLogin from '../FormLogin'
const Tab = createBottomTabNavigator();
 const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen />
        <Tab.Screen name="HOME" component={MainStackNavigator}  ></Tab.Screen>
        <Tab.Screen name="TEST" component={LoginIn}  ></Tab.Screen>
      </Tab.Navigator>
    );
  };

  const MainTabs = createSwitchNavigator({
    Home:{
      screen: PrivateOffice,
    },
    Task:{
      screen: TaskPage,
    },
    Schedule:{
      screen:Schedule,
    }
  })
  
  export default createAppContainer (MainTabs);