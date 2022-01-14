import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native';
import styles from '../styles/styles';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: "https://cdn.mwallpapers.com/photos/celebrities/hrithik-roshan/hrithik-roshan-best-hd-photos-1080p-xulsez.jpg",
      imageDisplay:false
    };
  }
  takeImageFormCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({ imageUri: image.path })
      this.setState({ imageDisplay:true })
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
      this.setState({ imageDisplay:true })

      console.log(image);
    });
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
              
              <Text style={{color:"white",fontSize:14, textAlign:"center"}}>Take From Camera</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.takeImageFromGallery()} style={styles.addImageMenu}>

            <View style={styles.addImageMenuIconContainer}>
            <MaterialCommunityIcons style={styles.addImageMenuIcon} name="folder-image" />

            </View>  
              <Text style={{color:"white",fontSize:14, textAlign:"center"}}>Take From gallery</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.imageForm}>
            
            {
              this.state.imageDisplay?(
                 <View style={styles.imageFormYes}>
                    <Image  style={styles.imageFormImage} source={{uri:this.state.imageUri}}/>
                    <TextInput style={styles.imageFormInput} placeholder='Enter Des'/>
                    <TextInput style={styles.imageFormInput} placeholder='Enter Title'/>
                    <TouchableOpacity style={styles.imageFormButton}>
                         <Text style={{color:"white", textAlign:"center",padding:10,fontWeight:"600"}}>ADD POST</Text>
                    </TouchableOpacity>
                 </View> 
              ):(
                <View style={styles.imageFormNo}>
                    <MaterialCommunityIcons  style={styles.imageFormImage}  name="file-image-outline" />
                    <Text style={{fontSize:20, fontWeight:"600",marginVertical:10}}>No Image</Text>
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
