import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import Index from"./pages/index"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    // <Login/>
  <>
  <Index />
  </>
    
   
    );
  }
}
