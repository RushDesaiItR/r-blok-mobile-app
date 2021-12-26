import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "../styles/styles";
import AuthServices from '../services/auth';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { AsyncStorage } from 'react-native';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
      showButon:true
    };
  }
 async login() {
   
    this.setState({showButon:false})
    const loginResult=await AuthServices.Login()
   
    if(loginResult.success){
      this.setState({modal:true})
      setTimeout(() => {
      this.setState({modal:false})
      }, 2000);
    }
 
    this.setState({showButon:true})
    
 }
  render() {
    return (
       <View style={styles.signin}>

          

          <View style={styles.signinInnerTop}>
              <Text style={styles.signinHeader}>RBLOK</Text>
              <Text style={styles.signinDes}>find your bussiness</Text>
          </View>
          <View style={styles.signinInnerBottom}>
             <View style={{padding:20}}>
             <Text style={styles.signinFormHeader}>SIGN HERE</Text>
               <View style={styles.loginGroup}>
                   <Text style={styles.textInputLabel}>ENTER YOUR NAME</Text>
                   <TextInput style={styles.textInput} />
               </View>
               <View style={styles.loginGroup}>
                   <Text style={styles.textInputLabel}>ENTER YOUR NAME</Text>
                   <TextInput style={styles.textInput} />
               </View>
               <View style={styles.loginGroup}>
                 {
                   this.state.showButon ?
                   (
                    <TouchableOpacity onPress={()=> this.login()} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                   ):(
                    <View style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>LOADING...</Text>
                   </View>
                   )
                 }
                  
               </View>
             </View>
          </View>


         {
           this.state.modal &&(
            <View style={styles.signinModal}>
              <View style={{display:"flex", flexDirection:"row",justifyContent:"flex-end",height:"10%"}}>
                <MaterialCommunityIcons name="timer-outline" color={"red"} size={20} />
              </View>
              <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center", height:"90%", marginTop:"-5%"}}>
                 <Text style={{fontWeight:"bold"}}>SUCESFUL</Text>
                 <FontAwesome name="close" color={"red"} size={50} />
              </View>
            </View>
           )
         }
       </View>
    );
  }
}
