import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import styles from "../styles/styles";
import AuthServices from '../services/auth';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { AsyncStorage } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      showButon: true,
      email: null,
      password: null,
      showEmailError: false,
      showEmailInvalidError: false,
      showPasswordError: false,
      showNameError: false,
      fullName: null,
      formStep: 1,
      imageUri: "https://cdn.mwallpapers.com/photos/celebrities/hrithik-roshan/hrithik-roshan-best-hd-photos-1080p-xulsez.jpg",
      imageDisplay: false,
      imageData:null,
      cloudinaryImageUrl:null
    };
  }
  takeImageFormCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({ imageUri: image.path })
      this.setState({ imageDisplay: true })
      console.log(image);
    });
  }
  takeImageFromGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({ imageUri: image.path })
      this.setState({ imageDisplay: true })
      this.setState({imageData:image})
    
  
    });
  }
  nextStep() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!this.state.fullName) {
      this.setState({ showNameError: true })
    } else {
      this.setState({ showNameError: false })

    }
    if (!this.state.email) {
      this.setState({ showEmailError: true })
    } else {
      this.setState({ showEmailError: false })
      if (reg.test(this.state.email) === false) {
        this.setState({ showEmailInvalidError: true })
      } else {
        this.setState({ showEmailInvalidError: false })

      }
    }

    if (!this.state.password) {
      this.setState({ showPasswordError: true })

    } else {
      this.setState({ showPasswordError: false })

    }
    if (this.state.fullName && this.state.email && reg.test(this.state.email) && this.state.password) {
      this.setState({ formStep: 2 })
    }
  }
  async register() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.state.fullName && this.state.email && reg.test(this.state.email) && this.state.password) {
      this.setState({ showButon: false })
      const sourceImage = {
        uri: this.state.imageData.path,
        type: this.state.imageData.mime,
        name: this.state.imageData.path.split("/").pop()
      }
      const data = new FormData()
      data.append("file", sourceImage)
      data.append("upload_preset", "qtrmjhlj")
      data.append("cloud_name", "xyz-ltd")
    
      await fetch("https://api.cloudinary.com/v1_1/xyz-ltd/image/upload",{
        body: data,
        method: "post",
        headers:{
          "Content-Type":"multipart/form-data"
        }
        
       })
         .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({cloudinaryImageUrl:data.url})
        })
        .catch(error => {
          console.log(error)
        })
        let registerResult=AuthServices.register(this.state.fullName,this.state.email,this.state.password,this.state.cloudinaryImageUrl)
        if(registerResult){
          setTimeout(()=>{
            this.props.navigation.navigate("Home")
          }, 2000)
        }
     
     
    }

  }
  render() {
    return (
      <View style={styles.signin}>



        <View style={styles.signupInnerTop}>
          <Text style={styles.signinHeader}>RBLOK</Text>
          <Text style={styles.signinDes}>find your bussiness</Text>
        </View>
        <View style={styles.signupInnerBottom}>
          <View style={{ padding: 20 }}>

            {
              this.state.formStep == 1 && (
                <>
                  <Text style={styles.signinFormHeader}>SIGN UP HERE</Text>
                  <View style={styles.loginGroup}>
                    <Text style={styles.textInputLabel}>ENTER YOUR FULL NAME</Text>
                    <TextInput style={styles.textInput} value={this.state.name} onChangeText={(text) => this.setState({ fullName: text })} />
                    {
                      this.state.showNameError && (
                        <Text style={styles.inputError}>Enter Name</Text>
                      )
                    }

                  </View>
                  <View style={styles.loginGroup}>
                    <Text style={styles.textInputLabel}>ENTER YOUR EMAIL</Text>
                    <TextInput style={styles.textInput} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
                    {
                      this.state.showEmailError && (
                        <Text style={styles.inputError}>Enter Email</Text>
                      )
                    }
                    {
                      this.state.showEmailInvalidError && (
                        <Text style={styles.inputError}>Enter Valid Email</Text>

                      )
                    }
                  </View>
                  <View style={styles.loginGroup}>
                    <Text style={styles.textInputLabel}>ENTER YOUR PASSWORD</Text>
                    <TextInput style={styles.textInput} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
                    {
                      this.state.showPasswordError && (
                        <Text style={styles.inputError}>Enter Password</Text>
                      )
                    }
                  </View>
                  <View style={styles.loginGroup}>
                    <TouchableOpacity onPress={() => this.nextStep()} style={styles.buttonStyle}>
                      <Text style={styles.buttonText}>NEXT  </Text>
                      <FontAwesome5 style={{ color: "white", marginLeft: 5, fontWeight: "500" }} name="arrow-right" />
                    </TouchableOpacity>
                  </View>
                </>
              )
            }
            {
              this.state.formStep == 2 && (
                <View style={{flexDirection:"column"}}>
                  <View >
                    <View style={styles.addImageMenus}>
                      <TouchableOpacity onPress={() => this.takeImageFormCamera()}
                        style={styles.addImageMenu}>
                        <View style={styles.addImageMenuIconContainer}>
                          <MaterialCommunityIcons style={styles.addImageMenuIcon} name="camera" />
                        </View>

                        <Text style={{ color: "white", fontSize: 14, textAlign: "center" }}>Take From Camera</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.takeImageFromGallery()} style={styles.addImageMenu}>

                        <View style={styles.addImageMenuIconContainer}>
                          <MaterialCommunityIcons style={styles.addImageMenuIcon} name="folder-image" />

                        </View>
                        <Text style={{ color: "white", fontSize: 14, textAlign: "center" }}>Take From gallery</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageForm}>

                      {
                        this.state.imageDisplay ? (
                          <View style={styles.imageFormYes}>
                            <Image style={styles.imageFormImage} source={{ uri: this.state.imageUri }} />
                          
                          </View>
                        ) : (
                          <View style={styles.imageFormNo}>
                            <MaterialCommunityIcons style={styles.imageFormImage} name="file-image-outline" />
                            <Text style={{ fontSize: 20, fontWeight: "600", marginVertical: 10 }}>No Image</Text>
                            <Text>Add Your Image</Text>

                          </View>
                        )
                      }
                    </View>

                  </View>
                  <View style={styles.loginGroup}>
                    {
                      this.state.showButon ?
                        (
                          <TouchableOpacity onPress={() => this.register()} style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                          </TouchableOpacity>
                        ) : (
                          <View style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>LOADING...</Text>
                          </View>
                        )
                    }

                  </View>
                  <View style={styles.loginGroup}>
                    <TouchableOpacity onPress={() => this.setState({ formStep: 1 })} style={styles.buttonStyle}>
                      <Text style={styles.buttonText}>Back</Text>
                      <FontAwesome5 style={{ color: "white", marginLeft: 5, fontWeight: "500" }} name="arrow-left" />


                    </TouchableOpacity>
                  </View>
                  <View style={styles.loginGroup}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                      <Text style={{ fontWeight: "600", color: "red", textAlign: "center" }}>already have a account? login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }


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
