import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, StyleSheet, View,   } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class TaskPage extends Component{
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
            dataJson: responseJson
        })

        })
    .catch((error)=>{
        alert(error)
    })
    }

    render(){ 
        let elemList = this.state.dataJson
        
        let listItem = elemList.map((element,index)=> 

    <Text key={index} style={styles.userdata}>  
    {" Наименование задачи: "}{element.NameTasks}{'\n'}
    {' Номер задачи: '} {element.Number} {'\n'}
    {' Дата создания: '} {element.DateOfCreation} {'\n'}
    {" Назначение:"} {element.Appointment}{'\n'} 
    {" Статус заявки:"} {element.StatusApplications}{'\n'} 
    {" Приоритет задания:"} {element.TaskPriority}{'\n'}
    {" Сложность задания:"} {element.ChallengeDifficulty}{'\n'}  
    {" Дата изменения :"} {element.DateOfChange}{'\n'} 
    {" Количество часов:"} {element.NumberoOfHours}{'\n'} 
    {" Срок исполнения:"} {element.PeriodOfExecution}{'\n'}
    {" Дата исполнения:"} {element.DataOfExecution}{'\n'}
    {" Количество сдвинутых сроков:"} {element.NumberOfShiftedTerms}{'\n'}
    {" Исполнитель:"} {element.Executor}{'\n'}
    {" Заказчик:"} {element.Customer}{'\n'}
    {" Подразделение:"} {element.Subdivision}{'\n'}
    {" Куратор:"} {element.Curator}{'\n'}
    {" Куратор1:"} {element.Curator1}{'\n'}
    {" Куратор2:"} {element.Curator2}{'\n'}
    {" Куратор3:"} {element.Curator3}{'\n'}
    {" Описание:"} {element.description}{'\n'}
    {" Комментарии пользователей:"}{'\n'} {element.ComentUser.map((elemen)=> 
    
    <Text style = {styles.comments}>
        {"Дата комментария: "}{elemen.DataComment}{'\n'} 
        {"Автор: "}{elemen.Author}{'\n'} 
        {'Комемнтарий: '}{elemen.Comment}{'\n'}
        </Text> ) }  
    

    
    </Text> 
        
    

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
        backgroundColor: '#cbcf00',
        flexWrap: 'wrap',
        flexDirection:'column',
        
        
        
    },
    userdata:{
        
        fontSize: 18,
        borderWidth: 2,
        backgroundColor: '#ffff00',
       // padding: 10,
        fontFamily:'Impact',
        fontStyle:'italic',
        margin :10,
        borderRadius: 25,
        color:'black',
        padding:10,  
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
    comments:{
        fontSize: 14,
    backgroundColor: '#ced100',
    color:'#fff',
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    }

})
export default TaskPage