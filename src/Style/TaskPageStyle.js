import {StyleSheet,} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection:'column', 
        width:500,  
        padding:5, 
    },
    glBlockTask:{
        flexDirection:'row',
    },
    containerChild: {
        flexDirection:'row', 
        borderWidth:1,
        padding:10, 
        marginBottom:5,
        width:347 
    },

    blockTask:{
        flexDirection:'row',
        borderColor:'silver',
        borderBottomWidth:1,
        width:320, 
        
    },
    
    statusAndNumberTaskAndPeriodOfExecution:{
        width:230,
        

    },
    taskName:{
        borderColor:'silver',
        borderBottomWidth:1,
        width:320,
        marginBottom:5,
    },
    customerAndExecutor:{
        color:'silver',
    },
    blockTaskPeriodOfExecution:{
        flexDirection:'row',
    },
    notification:{
        color:'red',
        fontWeight:'bold',
        fontSize:76,
    },


})

export default styles