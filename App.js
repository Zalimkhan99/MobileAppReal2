import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{MainStackNavigator} from './src/screen/MainStackNavigator'

const App = () => {
    return(
        <NavigationContainer>

      <MainStackNavigator></MainStackNavigator>
            
        </NavigationContainer>
        
    )
}



export default App