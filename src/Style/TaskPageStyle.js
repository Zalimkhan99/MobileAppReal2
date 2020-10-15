import {StyleSheet,} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#708090',
        flexWrap: 'wrap',
        flexDirection:'column',    
    },
    containerChild: {
       // flex: 1,
       // backgroundColor: '#708090',
        //flexWrap: 'wrap',
        flexDirection:'row',    
    },
    userdata:{   
        width:400,
        display:'flex',
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
    strStyleTaskName:{
        
        fontSize: 16,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:50,
        marginBottom:10,
        backgroundColor: '#fff',
        
    },
    strStyleTask:{
        
        fontSize: 16,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:40,
        marginBottom:10,
        backgroundColor: '#fff',
        
    },
    strStyleTaskPeriodOfExecution:{
        fontSize: 16,
        borderBottomWidth: 2,
        borderTopWidth: 2,  
        fontFamily:'Impact',
        fontStyle:'italic',
        height:30,
        marginBottom:10,
    },
    notification:{
        color:'red',
        fontWeight:'bold',
        fontSize:76,
        

    },
    btnUpdata:{
        marginTop:10,
        alignItems: 'center',
        width: 150,
        
        borderWidth:5,
        borderRadius: 10,
        backgroundColor:'#B0E0E6',
        padding: 5,
        marginLeft:200,
        
    },

})

export default styles