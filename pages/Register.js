import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "../styles/styles"
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <View style={styles.setBackground}>
        <View style={styles.loginHeaderBox}>
           <Text style={styles.loginBoxHeader}>REGISTER</Text>
        </View>
           <View style={styles.loginBox}>
               <View style={styles.loginGroup}>
                   <Text style={styles.textInputLabel}>ENTER YOUR NAME</Text>
                   <TextInput style={styles.textInput} placeholder="ENTER YOUR NAME"/>
               </View>
               <View style={styles.loginGroup}>
                   <Text style={styles.textInputLabel}>ENTER YOUR NAME</Text>
                   <TextInput style={styles.textInput} placeholder="ENTER YOUR NAME"/>
               </View>
               <View style={styles.loginGroup}>
                   <Text style={styles.textInputLabel}>ENTER YOUR NAME</Text>
                   <TextInput style={styles.textInput} placeholder="ENTER YOUR NAME"/>
               </View>
               <View style={styles.loginGroup}>
                   <Text style={styles.textInputLabel}>ENTER YOUR NAME</Text>
                   <TextInput style={styles.textInput} placeholder="ENTER YOUR NAME"/>
               </View>
               <View style={styles.loginGroup}>
                   <Text style={styles.textInputLabel}>ENTER YOUR NAME</Text>
                   <TextInput style={styles.textInput} placeholder="ENTER YOUR NAME"/>
               </View>
               <View style={styles.loginGroup}>
                   <TouchableOpacity style={styles.buttonStyle}>
                      <Text style={styles.buttonText}>REGISTER</Text>
                   </TouchableOpacity>
               </View>
           </View>
      </View>
    );
  }
}
