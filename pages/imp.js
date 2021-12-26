import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import styles from "../styles/styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARD1, CARD2,CARD3 } from "../constants/color"
import  Profile from "./Profile"
import {
  NavigationContainer
} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <>
      
     
      <View style={styles.homePageContainer}>
      <NavigationContainer>
         <Tab.Navigator>
      <Tab.Screen name="Home" component={Profile} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
        {/* <View style={styles.homePageHeader}>
          <Text style={styles.homePageTitle}>RBLOK</Text>
          <Text style={styles.homePageDes}>Find what you want</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.homePageTopBar}>
          <TouchableOpacity>
            <Text style={{ marginRight: 20 }}>Featured</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.homePageTopBarText}>Top</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.homePageTopBarText}>Trading</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.homePageTopBarText}>Other</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.homePageTopBarText}>Other 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.homePageTopBarText}>Other 3</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.homePageStory}>
          <TouchableOpacity style={{...styles.homePageStoryCard, backgroundColor:CARD1}}>

          </TouchableOpacity>
          <TouchableOpacity style={{...styles.homePageStoryCard, backgroundColor:CARD2}}>

          </TouchableOpacity>
          <TouchableOpacity style={{...styles.homePageStoryCard, backgroundColor:CARD3}}>

          </TouchableOpacity>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.homePageNewGuys}>
            <TouchableOpacity  style={styles.homePageNewGuys}>
              <View style={styles.homePageNewGuy}>
              
               <Image
                style={styles.homePageNewGuyInner}
                 source={{uri:"https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png"}}
                />     
             </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.homePageNewGuys}>
              <View style={styles.homePageNewGuy}>
              
               <Image
                style={styles.homePageNewGuyInner}
                 source={{uri:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}}
                />     
             </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.homePageNewGuys}>
              <View style={styles.homePageNewGuy}>
              
               <Image
                style={styles.homePageNewGuyInner}
                 source={{uri:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"}}
                />     
             </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.homePageNewGuys}>
              <View style={styles.homePageNewGuy}>
              
               <Image
                style={styles.homePageNewGuyInner}
                 source={{uri:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}}
                />     
             </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.homePageNewGuys}>
              <View style={styles.homePageNewGuy}>
              
               <Image
                style={styles.homePageNewGuyInner}
                 source={{uri:"https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png"}}
                />     
             </View>
            </TouchableOpacity>
        </ScrollView> */}
      </View>
    </>
    );
  }
}
