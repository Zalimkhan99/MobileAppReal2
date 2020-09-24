import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, StyleSheet,   } from 'react-native';
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
        const {
            IdUser
        } = this.props.route.params;
        alert (IdUser)
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
           
    <Text  style={styles.userdata}>  
    {' Дата: '}{element.Period}{'\n'}
    {' Номенклатура: '} {element.Nomenclature} {'\n'}
    {" Цена:"} {element.Price}{'\n'} 
    {'Партнер: '}{element.Partner}
    </Text> 
    
             
             
       
        )
    return (
      <ScrollView style={styles.container}> 
          <Text style={styles.headingtext}> {'Цены поставщиков'} </Text>   
     <ScrollView style={styles.container} horizontal={true}> 
    
         {listItem} 
        
        </ScrollView>
        </ScrollView>
    )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cbcf00',
        flexWrap: 'wrap',
        flexDirection:'column',
        
    },
    userdata:{
        
        fontSize: 24,
        borderWidth: 2,
        backgroundColor: '#ffff00',
       // padding: 10,
        fontFamily:'Impact',
        fontStyle:'italic',
        margin :5,
        borderRadius: 25,
        color:'black',
    },
    headingtext:{
        fontSize: 46, 
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Impact',
        fontStyle: "italic",
        color: '#fff',
        marginBottom: 20,
    },

})
export default Schedule