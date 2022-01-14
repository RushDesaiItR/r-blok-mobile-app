import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, FlatList } from 'react-native';
import styles from "../styles/styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARD1, CARD2, CARD3, LIGHT_GRAY } from "../constants/color"
import Profile from "./Profile"
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import Loader from "./Loader"
import AuthServices from '../services/auth';
import {
  NavigationContainer
} from '@react-navigation/native';
import MyTabs from '../navigation/BottomTab';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      PostsDataArray: [],
      StoryArray: [],
      UserStory: [],
      storyShow: false,
      slideShowActiveImage: 0
    };
  }
  async componentWillMount() {
    const DataResult = await AuthServices.GetPostsById()
    this.setState({ PostsDataArray: DataResult.resturnPosts })
    const StoryDataResult = await AuthServices.GetStoriesById()
    this.setState({ StoryArray: StoryDataResult.returStories })
    this.setState({ UserStory: this.state.StoryArray[0] })
    setTimeout(() => {
      this.setState({ loader: false })
    }, 3000)
  }
  showStory(userId) {
    this.setState({ UserStory: this.state.StoryArray[userId] })
    console.log("__________________",this.state.UserStory)
    this.setState({ storyShow: true })
  }
  changeSlideShowImage(nativeEvent) {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      console.log(slide)
      if (slide != this.state.slideShowActiveImage) {
        this.setState({ slideShowActiveImage: slide })
      }
    }
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


                    <TouchableOpacity onPress={() => this.showStory(item.arrayId)} style={{ ...styles.newStory, borderWidth: 3, borderColor: "red", }}>
                      <View style={styles.newStoryInner}>
                        <Text style={styles.newStoryTitle}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  }

                />

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
              {
                this.state.storyShow && (
                  <View style={styles.storyFullPage}>
                    <View style={styles.storyFullPageInner}>
                      <TouchableOpacity  onPress={() => this.setState({ storyShow: false })}>
                        <AntDesign style={{ ...styles.storyFullPageInnerClose, fontSize:20 }} name="closecircle" />
                      </TouchableOpacity>
                      <View style={styles.storyFullPageInnerHeader}>
                        <Text style={styles.storyFullPageInnerHeaderText}>{this.state.UserStory.name}</Text>
                        <Image style={{height:60, width:60, borderRadius:360}} source={{uri:this.state.UserStory.imageUrl}}/>
                        {/* <View style={styles.storyFullPageInnerHeaderCount}>
                          <Text style={{ ...styles.storyFullPageInnerHeaderText, color: "white" }}>{this.state.UserStory.newStories.length}</Text>

                        </View> */}
                      </View>

                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={this.state.UserStory.newStories}
                        onScroll={({ nativeEvent }) => this.changeSlideShowImage(nativeEvent)}
                        renderItem={({ item }) =>
                          <View style={styles.storyFullPageBoxContainer}>
                            <Image style={styles.storyFullPageBoxImg} source={{ uri: item.src }} />

                          </View>

                          //  <Text>{this.state.UserStory.newStories[0]._id}</Text>
                        }

                      />

                     

                        <FlatList
                          horizontal
                          style={styles.storyFullPageBoxIndicatorContainer}
                          showsHorizontalScrollIndicator={false}
                          data={this.state.UserStory.newStories}
                          onScroll={({ nativeEvent }) => this.changeSlideShowImage(nativeEvent)}
                          keyExtractor={(item,index) => index.toString()}
                          renderItem={({ item, index }) =>
                            
                            <View style={ 
                              this.state.slideShowActiveImage == index ?
                              { ...styles.activeStoryFullPageBoxIndicator, width: windowWidth / this.state.UserStory.newStories.length - 30 }
                              :
                              { ...styles.storyFullPageBoxIndicator, width: windowWidth / this.state.UserStory.newStories.length - 30 }

                              }>
                            
                            </View>

                        }

                        />

                     

                    </View>
                  </View>
                )
              }

            </>
          )
        }
      </>

    );
  }
}
