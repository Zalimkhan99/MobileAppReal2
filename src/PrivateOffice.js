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
    
        return (
            <View style={styles.container}>
            <Text style={styles.heading}> {item.Login} </Text>
        <Text style={styles.userdataSubdivisionAndPosition}>{item.Subdivision}{`\n`}{item.Position}</Text>
            <Text style={styles.userdata}>Предуприждений: {item.Warnings}</Text>
            <Text style={styles.userdata}>Выговоров: {item.Reprimands}</Text>
            <Text style={styles.userdata}>Строгих Выговоров: {item.SevereReprimands}</Text>
           
            
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