import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from '../styles/styles';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthServices from '../services/auth';
import Loader from "./Loader"
export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UsesrDataArray: [],
      UsesrDataFriendsArray: [],
      type: this.props.route.params.type,
      userId: this.props.route.params.userId,
      loader: true
    };
    // componentWillMountThenCall(this.props.route.params.id)

  }

  async componentWillMount() {

    const DataResult = await AuthServices.Getfriendsbyid(this.props.route.params.userId)
    this.setState({ UsersDataArray: DataResult.data })
    this.setState({ UsesrDataFriendsArray: this.state.UsersDataArray.friendlist })
    console.log("this.state.UsersDataArray", this.state.UsesrDataFriendsArray);
    this.state.UsesrDataFriendsArray.map(item => {
      console.log(item.name)
    })
    setTimeout(() => {
      this.setState({ loader: false })
    }, 3000)

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.loader ? (
            <Loader />
          ) :
            <View>
              <View style={styles.headerFriendList}>
                <TouchableOpacity>
                  <FontAwesome5 style={styles.headerFriendListArrow} name='arrow-left' />
                </TouchableOpacity>
                {
                  (this.state.type === 1) ? (
                    <Text style={styles.headerFriendListTitle}>
                      Friends
                    </Text>
                  ) : (
                    <Text style={styles.headerFriendListTitle}>
                      Pending
                    </Text>
                  )
                }

              </View>
              <FlatList
                data={this.state.UsesrDataFriendsArray}
                renderItem={({ item }) =>


                  <TouchableOpacity style={styles.list}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Image style={styles.listImage} source={{ uri: item.imageUrl }} />
                      <Text style={styles.listName}>{item.name}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        // Pass and merge params back to home screen
                        this.props.navigation.navigate({
                          name: 'OtherUserProfile',
                          params: { userId: item._id },

                        });
                      }}
                      style={styles.listButton}>

                      <Text style={styles.userPageAllInfoDes}>View</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                }

              />


            </View>
        }
      </View>
    );
  }
}
