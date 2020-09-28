import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, StyleSheet, View,   } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export class TaskInfo extends Component{
    
    constructor(){
        super()
        this.state={
            dataJson:[],
           
            
        }
    }
    
    
    componentDidMount=() =>{
        const {
            IdUser
        } = this.props.route.params;
        let urlTest = 'http://192.168.250.8:8080/Mobile/hs/MobileApi/tasks/';
        let newurl = urlTest + IdUser; 
        
       // alert (IdUser)
        fetch(newurl)
        .then((response)=>response.json())
        .then((responseJson)=>{   
        this.setState({
            dataJson: responseJson,
            

        })

        })
    .catch((error)=>{
        alert(error)
    })
    }

    render(){ 
        let elemList = this.state.dataJson
       
        let listItem = elemList.map((element,index)=> 
        
    <View key={index} style={styles.userdata} >  
    <TouchableOpacity>
    <Text style={styles.strStyleTask2}  >{" Наименование задачи: "}{element.NameTasks}{'\n'}</Text>
    <Text style={styles.strStyleTask2 }>{' Номер задачи: '} {element.Number}{} {'\n'}</Text>
    <Text style={styles.strStyleTask2}>{' Дата создания: '} {element.DateOfCreation} {'\n'}</Text>
    <Text style={styles.strStyleTask2}>{" Назначение:"} {element.Appointment}{'\n'} </Text>
    <Text style={styles.strStyleTask2}>{" Статус заявки:"} {element.StatusApplications}{'\n'} </Text>
    <Text style={styles.strStyleTask2}>{" Приоритет задания:"} {element.TaskPriority}{'\n'}</Text>
    <Text style={styles.strStyleTask2}>{" Сложность задания:"} {element.ChallengeDifficulty}{'\n'}</Text>
    <Text style={styles.strStyleTask1}>{" Дата изменения :"} {element.DateOfChange}{'\n'} </Text>
    <Text style={styles.strStyleTask1}>{" Количество часов:"} {element.NumberoOfHours}{'\n'} </Text>
    </TouchableOpacity>
    <Text style={styles.strStyleTask1}>{" Срок исполнения:"} {element.PeriodOfExecution}{'\n'}</Text>
    <Text style={styles.strStyleTask1}>{" Дата исполнения:"} {element.DataOfExecution}{'\n'}</Text>
    <Text style={styles.strStyleTask1}>{" Количество сдвинутых сроков:"} {element.NumberOfShiftedTerms}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Исполнитель:"} {element.Executor}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Заказчик:"} {element.Customer}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Подразделение:"} {element.Subdivision}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Куратор:"} {element.Curator}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Куратор1:"} {element.Curator1}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Куратор2:"} {element.Curator2}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Куратор3:"} {element.Curator3}{'\n'}</Text>
    <Text style={styles.strStyleTask3}>{" Описание:"} {element.description}{'\n'}</Text>
    <View style = {styles.commentsBlock}> 
    <Text> {"Комментарии пользователей:"}{'\n'} {element.ComentUser.map((elemen, inkey)=> 
    
    <Text key={inkey} >
    <Text style = {styles.comments}>{"Дата комментария: "}{elemen.DataComment}{'\n'} </Text>
    <Text style = {styles.comments1}>{"Автор: "}{elemen.Author}{'\n'} </Text>
    <Text style = {styles.comments2}>{'Комемнтарий: '}{elemen.Comment}{'\n'}</Text>
        </Text> ) }  </Text> 
    </View>
    </View>
        
    

        )
    return (
    
        
    <ScrollView style={styles.container} > 
    <Text style={styles.headingtext}> {'Список Задач'} </Text>   
        {listItem} 
        
        </ScrollView>
    )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#708090',
        flexWrap: 'wrap',
        flexDirection:'column',
        
        
        
    },
    userdata:{
        
        borderWidth: 2,
        backgroundColor: '#ffff00',
        padding: 10,

        margin :10,
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
    commentsBlock:{
        borderWidth:1,
        

    backgroundColor: '#ced100',
    
    },
    comments:{
        fontSize: 14,
        color:'#fff',
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    },

    comments1:{
        fontSize: 14,
        color:'#ff0000',
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    },
    comments2:{
        fontSize: 14,
        color:'green',
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    },

    strStyleTask:{
        fontSize: 18,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10
       // backgroundColor:'green',
        
        
    },
    strStyleTask1:{
        fontSize: 18,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10,
        backgroundColor: '#ff0000',
        
        
    },
    test:{
        color:'#ffeeff'
    },
    strStyleTask2:{
        fontSize: 18,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10,
        backgroundColor:'#ccff00',
        
        
    },
    strStyleTask3:{
        fontSize: 18,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10,
        backgroundColor:'#a5f1c0',
        
        
    },


})
export default TaskInfo