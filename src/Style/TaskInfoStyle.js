import {StyleSheet,} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#708090',
       // flexWrap: 'wrap',
        //flexDirection:'column',  
    },
    globalBlockMoreTaskInfo:{
        borderWidth: 1,
        borderColor:'#fff',
          backgroundColor: '#fff',
         // padding: 10,
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
        //borderBottomWidth:1,
        //borderColor:'#DCDCDC',
        padding:10,
      //  flexDirection:'column',
       // backgroundColor:'#DCDCDC',
    },
 
    comments:{
        fontSize: 14,
        //color:'#191970',
        //fontWeight: 'bold',
        fontFamily: 'times new roman',
    },
    commentsUsers:{
        fontSize: 12,
        color:'silver',
        
        fontFamily: 'times new roman',
    },
    commentsHead:{
        fontSize: 14,
    //    color:'green',
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
        //height:200,
        marginBottom:10,
        //backgroundColor: '#fff',   
    },
    
})
export default styles;