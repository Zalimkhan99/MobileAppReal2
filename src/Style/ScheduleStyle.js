import {StyleSheet,} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#708090', 
        flexDirection:'column',
    },
    userdata:{
        backgroundColor: '#B0E0E6',
        padding: 10,
        margin :5,
        borderRadius: 25,
    },
    headingtext:{
        fontSize: 46, 
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Impact',
        fontStyle: "italic",
        color: '#fff',
        marginBottom: 20,
    },
    textUserData:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'black',
        height:35,
        marginBottom:10
    },

    textUserData1:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'#ff0000',
        height:35,
        marginBottom:10
    },
    textUserData2:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'green',
        height:35,
        marginBottom:10
    },
    textUserData3:{
        fontSize: 24,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        fontFamily:'Impact',
        fontStyle:'italic',
        color:'#fff',
        height:35,
        marginBottom:10
    }

})
export default styles;