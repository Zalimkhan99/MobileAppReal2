import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, StyleSheet, View,   } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class TaskInfo extends Component{
    
    constructor() {
        super()
        this.state = {
            dataJson: [],
            idTaskInf: '',
        }
    }

    componentDidMount = () => {
        const { IdTask } = this.props.route.params;
        let urlTaskInfo = "http://192.168.250.8:8080/Mobile/hs/MobileApi/moreinfotask/";
        let urlTaskInfoGet = urlTaskInfo + "" + IdTask;
        this.setState({
            idTaskInf: IdTask,
        });
        fetch(urlTaskInfoGet)
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({
                dataJson: responseJson,
            });
            })
            .catch((error) => {
            alert(error);
            });
        };

        render() {
            let elemList = this.state.dataJson
        
            let listItem = elemList.map((element, index) =>
        
            <View key={index} style={styles.userdata}>  
            <Text style={styles.strStyleTask}  >{" Наименование задачи: "}{element.NameTasks}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{' Дата создания: '} {element.DateOfCreation} {'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Назначение:"} {element.Appointment}{'\n'} </Text>
            <Text style={styles.strStyleTask}>{" Статус заявки:"} {element.StatusApplications}{'\n'} </Text>
            <Text style={styles.strStyleTask}>{" Приоритет задания:"} {element.TaskPriority}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Сложность задания:"} {element.ChallengeDifficulty}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Дата изменения :"} {element.DateOfChange}{'\n'} </Text>
            <Text style={styles.strStyleTask}>{" Количество часов:"} {element.NumberoOfHours}{'\n'} </Text>
            
            <Text style={styles.strStyleTask}>{" Срок исполнения:"} {element.PeriodOfExecution}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Дата исполнения:"} {element.DataOfExecution}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Количество сдвинутых сроков:"} {element.NumberOfShiftedTerms}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Исполнитель:"} {element.Executor}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Заказчик:"} {element.Customer}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Подразделение:"} {element.Subdivision}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Куратор:"} {element.Curator}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Куратор1:"} {element.Curator1}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Куратор2:"} {element.Curator2}{'\n'}</Text>
            <Text style={styles.strStyleTask}>{" Куратор3:"} {element.Curator3}{'\n'}</Text>
            <Text style={styles.strStyleTaskDescriptoin}>{" Описание:"} {element.description}{'\n'}</Text>
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
            <Text style={styles.headingtext}> {'Номер задачи: '+this.state.idTaskInf} </Text>   
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
        backgroundColor: '#B0E0E6',
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
        backgroundColor: '#fff',
    },
    comments:{
        fontSize: 14,
        color:'#191970',
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
        fontSize: 16,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10,
        backgroundColor: '#fff',
        
    },
    strStyleTaskDescriptoin:{
        fontSize: 16,
        padding:5,
        borderWidth: 2,  
        fontFamily:'Times New Roman',
        fontStyle:'italic',
        height:200,
        marginBottom:10,
        backgroundColor: '#fff',   
    },
})
export default TaskInfo