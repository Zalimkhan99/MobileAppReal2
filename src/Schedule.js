import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, StyleSheet, View   } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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

            <View key={index}  style={styles.userdata}>  
                <Text style={styles.textUserData}>{'Дата: '}{element.Data}{'\n'}</Text>
                <Text style={styles.textUserData}>{'День недели: '} {element.DayWeek} {'\n'}</Text>
                <Text style={styles.textUserData2}>{"Начало рабочего дня:"} {element.StartWorkDay}{'\n'} </Text>
                <Text  style={styles.textUserData2}>{"Конец рабочего дня:"} {element.EndWorkDay}{'\n'} </Text>
                <Text  style={styles.textUserData3}>{"Время прихода:"} {element.ArrivalTime}{'\n'}</Text>
                <Text  style={styles.textUserData3}>{"Время ухода:"} {element.CareTime}{'\n'} </Text> 
                <Text  style={styles.textUserData2}>{"Отработанное время:"} {element.WorkedTime}{'\n'} </Text>
                <Text  style={styles.textUserData1}>{"Опоздания:"} {element.Tardiness}{'\n'} </Text>
                <Text  style={styles.textUserData1}> {'Уход раньше времени: '}{element.CareBeforeTimePage}</Text>
            </View > 
    )
    return (
    <ScrollView style={styles.container}> 
        <Text style={styles.headingtext}> {'График рабочего дня'} </Text>   
        <ScrollView style={styles.container}> 
            {listItem} 
        </ScrollView>
    </ScrollView>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#708090', 
        flexDirection:'column',
    },
    userdata:{
        backgroundColor: '#B0E0E6',
        padding: 10,
        margin :5,
        borderRadius: 25,
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
    textUserData:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'black',
        height:35,
        marginBottom:10
    },

    textUserData1:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'#ff0000',
        height:35,
        marginBottom:10
    },
    textUserData2:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'green',
        height:35,
        marginBottom:10
    },
    textUserData3:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'#fff',
        height:35,
        marginBottom:10
    }

})
export default Schedule