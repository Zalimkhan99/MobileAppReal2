import {StyleSheet,} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //height:600
    },
    
    heading: {
        position:'relative',
        width: 270,
        height: 88,
        //left: 25,
        top: 55,
        /* 24 sp • H5 Headline */
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#000000',
    },

    
    punishmentText:{
        position: 'relative',
        width: 150,
        height: 42,
        right: 50,
        top: 100,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 36,
        lineHeight: 41,
        letterSpacing: 0.25,
        color: '#263238',   
    },

    userdataSubdivisionAndPosition:{
        
        position: 'relative',
        width: 270,
        height: 50,
        //left: 25,
        top: 60,
        borderColor:"silver",
        borderBottomWidth:1.33333,
        borderTopWidth:1.33333,
        /* 12 sp • Caption */
        fontFamily: 'Red Hat Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        color: '#979797',
    },

    buttonContainer:{
        flexDirection:'row',
    },
    
    btnNavigation:{
        position:'relative',
        //marginTop:10,
        alignItems: 'center',
        //width: 150,
        margin:1,
        borderWidth:1,
        borderRadius: 5,
        backgroundColor:'#F0F0F0',
        padding: 5,
        borderColor:'#C0C0C0'
    },

    textInButton:{
        fontSize: 24,
        fontWeight: '100',
        textAlign: 'center',
        color:'#C0C0C0'
    },
    
    numberOfFines:{
        position: 'relative',
        width: 150,
        height: 42,
        right: 50,
        top: 100,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 41,
        letterSpacing: 0.25,
    },
    
    batteryOfFines:{
        position:'relative',
        height:200,
        width:100,
        left:80,
        bottom:150,
        backgroundColor:'#F0F0F0',
    },
    indicatorBattery:{
        height:35,
        width:100,
    },
    
    MotivationText:{
        marginTop:15,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 28,
        textAlign: 'center',
        letterSpacing: 0.15,

    },
    MotivationTextLetter:{
       // margin:15,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
        
    },
    
    MotivationBlock:{
        width:290,
        position:'relative',
        bottom:50,
        borderTopWidth:1,
        borderTopColor:'silver'
    }



    
})
export default styles;