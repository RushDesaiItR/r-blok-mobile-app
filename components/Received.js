import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


const Received = ({image, message}) => {
    return(
        <View style={styles.container}>
          <Image source={{uri:image}} style={styles.img}/>
          <View>
               <Text style={styles.message}>{message}</Text>
               <Text style={styles.duration}>12:13 AM</Text>
          </View>
        </View>
    )
}
export default Received;
const styles = StyleSheet.create({
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginHorizontal:15,
        marginTop:5,
        fontFamily:'Montserrat_600SemiBold',
    },
    container:{
        flexDirection:'row',
        marginTop:20,
        width:250,
        backgroundColor:"#6257DF",
        padding:10,
        marginHorizontal:5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20

        
    },
    img:{
        width:40,
        height:40,
        borderRadius:20
    },
    message:{
        color:"white",
        fontSize:13,
        marginHorizontal:15,
        fontFamily:'Montserrat_700Bold'
    }
})