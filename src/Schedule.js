import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, StyleSheet, View   } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./Style/ScheduleStyle";
export class Schedule extends Component {
    constructor () {
        super()
        this.state={
            dataJson: [],
        }
    }

    componentDidMount = () => {
        const {
            IdUser
        } = this.props.route.params;
        let urlScheduleGet = 'http://192.168.250.8:8080/Mobile/hs/MobileApi/Schedule/'+ IdUser;
        
    
        fetch(urlScheduleGet)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataJson: responseJson
                })
            })
            .catch((error) => {
                alert(error)
            })
    }
    
    render(){ 
        
        let elemList = this.state.dataJson
        let listItem = elemList.map((element, index)=> 
            
            <View key={index}  style={[
                styles.globalBlockSchedule,
                element.Tardiness !=""||element.CareBeforeTimePage!="0"
                ?{borderColor:"red"}
                :{borderColor:"green"}
            ]}>  
                <View style={styles.blockCurrentDate}>
                <Text style={styles.currentDate}>{element.Data} </Text>
                <Text style={styles.currentDate}>{element.DayWeek} </Text>
                </View>
                <View style={styles.blockCurrentDate}>
                <Text style={styles.UserSchedule}>{"График"} </Text>
                <Text style={styles.UserSchedule}>{element.StartWorkDay} - {element.EndWorkDay}</Text>
                </View>
                <View style={styles.blockCurrentDate}>
                <Text  style={styles.WorkedTime}>{"Рабочее время"} </Text>
                <Text style={styles.WorkedTime}>{element.ArrivalTime} - {element.CareTime}</Text>
                </View>
                <Text style={[{color:"silver"}]}>{"Отработано"} {element.WorkedTime} </Text>
                <Text  style={
                    [styles.Warning,
                        element.Tardiness==""
                        ? {display:'none'}
                        :{}
                ]}>
                    {"Опоздание"} {element.Tardiness}</Text>
                <Text  style={
                    [styles.Warning,
                        element.CareBeforeTimePage=="0"
                        ? {display:'none'}
                        :{}
                ]}>{'Автоуход'} </Text>
            </View > 
    )
    return (
    <ScrollView style={styles.container}> 
        
      
        <ScrollView style={styles.container}> 
            {listItem} 
            

        </ScrollView>
    </ScrollView>
    )
    }
}


export default Schedule