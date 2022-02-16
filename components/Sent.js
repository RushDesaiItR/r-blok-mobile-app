import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Sent = ({message}) => {
    console.log(message)
    return(
        <View style={styles.container}>
            
                <Text style={styles.text}>{message}</Text>
            <Text style={styles.duration}>12:34 AM</Text>
        </View>
    )
}
export default Sent;

const styles = StyleSheet.create({
    container:{
        marginVertical:25,
        alignSelf:'flex-end',
        backgroundColor:"#d1d1e0",
        borderTopLeftRadius:20,
        padding:10,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        marginHorizontal:5,
        maxWidth:220,
    },
    duration:{
        color:'black',
        fontSize:11,
        marginTop:5,
        fontFamily:'Montserrat_600SemiBold',
        alignSelf:'flex-end'
    },
    gradient:{
      
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
    },
    text:{
        
        fontFamily:'Montserrat_700Bold'
    }
})