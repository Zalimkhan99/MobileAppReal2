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
            
            <View key={index} style={styles.globalBlockMoreTaskInfo}>  
             <View style={styles.blocksInTasks}>
                        <Text style={[ styles.statusAndNumberTask ]}>{"№"}{this.state.idTaskInf} </Text>
            <Text style={[
                styles.statusAndNumberTask,
                element.CheckStatus =="green"
                    ?{color:"#1BB55C"}
                    : element.CheckStatus == "black"
                    ?{color:"#000"}
                    :element.CheckStatus=="yellow"
                    ?{color:"#FFBB12"}
                    :{color:"#0E4DA4"}
                    
            ]}>
                {element.StatusApplications}
                 
                </Text>
                </View>
            
            <Text style={[styles.taskName ]}>{element.NameTasks}</Text>
            <Text style={styles.customerAndExecutor}>{"Заказчик"}</Text>
            <Text style={{fontSize:12, marginBottom:5}}>{element.Customer}</Text>
            <Text style={styles.customerAndExecutor}>{"Исполнитель"} </Text>
        <Text style={{fontSize:12,
            borderBottomWidth:1,
            width:320,
            borderBottomColor:'silver',
            }}>{element.Executor}</Text>
             <View style={styles.blockTaskPeriodOfExecution}>
                
              <Text style={styles.PeriodOfExecution}>{' Дата создания: '} </Text>
              <Text  style={styles.PeriodOfExecution}>{element.DateOfCreation} </Text>
              </View>
              
                <View style={styles.blockTaskPeriodOfExecution}>
            <Text style={[styles.PeriodOfExecution,
                            element.CheckColor=="Красный"
                            ?{color:"#FF0000"}
                            :element.CheckStatus =="green"
                            ?{color:"#1BB55C"}
                            : element.CheckStatus == "black"
                            ?{color:"#000"}
                            :element.CheckStatus=="yellow"
                            ?{color:"#FFBB12"}
                            :{color:"#0E4DA4"}
                            ]}>{"Срок исполнения:"}</Text>
            <Text style={[
                element.CheckColor=="Красный"
                ?{color:"#FF0000"}
                :element.CheckStatus =="green"
                ?{color:"#1BB55C"}
                : element.CheckStatus == "black"
                ?{color:"#000"}
                :element.CheckStatus=="yellow"
                ?{color:"#FFBB12"}
                :{color:"#0E4DA4"}
                 ]}> {element.PeriodOfExecution} 
            </Text>
        </View>
        <View style={styles.blockTaskPeriodOfExecution}>
                
                <Text style={styles.infoTaskAppointment}>{'Назначение '} </Text>
                <Text  style={styles.infoTaskAppointment}>{element.Appointment} </Text>
                </View>
                <View style={styles.blockTaskPeriodOfExecution}>
                
                <Text style={styles.infoTaskPrioritet}>{'Приоритет'} </Text>
                <Text  style={styles.infoTaskPrioritet}>{element.TaskPriority} </Text>
                </View>
                <View style={styles.blockTaskPeriodOfExecution}>
                
                <Text style={styles.infoTaskPrioritet}>{'Сложность'} </Text>
                <Text  style={styles.infoTaskPrioritet}>{element.ChallengeDifficulty} </Text>
                </View>

                <View style={styles.blockTaskPeriodOfExecution}>
                
                <Text style={styles.infoTaskHourse}>{'Количество часов'} </Text>
                <Text  style={styles.infoTaskHourse}>{element.NumberoOfHours} </Text>
                </View>
                <Text style={styles.strStyleTaskDescriptoin}>{element.description}</Text>

                <View style = {styles.commentsBlock}> 
                <Text  style = {styles.commentsHead}>{"Комментарии"}</Text>
            <Text>{element.ComentUser.map((elemen, inkey)=> 
            
            <Text key={inkey} >
                <View style={{borderWidth:1, borderColor:'#DCDCDC', width:300}}>
            <Text style = {styles.comments}>{elemen.Comment}{'\n'}</Text>
            <Text style = {styles.commentsUsers}>{elemen.Author} </Text>
            <Text style = {styles.commentsUsers}>{elemen.DataComment}{'\n'} </Text>
            </View>
            {'\n'}
                </Text> ) }  </Text> 
            </View>
            <View style={{borderTopWidth:1,borderColor:'silver',borderBottomWidth:1}}>
            <Text style={styles.commentsUsers}>{"Куратор 1"} </Text>
            <Text>{element.Curator} </Text>
            <Text style={styles.commentsUsers}>{"Куратор 2"} </Text>
            <Text>{element.Curator1} </Text>
            <Text style={styles.commentsUsers}>{"Куратор 3"}</Text>
            <Text>{element.Curator2} </Text>
            </View>
            <View style={{borderBottomWidth:1,borderColor:'silver'}}>
            <Text style={styles.commentsUsers}>{" Подразделение:"} </Text>
            <Text>{element.Subdivision}</Text>
            </View>
            <View style={styles.blockTaskPeriodOfExecution}>
            <Text style={styles.PeriodOfExecution}>{"Дата изменения"}</Text>
            <Text style={styles.PeriodOfExecution}>{element.DateOfChange}</Text>
            </View>
           
      
            </View>
        
            )
            return (
                <ScrollView style={styles.container} > 
              
                {listItem} 
                </ScrollView>
            )
        }
    }

export default TaskInfo