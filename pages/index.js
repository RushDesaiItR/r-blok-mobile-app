import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import styles from "../styles/styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARD1, CARD2,CARD3 } from "../constants/color"
import  Profile from "./Profile"
import Login from "./Login"
import {
  NavigationContainer
} from '@react-navigation/native';
import MyStack from '../navigation/BottomTab';
const Tab = createBottomTabNavigator();
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    // <Login/>
    <NavigationContainer>
       <MyStack/>
    </NavigationContainer>
    
   
    );
  }
}
