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
import AuthServices from '../services/auth';
import Loader from "./Loader"
export default class OtherUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserDataArray:[],
      userConnections:null,
      userPendingConnections:null,
      userId:null,
      loader:true,
      userId:this.props.route.params.userId,
    };
    console.log(this.props.route.params.userId)
  }
  async componentWillMount(){

    const DataResult=await AuthServices.OtherUserData(this.props.route.params.userId)
    this.setState({UserDataArray:DataResult.data})
    this.setState({userConnections:this.state.UserDataArray.friendlist.length})
    this.setState({userPendingConnections:this.state.UserDataArray.pendinFriendlist.length}) 
    this.setState({userId:this.state.UserDataArray._id})
    this.setState({loader:false})
  }
  render() {
    return (
      <>
      {
        this.state.loader ? (
          <Loader/>
        ):(
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
               source={{ uri: this.state.UserDataArray.imageUrl }}
             />
            </View>
             <Text style={styles.userPageTitle}>{this.state.UserDataArray.name}</Text>
             <Text style={styles.userPageDes}>Software engginner</Text>
           
             </View>
             <View style={{ flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap", margin:10}}>
                 {
                   this.state.userConnections > 0 ?
                   ( 
                   <TouchableOpacity style={styles.userPageAllInfo}
                    onPress={() => {
 
                     this.props.navigation.navigate({
                       name: 'FriendList',
                       params: { userId: this.state.userId,type:1 },
                      
                     });
                   }}
                   >
                        <FontAwesome name='user' style={styles.userPageAllInfoLogo}/>
                        <Text  style={styles.userPageAllInfoText}>{this.state.userConnections}</Text>
                        <Text  style={styles.userPageAllInfoDes}>CONNECTIONS</Text>
 
                   </TouchableOpacity>
                   ):(
                     <View style={styles.userPageAllInfo}>
                          <FontAwesome name='user' style={styles.userPageAllInfoLogo}/>
                          <Text  style={styles.userPageAllInfoText}>{this.state.userConnections}</Text>
                          <Text  style={styles.userPageAllInfoDes}>CONNECTIONS</Text>
   
                     </View>
                   )
                 }
                 {
                   this.state.userPendingConnections.length>0?( 
                    <TouchableOpacity 
                    onPress={() => {
                      // Pass and merge params back to home screen
                      this.props.navigation.navigate({
                        name: 'FriendList',
                        params: { userId: this.state.userId,type:2 },
                       
                      });
                    }}
                  style={styles.userPageAllInfo}>
                  <MaterialIcons name='swap-calls' style={styles.userPageAllInfoLogo}/>
                       <Text  style={styles.userPageAllInfoText}>{this.state.userPendingConnections}</Text>
                       <Text  style={styles.userPageAllInfoDes}>PENDING</Text>
                  </TouchableOpacity>
                  ):(
                    <View 
                    
                  style={styles.userPageAllInfo}>
                  <MaterialIcons name='swap-calls' style={styles.userPageAllInfoLogo}/>
                       <Text  style={styles.userPageAllInfoText}>{this.state.userPendingConnections}</Text>
                       <Text  style={styles.userPageAllInfoDes}>PENDING</Text>
                  </View>
                   )
                 } 
                
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
             {/* <TouchableOpacity style={{padding:13,padding:10,margin:10,borderRadius:10,backgroundColor:"#3D2892"}}>
                        <Text style={styles.buttonText}>ADD LIST</Text>
               </TouchableOpacity> */}
         </View>
      </ScrollView>
        )
          
        
      }
      </>
    );
  }
}
