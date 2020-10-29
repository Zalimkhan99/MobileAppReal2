import 'react-native-gesture-handler';
import {Component} from 'react';
import * as React from 'react'
import {  Text, View, Image   } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./Style/ScheduleStyle";
import btnStyles from "./Style/BottomNavigatuinStyle";
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
        let urlScheduleGet = `http://lkp.real2.ru/real2/hs/LK/Schedule/${IdUser}`;
        console.log(urlScheduleGet)
    
        fetch(urlScheduleGet)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataJson: responseJson
                })
            })
            .catch((error) => {
                console.log(error)
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
    <View style={styles.globalContainer}>  

        <ScrollView style={styles.container}> 
            {listItem} 
        </ScrollView>

        <View style={btnStyles.buttonContainer}>
            <TouchableOpacity
                style={btnStyles.btnNavigation}
                onPress= {()=> {
                    this.componentDidMount();
                    this.props.navigation.navigate('Личный кабинет')
                }}>
                    <Image style={btnStyles.imageNavigationBtn} source={require('./img/Destination1.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                style = {btnStyles.btnNavigation}
                onPress ={                 
                    ()=>{
                        const {
                            IdUser
                        } = this.props.route.params;
                        this.props.navigation.navigate('Задачи',{IdUser: IdUser})
                    }}>
                    <Image style={btnStyles.imageNavigationBtn}source={require('./img/Destination2.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                    style = {btnStyles.btnNavigation}
                    onPress ={                 
                    ()=>{
                    //const { IdUser } = this.props.route.params;
                    this.props.navigation.navigate('График')
                    }}>
                    <Image style={btnStyles.imageNavigationBtn}source={require('./img/Destination3.png')}/>
            </TouchableOpacity>   
        </View>
    </View>
    )
    }
}


export default Schedule