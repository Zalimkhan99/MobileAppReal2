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
            <View key={index} style={styles.containerChild}>
        <View key={index} style={styles.userdata}>
            <TouchableOpacity
            onPress={() => {
                const { IdUser } = this.props.route.params;
        
                let numberTask = element.Number;
                this.state.numberTaskGl = numberTask;
                
                this.props.navigation.navigate("TaskInfo", { IdTask: numberTask, idUserTaskInfo: IdUser });
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
            <Text style={[
                
                styles.strStyleTaskName
            
            ]}>
                {" Наименование задачи: "}
                {element.NameTasks}
                
            </Text>
            
            <Text style={[
                styles.strStyleTask,
                element.CheckStatus =="green"
                    ?{backgroundColor:"#00FF00"}
                    :{backgroundColor: "#fff"}
            
            ]}>
                {" Статус заявки:"} {element.StatusApplications}
                {"\n"}{" "}
            </Text>
            <Text
                style={[
                styles.strStyleTaskPeriodOfExecution,
                element.CheckColor == "Красный"
                    ? { backgroundColor: "#ff0000" }
                    : { backgroundColor: "#fff" },
                    
                ]}
            >
                {" Срок исполнения:"} {element.PeriodOfExecution}
                {"\n"}
            </Text>
            <Text style={styles.strStyleTask}>
                {" Заказчик:"} {element.Customer}
                {"\n"}
            </Text>
            </TouchableOpacity>
           
        </View>

        <Text style={styles.notification}> {element.notification } </Text>
        
        </View>
        ));
        return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingtext}> {"Список Задач"} </Text>
            <TouchableOpacity
                style={styles.btnUpdata}
                onPress= {()=> {
                    this.componentDidMount();
                }
            }
                >
                    <Text style={styles.textInButton}>Обновить</Text>
                </TouchableOpacity>
            {listItem}
            
         
        </ScrollView>
        );
    }
}


export default TaskPage