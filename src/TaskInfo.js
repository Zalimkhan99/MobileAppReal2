import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, View,   } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from "./Style/TaskInfoStyle";
export class TaskInfo extends Component{
    
    constructor() {
        super()
        this.state = {
            dataJson: [],
            idTaskInf: '',
            idUserTaskInfo: '',
        }
    }

    componentDidMount = () => {
        const { IdTask } = this.props.route.params;
        const { idUserTaskInfo } = this.props.route.params;
        
        let urlTaskInfoGet = "http://192.168.250.8:8080/Mobile/hs/MobileApi/moreinfotask/"+ "" + IdTask+"/"+idUserTaskInfo;
       // alert(urlTaskInfoGet);
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
            console.log(error);
            });
        };
        
        render() {
            
            let elemList = this.state.dataJson
            
            let listItem = elemList.map((element, index) =>
            
            <View key={index} style={styles.userdata}>  
            <Text style={styles.strStyleTask}  >{" Наименование задачи: "}{element.NameTasks} {'\n'}</Text>
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

export default TaskInfo