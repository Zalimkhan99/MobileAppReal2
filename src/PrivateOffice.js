import React, {
    Component
} from 'react';
import {
    Text,
    View,
    FlatList,
    

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./Style/PrivateOfficeStyle";




export class PrivateOffice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataInfoUser: [], 
        }
    }
    renderItem = ({
        item
    }) => {
        const vseok = <Text style={styles.MotivationText}>Пока норм, ВАЦ) {`\n`}{`\n`}<Text style={styles.MotivationTextLetter}>Но лучше проверь задачник </Text></Text>;
        const pized = <Text  style={styles.MotivationText}>Скоро сбагрят {`\n`}{`\n`} <Text style={styles.MotivationTextLetter}>Советую начать искать новую работу</Text></Text>
        return (
            <View style={styles.container}>
            <Text style={styles.heading}> {item.Login} </Text>
        <Text style={styles.userdataSubdivisionAndPosition}>{item.Subdivision}{`\n`}{item.Position}</Text>
            <Text style={styles.numberOfFines}>Строгих Выговоров:</Text>
            <Text style={styles.punishmentText}>{item.SevereReprimands}</Text>
            <Text style={styles.numberOfFines}>Выговоров:</Text>
            <Text style={styles.punishmentText}>{item.Reprimands}</Text>
            <Text style={styles.numberOfFines}>Предуприждений:</Text>
            <Text style={styles.punishmentText}>{item.Warnings}</Text>

        
            <View style={styles.batteryOfFines}>
                <View style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >26
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}>

                </View>
                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >23
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}></View>
                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >20
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}></View>
                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >15
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}></View>
                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >8
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}></View>
                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >3
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}></View>
                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >0
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}></View>
                
            </View>

            <View  style={styles.MotivationBlock}>
            {item.BalanceWarning<24? vseok: pized}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.btnNavigation}
                onPress= {()=> {
                    this.componentDidMount();
                    this.props.navigation.navigate('Личный кабинет')
                }
            }
                >
                    <Text style={styles.textInButton}>Кабинет</Text>
                </TouchableOpacity>
                               

            <TouchableOpacity
                style = {styles.btnNavigation}
                onPress ={                 
                    ()=>{
                        const {
                            userId
                        } = this.props.route.params;
                        this.props.navigation.navigate('Задачи',{IdUser: userId})
                    }

                }
                >
                <Text style={styles.textInButton}>Задачи</Text>

                </TouchableOpacity>    
                <TouchableOpacity
                style = {styles.btnNavigation}
                onPress ={                 
                    ()=>{
                        const {
                            userId
                        } = this.props.route.params;
                        this.props.navigation.navigate('График',{IdUser: userId})
                    }

                }
                >
                <Text style={styles.textInButton} >График</Text>
                </TouchableOpacity>   
                </View>
            
                
            </View>
        )


    }
    componentDidMount() {
        const {
            userId
        } = this.props.route.params;
        let urlUserGetInfo = 'http://192.168.250.8:8080/Mobile/hs/MobileApi/users/'+ userId;
        
        fetch(urlUserGetInfo, {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    dataInfoUser: responseJSON.DataUser
                })
                
            })
            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        /*const {
            userId
        } = this.props.route.params;*/
        return (
            <View  style= {styles.container}>
                <FlatList
                keyExtractor={item=> item.Login}
                data={this.state.dataInfoUser}
                renderItem = {this.renderItem}
                
                />       
            </View>
        )
    }
}


export default PrivateOffice