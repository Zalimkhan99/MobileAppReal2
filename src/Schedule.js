import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import { View, ColorPropType, Button, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class Schedule extends Component {
    constructor () {
        super()
        this.state={
            dataJson: [],
        }
    }
    componentDidMount=() =>{
        var urlTest = 'http://192.168.0.124/InfoBase/hs/Demo/Registr';
      
        fetch(urlTest)
        .then((response)=>response.json())
        .then((responseJson)=>{
           
          
           this.setState({
            dataJson: responseJson
        })

        })
    .catch((error)=>{
        alert(error)
    })
    }
    
    render(){
 
  
        var elemList = this.state.dataJson
        var listItem = elemList.map((element)=>
            
    <Text>{element.Period} {element.Nomenclature}{element.Price}{element.Partner}</Text> 
             
             
       
        )
    return (
    <View> 
        <ScrollView>{listItem}</ScrollView>
        
             
        </View>
    )
    }

}

export default Schedule