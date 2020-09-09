import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {
    TextInput
} from 'react-native-gesture-handler'


export class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',

        }
    }
    _handlePress() {

        var urlAuthHTTP = 'http://192.168.0.117/InfoBase/hs/Demo/auth/';
        var user = this.state.username;
        var pass = this.state.password;
        var urlСheckLoginHTTP = urlAuthHTTP + '' + user + '/' + pass;

        fetch(urlСheckLoginHTTP)
            .then(function (response) {
                if (!response.ok) {
                    alert("Логин или пароль введен не правильно")
                } else {
                    fetch(urlСheckLoginHTTP, {
                            method: 'GET'
                        })

                        .then((responseTextJsonLogin) => responseTextJsonLogin.text())
                        .then((responseTextJsonLogin) => {
                            var dataToJSON = JSON.parse(responseTextJsonLogin)
                            var dataToStrJSON = JSON.stringify(dataToJSON, null, 2);
                            alert(dataToStrJSON);
                        })

                        .catch((error) => {
                            alert(error);
                        })
                }

            })
    }

    render() {
        return (

            <View style={styles.container}>
            <View style={styles.blocks}>
           
                <View style={styles.logo}> 
                    <Text style={styles.logo}>Real 2 </Text>
                </View>
    
                <View >
                    <Text style={styles.text}>Логин: </Text>
                    <TextInput  
                    style={styles. elementForm} 
                    onChangeText ={ username=> this.setState(
                      {username})}
                    
                    />
    
               
                </View>
    
                <View>
                    <Text style={styles.text}>Пароль: </Text>
                    <TextInput 
                    style={styles.elementForm} 
                    secureTextEntry={true}
                    onChangeText = {password=> this.setState({password})}
                    />
                </View>
    
                <View style={styles.btn}>
                <Button
                onPress={()=> this._handlePress()}
                title="Войти"
                style = {styles.button}
                color="#000"
                accessibilityLabel="send data!"
                />
                </View>                  
            </View>
            
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
    elementForm: {
        width: 300,
        height: 42,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 16,
        padding: 0

    },

    text: {
        fontSize: 20,
        marginRight: 0,
        padding: 0
    },
    logo: {
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: '#FFFF00',
        color: '#000',
        fontSize: 100,
        fontFamily: 'Impact',
        fontStyle: "italic"
    },
    btn: {
        marginTop: 10
    },

});