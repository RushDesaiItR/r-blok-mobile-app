
import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
export default class BasicExample extends React.Component {
  render() {
    return (
      <>
      <View style={{flex:1, flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <LottieView style={{width:200, height:200}} source={require('../styles/83026-loader-animation.json')} autoPlay loop />
      </View>
    
      </>
    );
  }
}
