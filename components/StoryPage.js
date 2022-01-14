import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, FlatList } from 'react-native';
import styles from "../styles/styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARD1, CARD2, CARD3, LIGHT_GRAY } from "../constants/color"
import Profile from "./Profile"
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import Loader from "./Loader"
import AuthServices from '../services/auth';
import {
  NavigationContainer
} from '@react-navigation/native';
import MyTabs from '../navigation/BottomTab';
const Tab = createBottomTabNavigator();
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      PostsDataArray: [],
      StoryArray: []
    };
  }
  async componentWillMount() {
    const DataResult = await AuthServices.GetPostsById()
    this.setState({ PostsDataArray: DataResult.resturnPosts })
    const StoryDataResult = await AuthServices.GetStoriesById()
    this.setState({  StoryArray: StoryDataResult.returStories })
    console.log("StoryArray",this.state.StoryArray)
   
    setTimeout(() => {
      this.setState({ loader: false })
    }, 3000)
  }
  render() {
    return (
      <>
        {
          this.state.loader ? (
            <Loader />
          ) : (
            <>
              <View style={styles.homePageContainer}>

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

                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                    data={this.state.StoryArray}
                    renderItem={({ item }) =>


                    <TouchableOpacity style={{...styles.newStory,borderWidth:3, borderColor:"red", }}>
                    <View style={styles.newStoryInner}>
                      <Text style={styles.newStoryTitle}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                    }

                  /> 
                  {/* <TouchableOpacity style={{...styles.newStory,borderWidth:3, borderColor:"red", }}>
                    <View style={styles.newStoryInner}>
                      <Text style={styles.newStoryTitle}>Title</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{...styles.newStory,borderWidth:3, borderColor:"red", }}>
                    <View style={styles.newStoryInner}>
                      <Text style={styles.newStoryTitle}>Title</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{...styles.newStory,borderWidth:3, borderColor:"red", }}>
                    <View style={styles.newStoryInner}>
                      <Text style={styles.newStoryTitle}>Title</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{...styles.newStory,borderWidth:3, borderColor:"red", }}>
                    <View style={styles.newStoryInner}>
                      <Text style={styles.newStoryTitle}>Title</Text>
                    </View>
                  </TouchableOpacity> */}
                <View style={styles.homePagePosts}>
                  <FlatList
                  showsVerticalScrollIndicator={false}
                    data={this.state.PostsDataArray}
                    renderItem={({ item }) =>


                      <View style={styles.userPost}>
                        <View style={styles.userPostContainer}>

                          <ImageBackground style={styles.userPostImage} source={{ uri: item.imageUrl }}></ImageBackground>

                        </View>
                        <View style={styles.userPostFotter}>
                          <Text style={styles.userPostHeaderText}>Rushi_Desai</Text>
                          <View style={{ flexDirection: "row" }}>
                            <FontAwesome
                              style={styles.userPostFotterLogo}
                              name={"phone"} />

                            <FontAwesome
                              style={{ ...styles.userPostFotterLogo, marginLeft: 10 }}
                              name={"slideshare"} />
                          </View>

                        </View>



                      </View>
                    }

                  />
                </View>







              </View>


            </>
          )
        }
      </>

    );
  }
}
