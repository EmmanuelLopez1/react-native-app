import { StyleSheet } from "react-native";
import colors from '../../constants/theme/colors'

export default StyleSheet.create({
    modalConatiner: {
        marginTop:20,
        paddingHorizontal:20,
        row:1,
        justifyContent:'center',
        color:'#fff',
    }, 
    modalText:{
        textAlign:'center',
        fontSize:18,
        marginTop:10
    },
    modalTitle:{
        fontSize:22,
    },  
    modalButtonContainer:{
        marginTop:20,
        grow:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    modalButton:{
        backgroundColor:'transparent',
        width:'25%',
        borderRadius:5,
        border:`1px solid ${colors.primary}`,
    }
})