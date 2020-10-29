import {TextInput} from 'react-native-gesture-handler'
import * as React from 'react'
import  {Component} from 'react';
import {Text,View,Button, Image} from 'react-native';
import styles   from "./Style/FormLoginStyle";
var md5 = require('md5');  
let AuthorizationFlagGlobal = false; // проверка заргестрирован ли пользователь
export class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    
    Request1cHTTPserv() { 
        let user = this.state.username;
        let pass = this.state.password;
        let res = [...md5(pass)].map((d,i)=>(i)%2==0?' '+ d:d).join('').trim();
        let urlСheckLoginHTTP = 'http://lkp.real2.ru/real2/hs/LK/auth/' + user + '/' + res;
        return urlСheckLoginHTTP;
    }
    checkRequest1cHTTPserv() {
        fetch(this.Request1cHTTPserv())
            .then((response) => {
                if (!response.ok) {
                    AuthorizationFlagGlobal = false;
                    return alert('Пароль или логин введен не правильно! Повторите попытку');
                } else return this.completedRequest1cHTTPserv();
            })
    
    }
    
    completedRequest1cHTTPserv() {
        AuthorizationFlagGlobal = true;
        fetch(this.Request1cHTTPserv(), {
                method: 'GET'
            })
            .then((responseTextJsonLogin) => responseTextJsonLogin.text())
            .then((responseTextJsonLogin) => {
                let dataToJSON = JSON.parse(responseTextJsonLogin)
                let dataToStrJSON = JSON.stringify(dataToJSON, null, 2);
                console.log(dataToStrJSON);
            })
            .catch((error) => {
                alert(error);
            })
    }
    
    checkAuthorization() {
        if (AuthorizationFlagGlobal == true) {
            this.props.navigation.navigate('Личный кабинет', {
                userId: this.state.username
            });
        }
    }
    
    _handlePress() {
        this.checkRequest1cHTTPserv();
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logo}> 
                    <Image style={styles.imageLogo}source={require('./img/Logo.png')}/>
                </View>

                <View style={styles.blocks}>

                    <View >
                        <Text style={styles.text}>Логин: </Text>
                        <TextInput  
                        style={styles. elementForm} 
                        onChangeText ={ username=> this.setState(
                            {username})}
                            placeholder={" Введите ФИО"}
                        />
                    
                    </View>

                    <View>
                        <Text style={styles.text}>Пароль: </Text>
                        <TextInput 
                        style={styles.elementForm} 
                        secureTextEntry={true}
                        onChangeText = {password=> this.setState({password})}
                        placeholder={" *****"}
                        />
                    </View>

                    <View style={styles.btn}>
                        <Button
                        onPress = {
                            () => {
                        
                                this._handlePress();

                                setTimeout(() => {
                                    this.checkAuthorization();
                                }, 1000);
                        
                            }
                        }
                        title="Войти"                 
                        color="#0E4DA4"
                        accessibilityLabel="send data!"
                        />
                    </View>                  
                </View>
            </View>
        )
    }
}

export default FormLogin;