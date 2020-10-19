import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text,  View,   } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./Style/TaskPageStyle";

export class TaskPage extends Component {
    
    constructor() {

    super();
    this.state = {
        dataJson: [],
        numberTaskGl: "",
        
    };
    }
    componentDidMount = () => {
        const { IdUser } = this.props.route.params;
        let urlTasksGetHTTP = "http://192.168.250.8:8080/Mobile/hs/MobileApi/tasks/"+ IdUser;
        
        fetch(urlTasksGetHTTP)
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
        let elemList = this.state.dataJson;
        
        let listItem = elemList.map((element, index) => (
            <View key={index} style={styles.notificationAndBlockTask}>
        <View key={index} style={styles.globalContainerTask}>
            <TouchableOpacity
            onPress={() => {
                const { IdUser } = this.props.route.params;
        
                let numberTask = element.Number;
                this.state.numberTaskGl = numberTask;
                
                this.props.navigation.navigate("К задачам", { IdTask: numberTask, idUserTaskInfo: IdUser });
                let urlTasksGetHTTP = "http://192.168.250.8:8080/Mobile/hs/MobileApi/tasks/"+ IdUser;
                fetch(urlTasksGetHTTP)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                    dataJson: responseJson,
                    });
                })
                .catch((error) => {
                console.log(error);
                });
                
            }}
            >
        <View style={styles.blocksInTasks}>
            <Text style={[ styles.statusAndNumberTaskAndPeriodOfExecution ]}>{"№"}{element.Number} </Text>
            <Text style={[
                styles.statusAndNumberTaskAndPeriodOfExecution,
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
        <Text style={{fontSize:12}}>{element.Executor}{`\n`}</Text>

        <View style={styles.blockTaskPeriodOfExecution}>
            <Text style={[styles.statusAndNumberTaskAndPeriodOfExecution,
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
           
            </TouchableOpacity>
           
        </View >

        <Text style={styles.notification}> {element.notification } </Text>
        
        </View> //ww
        
        ));
        return (
        <ScrollView style={styles.container}>
          
          
            {listItem}
            
         
        </ScrollView>
        );
    }
}


export default TaskPage