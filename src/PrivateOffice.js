import React, {
    Component
} from 'react';
import {

    StyleSheet,
    Text,
    View,
    FlatList,
    

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    
        return (
            <View style={styles.container}>
            <Text style={styles.userdata}>Сотрудник: {item.Login} </Text>
            <Text style={styles.userdata}>Предуприждений: {item.Warnings}</Text>
            <Text style={styles.userdata}>Выговоров: {item.Reprimands}</Text>
            <Text style={styles.userdata}>Строгих Выговоров: {item.SevereReprimands}</Text>
            <Text style={styles.userdata}>Должность: {item.Position}</Text>
            <Text style={styles.userdata}>Подразделение: {item.Subdivision}</Text>
            <Text style={styles.userdata}>Табельный номер: {item.PersonnelNumber}</Text>     
                <TouchableOpacity
                style={styles.btnUpdata}
                onPress= {()=> {
                    this.componentDidMount();
                }
            }
                >
                    <Text style={styles.textInButton}>Обновить</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.btnUpdata}
                onPress ={                 
                    ()=>{
                        const {
                            userId
                        } = this.props.route.params;
                        this.props.navigation.navigate('Schedule',{IdUser: userId})
                    }

                }
                >
                <Text style={styles.textInButton} >График работы</Text>
                </TouchableOpacity>   

            <TouchableOpacity
                style = {styles.btnUpdata}
                onPress ={                 
                    ()=>{
                        const {
                            userId
                        } = this.props.route.params;
                        this.props.navigation.navigate('TaskPage',{IdUser: userId})
                    }

                }
                >
                <Text style={styles.textInButton} >Список Задач</Text>

                </TouchableOpacity>         
            
                
            </View>
        )


    }
    componentDidMount() {
        const {
            userId
        } = this.props.route.params;
        let urlInfoUserHTTP = 'http://192.168.250.8:8080/Mobile/hs/MobileApi/users/';
        let urlUserGetInfo = urlInfoUserHTTP + userId;
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
                <Text style={styles.heading}>Добро пожаловать, в личный кабинет!</Text>
                <FlatList
                keyExtractor={item=> item.Login}
                data={this.state.dataInfoUser}
                renderItem = {this.renderItem}
                
                />         
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#708090',
        justifyContent: 'center',
    },
    blocks: {
        flexDirection: 'column',

    },
    
    heading: {
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        fontSize: 36,
        fontFamily: 'Impact',
        fontStyle: "italic"
    },
    userdata:{
        fontSize: 24,
        borderWidth: 2,
        backgroundColor: '#B0E0E6',
        padding: 10,
        fontFamily:'Impact',
        fontStyle:'italic',
        margin :1,
        borderRadius: 25,
        color:'black',
        width:400
    },
    btnUpdata:{
        marginTop:10,
        alignItems: 'center',
        width: 150,
        
        borderWidth:5,
        borderRadius: 10,
        backgroundColor:'#B0E0E6',
        padding: 5,
        
    },
    textInButton:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
    
})
export default PrivateOffice