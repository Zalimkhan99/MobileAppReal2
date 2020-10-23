import {StyleSheet,} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    globalBlockMoreTaskInfo:{
        borderWidth: 1,
        borderColor:'#fff',
        backgroundColor: '#fff',
        width:340,
        margin :10,
        color:'black',
    },

    blocksInTasks:{
        flexDirection:'row',
        width:320, 
    },

    statusAndNumberTask:{
        width:230,
    },
    taskName:{
        borderColor:'silver',
        borderBottomWidth:1,
        borderTopWidth:1,
        width:320,
        marginBottom:5,
    },
    customerAndExecutor:{
        color:'silver',
    },
    blockTaskPeriodOfExecution:{
        flexDirection:'row',
    },
    PeriodOfExecution:{
        marginTop:6,
        width:240,
        

    },
    infoTaskAppointment:{
        marginTop:6,
        width:192,
        

    },
    infoTaskPrioritet:{
        marginTop:6,
        width:259,
    },

    infoTaskHourse:{
        marginTop:6,
        width:290,
    },

    commentsBlock:{
        padding:10,
    },
    comments:{
        fontSize: 14,
        fontFamily: 'times new roman',
    },
    commentsUsers:{
        fontSize: 12,
        color:'silver',
        fontFamily: 'times new roman',
    },
    commentsHead:{
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Inter',
        marginBottom:20,
    },

   
    strStyleTaskDescriptoin:{
        fontSize: 14,
        padding:5,
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        fontFamily: 'Inter',
        borderColor:'silver',
        marginBottom:10,
    },
    
})
export default styles;