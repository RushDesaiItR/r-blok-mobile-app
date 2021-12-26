import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import styles from "../styles/styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARD1, CARD2, CARD3, LIGHT_GRAY } from "../constants/color"
import Profile from "./Profile"
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
         <View style={styles.userPageContainer}>
             <View style={{alignItems:"center",justifyContent:"center", height:200}}>
            <View
            style={{
              borderWidth:5,
              borderColor:"#3D2892",
              borderRadius:360
            }}
            >
            <Image
               style={styles.userPageImage}
               source={{ uri: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" }}
             />
            </View>
             <Text style={styles.userPageTitle}>Rushikesh Desai</Text>
             <Text style={styles.userPageDes}>Software engginner</Text>
           
             </View>
             <View style={{ flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap", margin:10}}>
                  <TouchableOpacity style={styles.userPageAllInfo}>
                       <FontAwesome name='user' style={styles.userPageAllInfoLogo}/>
                       <Text  style={styles.userPageAllInfoText}>2890</Text>
                       <Text  style={styles.userPageAllInfoDes}>FALLOWERS</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userPageAllInfo}>
                  <MaterialIcons name='swap-calls' style={styles.userPageAllInfoLogo}/>
                       <Text  style={styles.userPageAllInfoText}>2890</Text>
                       <Text  style={styles.userPageAllInfoDes}>FALLOWERS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userPageAllInfo}>
                  <MaterialIcons name='work' style={styles.userPageAllInfoLogo}/>
                       <Text  style={styles.userPageAllInfoText}>28</Text>
                       <Text  style={styles.userPageAllInfoDes}>WORK</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userPageAllInfo}>
                  <FontAwesome name='user' style={styles.userPageAllInfoLogo}/>
                       <Text  style={styles.userPageAllInfoText}>2890</Text>
                       <Text  style={styles.userPageAllInfoDes}>FALLOWERS</Text>
                   </TouchableOpacity>
             </View>
             <TouchableOpacity style={{padding:13,padding:10,margin:10,borderRadius:10,backgroundColor:"#3D2892"}}>
                        <Text style={styles.buttonText}>ADD LIST</Text>
               </TouchableOpacity>
         </View>
      </ScrollView>
    );
  }
}
