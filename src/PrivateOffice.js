
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,


} from 'react-native';


export class PrivateOffice extends Component{
    constructor() {
        super()
        
    }
    _test(){
        const {userId} = this.props.route.params;
        var urlInfoUserHTTP = 'http://192.168.0.138/InfoBase/hs/Demo/user/';
        var urlUserGetInfo = urlInfoUserHTTP + userId;
        fetch(urlUserGetInfo, {
            method: 'GET'
        })

        .then((responseTextJsonInfoUser) => responseTextJsonInfoUser.text())
        .then((responseTextJsonInfoUser) => {
            var dataToJSON = JSON.parse(responseTextJsonInfoUser)
            var dataToStrJSON = JSON.stringify(dataToJSON, null, 2);
            alert(dataToStrJSON);
        })

        .catch((error) => {
            alert(error);
        })
        
      
    }

    render(){
        const {userId} = this.props.route.params;
        return(
            <View style= {styles.container} >
                <Text style={styles.logo}>Добро пожаловать, {userId}!</Text>
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