import {StyleSheet,} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#708090',
        flexWrap: 'wrap',
        flexDirection:'column',  
    },
    userdata:{
        borderWidth: 2,
        backgroundColor: '#B0E0E6',
        padding: 10,
        margin :10,
        borderRadius: 25,
        color:'black',
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
    commentsBlock:{
        borderWidth:1,    
        backgroundColor: '#fff',
    },
    comments:{
        fontSize: 14,
        color:'#191970',
        fontWeight: 'bold',
        fontFamily: 'times new roman',
    },
    comments1:{
        fontSize: 14,
        color:'#ff0000',
        fontWeight: 'bold',
        fontFamily: 'times new roman',
    },
    comments2:{
        fontSize: 14,
        color:'green',
        fontWeight: 'bold',
        fontFamily: 'times new roman',
    },

    strStyleTask:{
        fontSize: 16,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10,
        backgroundColor: '#fff',
        
    },
    strStyleTaskDescriptoin:{
        fontSize: 16,
        padding:5,
        borderWidth: 2,  
        fontFamily:'Times New Roman',
        fontStyle:'italic',
        height:200,
        marginBottom:10,
        backgroundColor: '#fff',   
    },
    
})
export default styles;