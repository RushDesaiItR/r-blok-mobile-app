import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:"#e6ffff"}}>
         <Text>Chat</Text>
      </View>
    );
  }
}
