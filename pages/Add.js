import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import styles from '../styles/styles';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AuthServices from '../services/auth';
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: "https://cdn.mwallpapers.com/photos/celebrities/hrithik-roshan/hrithik-roshan-best-hd-photos-1080p-xulsez.jpg",
      imageDisplay: false,
      imageData: null,
      cloudinaryImageUrl: null,
      showButon: true,
      isEnabled: false,
      isEnabledProfile:false,
      isEnabledStory:false,
      isEnabledPost:false,
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
      this.setState({ imageData: image })


    });
  }
  isEnabledProfileSwitch() {
    console.log("clled", this.state.isEnabledProfile)
    this.setState({
      isEnabledProfile:!this.state.isEnabledProfile
    });
  }
  isEnabledPostSwitch() {
   this.setState({
    isEnabledPost:!this.state.isEnabledPost
    });
  }
  isEnabledStorySwitch() {
    this.setState(
     { isEnabledStory:!this.state.isEnabledStory}
    );
  }
  async AddPost() {
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

    await fetch("https://api.cloudinary.com/v1_1/xyz-ltd/image/upload", {
      body: data,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data"
      }

    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ cloudinaryImageUrl: data.url })
      })
      .catch(error => {
        console.log(error)
      })
   
     if(this.state.isEnabledProfile){
        let updateProfile= AuthServices.updatePofile(this.state.cloudinaryImageUrl);
      }
      if(this.state.isEnabledStory){
        let result = AuthServices.AddStory(this.state.cloudinaryImageUrl)
       
      }
      if(this.state.isEnabledPost){
        let addPost = AuthServices.createPost(this.state.postTitle,this.state.postDes,this.state.cloudinaryImageUrl)
      }
    this.setState({ showButon: true })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.addImage}>
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
                  {/* <TextInput style={styles.imageFormInput} placeholder='Enter Des' />
                  <TextInput style={styles.imageFormInput} placeholder='Enter Title' /> */}
                  <View>
                    <View  style={styles.checkboxContainer}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabledStory ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.isEnabledStorySwitch()}
                        value={this.state.isEnabledStory}
                      />
                      <Text style={styles.checkboxLabel}>Add as Story</Text>
                    </View>
                    <View  style={styles.checkboxContainer}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabledProfile ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.isEnabledProfileSwitch()}
                        value={this.state.isEnabledProfile}
                      />
                      <Text style={styles.checkboxLabel}>Set as profile pic</Text>
                    </View>
                    <View  style={styles.checkboxContainer}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabledPost ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.isEnabledPostSwitch()}
                        value={this.state.isEnabledPost}
                      />
                      <Text style={styles.checkboxLabel}>Set as profile pic</Text>
                    </View>
                 {
                   this.state.isEnabledPost&&(
                    <>
                        <TextInput style={styles.textInput} value={this.state.postTitle} onChangeText={(text)=>this.setState({postTitle:text})}/>
                       <TextInput style={styles.textInput} value={this.state.postDes} onChangeText={(text)=>this.setState({postDes:text})}/>
                        
                    </>
                   )
                 }

                  
                   
                  </View>

                  {
                    this.state.showButon ? (
                      <TouchableOpacity style={styles.imageFormButton} onPress={() => this.AddPost()}>
                        <Text style={{ color: "white", textAlign: "center", padding: 10, fontWeight: "600" }}>ADD POST</Text>
                      </TouchableOpacity>
                    ) : (
                      <View style={styles.imageFormButton} >
                        <Text style={{ color: "white", textAlign: "center", padding: 10, fontWeight: "600" }}>ADDING....</Text>
                      </View>
                    )
                  }


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
          {/* <Image style={{height:200, width:200}} source={{uri:this.state.imageUri}}/>
            <Text style={styles.addImageText}>Add</Text>
             <TouchableOpacity onPress={()=>this.takeImageFormCamera()}>
               <Text>Camera</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>this.takeImageFromGallery()}>
               <Text>gallery</Text>
             </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}
