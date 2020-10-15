import {StyleSheet,} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blocks: {
        flexDirection: 'column',

    },
    
    heading: {
        position:'relative',
        width: 263,
        height: 88,
        left: 25,
        top: 55,
        /* 24 sp • H5 Headline */
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#000000',
    },

    userdata:{
        fontSize: 24,
        borderWidth: 2,
        backgroundColor: '#B0E0E6',
        padding: 10,
        fontFamily:'Impact',
        fontStyle:'italic',
        margin :1,
        borderRadius: 25,
        color:'black',
        width:400
    },
    userdataSubdivisionAndPosition:{
        
        position: 'relative',
        width: 270,
        height: 50,
        left: 25,
        top: 170,
        
        
       
        borderColor:"silver",
        
        borderBottomWidth:1.33333,
        borderTopWidth:1.33333,
        /* 12 sp • Caption */
        fontFamily: 'Red Hat Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        /* or 133% */
     
       
        /* ◇ Light / Icons Color */
        color: '#979797',
    },

    btnUpdata:{
        marginTop:10,
        alignItems: 'center',
        width: 150,
        
        borderWidth:5,
        borderRadius: 10,
        backgroundColor:'#B0E0E6',
        padding: 5,
        
    },
    textInButton:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
    
})
export default styles;