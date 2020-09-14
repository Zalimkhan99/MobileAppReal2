import {
    TextInput
} from 'react-native-gesture-handler'
import * as React from 'react'
import  {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button, 
} from 'react-native';

var authtest = false; // проверка заргестрирован ли пользователь
export class FormLogin extends Component {



    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    
    _handlePress() {

        var urlAuthHTTP = 'http://192.168.0.138/InfoBase/hs/Demo/auth/';
        var user = this.state.username;
        var pass = this.state.password;
        var urlСheckLoginHTTP = urlAuthHTTP + '' + user + '/' + pass;

        fetch(urlСheckLoginHTTP)
            .then(function (response) {
                if (!response.ok) {
                    authtest = false;
                    alert("Логин или пароль введен не правильно")
                } else {
                    authtest = true;
                    fetch(urlСheckLoginHTTP, {
                            method: 'GET'
                        })

                        .then((responseTextJsonLogin) => responseTextJsonLogin.text())
                        .then((responseTextJsonLogin) => {
                            var dataToJSON = JSON.parse(responseTextJsonLogin)
                            var dataToStrJSON = JSON.stringify(dataToJSON, null, 2);
                            console.log(dataToStrJSON);
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
                        onPress={
                            ()=> {
                                this._handlePress();
                                    setTimeout(()=>{
                                        if(authtest==true){
                                            alert(this.state.username);
                                            this.props.navigation.navigate('Личный кабинет',{userId: this.state.username });
                                            
                                        
                                            }
                                    },3000);        
                                
                            }
                        }
                        title="Войти"
                       
                        color="#000"
                        accessibilityLabel="send data!"
                        />
                    </View>                  
                </View>
            </View>

        )
    }
onVerify = ()=>{
    onVerify(this.state.username, this.state.password)
}
}


// подключение стилей
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cbcf00',
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
        padding: 0,
        color:'white'

    },

    text: {
        fontSize: 20,
        marginRight: 0,
        padding: 0,
        color:'#ffffff'
    },
    logo: {
        fontWeight: 'bold',
        marginBottom: 0,
        color: '#fff',
        fontSize: 100,
        fontFamily: 'Impact',
        fontStyle: "italic",
        
    },
    btn: {
        marginTop: 10
    },

});

export default FormLogin;