import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import styles from "../styles/styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARD1, CARD2, CARD3, LIGHT_GRAY } from "../constants/color"
import Profile from "./Profile"
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import {
  NavigationContainer
} from '@react-navigation/native';
import MyTabs from '../navigation/BottomTab';
const Tab = createBottomTabNavigator();
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <ScrollView style={styles.homePageContainer}>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBarInput}
            placeholder="Search"
            keyboardType="numeric"
          />
          <View style={styles.searchBarButtonContainer}>
            <FontAwesome
              color="red"
              size={15}

              style={styles.searchBarButton}
              name={"search"} />
          </View>

        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.homePageStory}>
          <TouchableOpacity style={{ ...styles.homePageStoryCard, borderWidth: 2.5, borderColor: CARD1 }}>
            {/* <View style={{...styles.homePageStoryCardInner, backgroundColor:CARD1}}>
                  
               </View> */}
            <Image source={{ uri: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} 
            style={{ ...styles.homePageStoryCardInner, backgroundColor: CARD1 }} />
            <View style={styles.homePageStoryCardSidebar}>
              <TouchableOpacity  style={styles.homePageStoryCardSidebarButton}>
              <FontAwesome
                 style={styles.homePageStoryCardSidebarButtonIcon}
                name={"phone"} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.homePageStoryCardSidebarButton}>
              <FontAwesome
                   style={styles.homePageStoryCardSidebarButtonIcon}
                name={"phone"} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.homePageStoryCardSidebarButton}>
              <Entypo
                   style={styles.homePageStoryCardSidebarButtonIcon}
                name={"chat"} />
              </TouchableOpacity>
            </View>
        

          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.homePageStoryCard, backgroundColor: CARD2 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.homePageStoryCard, backgroundColor: CARD3 }}>

          </TouchableOpacity>
        </ScrollView>
        <View style={{ marginBottom: 150 }}>
          <View style={styles.userPost}>
            <View style={styles.userPostContainer}>
              <View style={styles.userPostHeader}>
                <View style={styles.homePageNewGuy}>

                  <Image
                    style={styles.homePageNewGuyInner}
                    source={{ uri: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" }}
                  />
                </View>
                <Text style={styles.userPostHeaderText}>Rushi_Desai</Text>
              </View>
              <Image style={styles.userPostImage} source={{ uri: "https://wallpapercave.com/dwp1x/wp2095581.jpg" }} />

            </View>
            <View style={styles.userPostFotter}>
              <FontAwesome
                style={styles.userPostFotterLogo}
                name={"phone"} />

              <FontAwesome
                style={{ ...styles.userPostFotterLogo, marginLeft: 10 }}
                name={"slideshare"} />

            </View>
          </View>
          <View style={styles.userPost}>
            <View style={styles.userPostContainer}>
              <View style={styles.userPostHeader}>
                <View style={styles.homePageNewGuy}>

                  <Image
                    style={styles.homePageNewGuyInner}
                    source={{ uri: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" }}
                  />
                </View>
                <Text style={styles.userPostHeaderText}>Rushi_Desai</Text>
              </View>
              <Image style={styles.userPostImage} source={{ uri: "https://wallpapercave.com/dwp1x/wp2095595.jpg" }} />
              <View style={styles.userPostFotter}>
                <FontAwesome
                  style={styles.userPostFotterLogo}
                  name={"phone"} />

                <FontAwesome
                  style={{ ...styles.userPostFotterLogo, marginLeft: 10 }}
                  name={"slideshare"} />

              </View>
            </View>

          </View>
        </View>

      </ScrollView>


    );