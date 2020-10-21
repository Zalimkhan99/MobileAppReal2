import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormLogin from './src/FormLogin'
import PrivateOffice from './src/PrivateOffice'
import Schedule from './src/Schedule'
import TaskPage from './src/TaskPage';
import TaskInfo from './src/TaskInfo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './src/screen/BottomTabNavigator'
import{MainStackNavigator} from './src/screen/MainStackNavigator'
// Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
/*function SecondComponent() {
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
*/


const App = () => {
    return(
        <NavigationContainer>

      <MainStackNavigator></MainStackNavigator>
            
        </NavigationContainer>
        
    )
}
const PrivatStack = createStackNavigator();


export default App