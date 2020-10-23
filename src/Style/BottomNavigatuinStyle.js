import {StyleSheet,} from 'react-native';

const btnStyles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
    },
    btnNavigation:{
        position:'relative',
        marginRight:20,
        alignItems: 'center',
        margin:1,
        borderWidth:1,
        borderRadius: 5,
        backgroundColor:'#F0F0F0',
        padding: 5,
        borderColor:'#C0C0C0'
    },
    imageNavigationBtn:{
        position: 'relative',
        width: 70,
        height: 70,
        justifyContent: 'center',
    },
}
)

export default btnStyles;