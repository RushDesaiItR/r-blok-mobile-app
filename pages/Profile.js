import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import { AsyncStorage } from 'react-native';
import AuthServices from '../services/auth';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  async LogOut(){
    console.log("caaled")
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userid");
    setTimeout(()=>{
      this.props.navigation.navigate("Login")
    }, 2000)
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:"#e6ffff"}}>
         <Text>Settting</Text>
         <TouchableOpacity onPress={()=>this.LogOut()}>
            <Text>LOG OUT</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
