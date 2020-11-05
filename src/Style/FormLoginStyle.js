import * as React from 'react'
import {StyleSheet,} from 'react-native';
const  styles = StyleSheet.create({
    container: {
        flex: 1,
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
        padding: 5,
        color:'#000',
    },

    text: {
        fontSize: 20,
        marginRight: 0,
        padding: 0,
        color:'#000',
    },
    logo: {
        marginBottom: 100,
    },
    btn: {
        backgroundColor:'#0E4DA4',
        position: 'relative',
        height: 39,
        top: 20,
    
    },
    imageLogo:{
        top:80,
        position: 'relative',
        width: 285,
        height: 100,
        justifyContent: 'center',
    }

});
export default styles;