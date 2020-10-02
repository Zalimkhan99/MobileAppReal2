import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, StyleSheet, View,   } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

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
        
        setInterval(()=> fetch(urlTasksGetHTTP)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
            dataJson: responseJson,
            });
        })
        .catch((error) => {
            alert(error);
        }),1500);
    };
    render() {
        let elemList = this.state.dataJson;
        let listItem = elemList.map((element, index) => (
        <View key={index} style={styles.userdata}>
            <TouchableOpacity
            onPress={() => {
                let numberTask = element.Number;
                this.state.numberTaskGl = numberTask;
                this.props.navigation.navigate("TaskInfo", { IdTask: numberTask });
            }}
            >
            <Text style={styles.strStyleTask}>
                {" Наименование задачи: "}
                {element.NameTasks}
                {"\n"}
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
        ));
        return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingtext}> {"Список Задач"} </Text>
            {listItem}
        </ScrollView>
        );
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
    strStyleTaskPeriodOfExecution:{
        fontSize: 16,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10,
    },



})
export default TaskPage