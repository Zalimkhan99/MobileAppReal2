import React, {
    Component
} from 'react';
import {

    StyleSheet,
    Text,
    View,
    Button,
    FlatList,

} from 'react-native';



export class PrivateOffice extends Component {
    constructor() {
        super()
        this.state = {
            dataInfoUser: []
        }

    }
    renderItem = ({
        item
    }) => {
        return (

            <View>
            <Text style={styles.logo}>Имя: {item.Login} </Text>
            <Text style={styles.logo}>Предупреждений: {item.Warning}</Text>
            </View>
        )


    }
    componentDidMount() {
        const {
            userId
        } = this.props.route.params;
        var urlInfoUserHTTP = 'http://192.168.0.138/InfoBase/hs/Demo/user/';
        var urlUserGetInfo = urlInfoUserHTTP + userId;
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
        const {
            userId
        } = this.props.route.params;
        return (
            <View  style= {styles.container}>
                <Text style={styles.logo}>Добро пожаловать, {userId}!</Text>
                <FlatList
        
                data={this.state.dataInfoUser}
                renderItem = {this.renderItem}
                />

                <Button 
                onPress= {()=> {
                    this._test();
                }
            }
            title="Test"
            accessibilityLabel="test"
                />
             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blocks: {
        flexDirection: 'column',

    },
    logo: {
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: '#FFFF00',
        color: '#000',
        fontSize: 40,
        fontFamily: 'Impact',
        fontStyle: "italic"
    },
})
export default PrivateOffice