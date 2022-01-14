import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class OtherUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={{flex:1, backgroundColor:"#e6ffff"}}>
         <Text>OtherUser</Text>
      </View>
    );
  }
}
