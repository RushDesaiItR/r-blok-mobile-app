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
      modal: false,
      showButon: true,
      email: null,
      passord: null,
      showEmailError: false,
      showEmailInvalidError: false,
      showPasswordError: false
    };
  }
  async login() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email) {
      this.setState({ showEmailError: true })
    }else{
      this.setState({ showEmailError: false })
      if (reg.test(this.state.email) === false) {
        this.setState({ showEmailInvalidError: true })
      }else{
        this.setState({ showEmailInvalidError: false })
  
      }
    }
  
    if (!this.state.password) {
      this.setState({ showPasswordError: true })
     
    }else{
      this.setState({ showPasswordError: false })

    }
    if(this.state.email && reg.test(this.state.email) && this.state.password){
      this.setState({showButon:false})
      const loginResult=await AuthServices.Login(this.state.email, this.state.passord)
       console.log("(loginResult",loginResult)
        if(loginResult.success){
        this.setState({modal:true})
        setTimeout(() => {
        this.setState({modal:false})
        }, 2000);
      }
  
      this.setState({showButon:true})
      if(loginResult.success){
        setTimeout(()=>{
          this.props.navigation.navigate("Home")
        }, 2000)
      }
     
    }
   

  }
  render() {
    return (
      <View style={styles.signin}>



        <View style={styles.signinInnerTop}>
          <Text style={styles.signinHeader}>RBLOK</Text>
          <Text style={styles.signinDes}>find your bussiness</Text>
        </View>
        <View style={styles.signinInnerBottom}>
          <View style={{ padding: 20 }}>
            <Text style={styles.signinFormHeader}>SIGN HERE</Text>
            <View style={styles.loginGroup}>
              <Text style={styles.textInputLabel}>ENTER YOUR EMAIL</Text>
              <TextInput style={styles.textInput} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
              {
                this.state.showEmailError &&(
                  <Text style={styles.inputError}>Enter Email</Text>
                )
              }
              {
                this.state.showEmailInvalidError&&(
                  <Text style={styles.inputError}>Enter Valid Email</Text>
                 
                )
              }
            </View>
            <View style={styles.loginGroup}>
              <Text style={styles.textInputLabel}>ENTER YOUR PASSWORD</Text>
              <TextInput style={styles.textInput} value={this.state.passord} onChangeText={(text)=>this.setState({password:text})}/>
             {
               this.state.showPasswordError&&(
                <Text style={styles.inputError}>Enter Password</Text>
               )
             }
            </View>
            <View style={styles.loginGroup}>
              {
                this.state.showButon ?
                  (
                    <TouchableOpacity onPress={() => this.login()} style={styles.buttonStyle}>
                      <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.buttonStyle}>
                      <Text style={styles.buttonText}>LOADING...</Text>
                    </View>
                  )
              }

            </View>
            <View style={styles.loginGroup}>
              <TouchableOpacity onPress={()=>  this.props.navigation.navigate("Register")}>
                <Text style={{fontWeight:"600", color:"red", textAlign:"center"}}>new on rblok? register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        {
          this.state.modal && (
            <View style={styles.signinModal}>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", height: "10%" }}>
                <MaterialCommunityIcons name="timer-outline" color={"red"} size={20} />
              </View>
              <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", height: "90%", marginTop: "-5%" }}>
                <Text style={{ fontWeight: "bold" }}>SUCESFUL</Text>
                <FontAwesome name="close" color={"red"} size={50} />
              </View>
            </View>
          )
        }
      </View>
    );
  }
}
