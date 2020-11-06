import {TextInput} from 'react-native-gesture-handler'
import * as React from 'react'
import  {Component} from 'react';
import {Text,View,Button, Image, } from 'react-native';
import styles   from "./Style/FormLoginStyle";
import AsyncStorage from "@react-native-community/async-storage"
var md5 = require('md5');  
let AuthorizationFlagGlobal = false; // проверка заргестрирован ли пользователь
export class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            dataUserJSON:[],
            usernameStore:'',
            passwordStore:''

        }
    }
    
    Request1cHTTPserv() { 
        let user = this.state.username;
        let userStore = this.state.usernameStore;

        let pass = this.state.password;
        let res = [...md5(pass)].map((d,i)=>(i)%2==0?' '+ d:d).join('').trim();
        let urlСheckLoginHTTP;

        this.state.usernameStore=="null" || this.state.passwordStore=="37 a6 25 9c c0 c1 da e2 99 a7 86 64 89 df f0 bd"  ?urlСheckLoginHTTP = 'http://lkp.real2.ru/real2/hs/LK/auth/' + user + '/' + res
        :urlСheckLoginHTTP = 'http://lkp.real2.ru/real2/hs/LK/auth/' + userStore.replace(/"/g,"") + '/' + this.state.passwordStore
        // alert(urlСheckLoginHTTP)
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
            .then((responseTextJsonLogin) => responseTextJsonLogin.json())
            .then((responseTextJsonLogin) => {
                AsyncStorage.setItem("userData",responseTextJsonLogin.name );
                this.setState({
                    dataUserJSON:responseTextJsonLogin.name
                })
                console.log(this.state.dataUserJSON)
                
            })
            .catch((error) => {
                alert(error);
            })
    }
    
    checkAuthorization() {
        if (AuthorizationFlagGlobal == true) {
            AsyncStorage.setItem("userPass",this.state.password );

            this.state.usernameStore=="null"
            ?this.props.navigation.navigate('Личный кабинет', {
                
                userId: this.state.username
            })
            :this.props.navigation.navigate('Личный кабинет', {
                
                userId: this.state.usernameStore.replace(/"/g,"")
            })

        }
    }
    
    _handlePress() {
        this.checkRequest1cHTTPserv();
    }

    
   async autoLogin(){
        try{
            
            let userData = await AsyncStorage.getItem("userData");
            let userpass = await  AsyncStorage.getItem("userPass");

            let dataName = userData ;
            let strpas = JSON.stringify(userpass,['password']) 
            let  noTabstrpassword = strpas.replace(/"/g,"")

            this.state.passwordStore!=''
            let passwordStoreMd5 = [...md5(noTabstrpassword)].map((d,i)=>(i)%2==0?' '+ d:d).join('').trim()
            this.state.passwordStore = passwordStoreMd5;
            
            let str = JSON.stringify(dataName, ['name']);
            this.state.usernameStore = str;
            console.log((this.state.usernameStore));
             console.log(this.state.passwordStore)
            return this.state.usernameStore
        }
        catch(error){
            console.log(error);
        }
    }

    componentDidMount() {
        this.autoLogin();
        //this.navigateScreenStor()
        setTimeout(() => {
            if( this.state.passwordStore != "" &&  this.state.usernameStore!="null" ){
            this.props.navigation.navigate('Личный кабинет', {  userId: this.state.usernameStore.replace(/"/g,"")} )
                }
            },
        900)
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
                        onChangeText ={username=> this.setState({username})}
                        defaultValue = {  this.state.usernameStore!="null"?this.state.usernameStore.replace(/"/g,""):"" }
                            placeholder={" Введите ФИО" }
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
                                this.componentDidMount()
                                this._handlePress();
                                setTimeout(() => {
                                    this.checkAuthorization();
                                }, 2000);
                                
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