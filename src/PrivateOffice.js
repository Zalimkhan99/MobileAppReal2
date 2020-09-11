import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

export class PrivateOffice extends Component{
    render(){
        return(
            <View style= {styles.container} >
                <Text style={styles.logo}>Добро пожаловать!</Text>
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
        fontSize: 60,
        fontFamily: 'Impact',
        fontStyle: "italic"
    },
})
export default PrivateOffice