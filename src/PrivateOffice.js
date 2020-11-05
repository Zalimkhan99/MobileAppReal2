import React, {
    Component
} from 'react';
import {
    Text,
    View,
    FlatList,
    Image
    

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./Style/PrivateOfficeStyle";
import btnStyles from "./Style/BottomNavigatuinStyle";

export class PrivateOffice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataInfoUser: [], 
        }
    }
    
    componentDidMount() {
        const {
            userId
        } = this.props.route.params;
        let urlUserGetInfo = 'http://lkp.real2.ru/real2/hs/LK/users/'+ userId;
        console.log(urlUserGetInfo)
        
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

    renderItem = ({
        item
    }) => {
        const vseok = <Text style={styles.MotivationText}>Пока норм) {`\n`}{`\n`}<Text style={styles.MotivationTextLetter}>Но лучше проверь задачник </Text></Text>;
        const pizdec = <Text  style={styles.MotivationText}>Держись {`\n`}{`\n`} <Text style={styles.MotivationTextLetter}>Советую изучить положение о мотивации</Text></Text>
        return (
        <View style={styles.container}>

            <Text style={styles.heading}>{item.Login} </Text>
            <Text style={styles.userdataSubdivisionAndPosition}>{item.Subdivision}{`\n`}{item.Position}</Text>
            <Text style={styles.numberOfFines}>Строгих Выговоров:</Text>
            <Text style={styles.punishmentText}>{item.SevereReprimands}</Text>
            <Text style={styles.numberOfFines}>Выговоров:</Text>
            <Text style={styles.punishmentText}>{item.Reprimands}</Text>
            <Text style={styles.numberOfFines}>Предупреждений:</Text>
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
                ]}>
                </View>

                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >20
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}>
                </View>

                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >15
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}>
                </View>

                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >8
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}>
                </View>

                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >3
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}>
                </View>

                <View  style={[
                    styles.indicatorBattery,
                    (+item.BalanceWarning) >0
                    ?{backgroundColor:"#FF1744"}
                    :{backgroundColor: "#D3D3D3"}
                ]}>
                </View>
            </View>

            <View  style={styles.MotivationBlock}>
            {item.BalanceWarning<24? vseok: pizdec}
            </View>
                
        </View>
        )


    }


    render() {

        return (
        <View  style= {styles.container}>
            <FlatList
                keyExtractor={item=> item.Login}
                data={this.state.dataInfoUser}
                renderItem = {this.renderItem}/> 

            <View style={btnStyles.buttonContainer}>
                <TouchableOpacity
                    style={btnStyles.btnNavigation}
                    onPress= {()=> {
                    this.componentDidMount();
                    this.props.navigation.navigate('Личный кабинет')
                        }
                    }>
                    <Image style={btnStyles.imageNavigationBtn}source={require('./img/Destination1.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {btnStyles.btnNavigation}
                    onPress ={                 
                    ()=>{
                    const {userId} = this.props.route.params;
                    this.props.navigation.navigate('Задачи',{IdUser: userId})
                        }
                    }
                    >
                    <Image style={btnStyles.imageNavigationBtn}source={require('./img/Destination2.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style = {btnStyles.btnNavigation}
                    onPress ={                 
                    ()=>{
                    const {userId} = this.props.route.params;
                    this.props.navigation.navigate('График',{IdUser: userId})
                        }
                    }>
                    <Image style={btnStyles.imageNavigationBtn}source={require('./img/Destination3.png')}/>
                </TouchableOpacity>   
            </View>    
        </View>
        )
    }
}


export default PrivateOffice