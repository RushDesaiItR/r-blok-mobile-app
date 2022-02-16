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
  async accpectFriendReq(friendId) {
    let DataResult = await AuthServices.accpectRequest(friendId)
    console.log("accpectFriendReq", DataResult, friendId)
  }
  async addFriendReq(friendId) {
    let DataResult = await AuthServices.addRequest(friendId)
    console.log("addFriendReq", DataResult, friendId)
  }
  async componentWillMount() {

    if (this.props.route.params.type == 1) {
      let DataResult = await AuthServices.Getfriendsbyid(this.props.route.params.userId)
      this.setState({ UsersDataArray: DataResult.data })
      this.setState({ UsesrDataFriendsArray: this.state.UsersDataArray.friendlist })
    }
    if (this.props.route.params.type == 2) {
      let DataResult = await AuthServices.GetPendingfriendsbyid(this.props.route.params.userId)
      this.setState({ UsersDataArray: DataResult.data })
      this.setState({ UsesrDataFriendsArray: this.state.UsersDataArray.pendinFriendlist })
    }
    if (this.props.route.params.type == 3) {
      let DataResult = await AuthServices.GetSendedfriendsbyid(this.props.route.params.userId)
      this.setState({ UsersDataArray: DataResult.data })
      this.setState({ UsesrDataFriendsArray: this.state.UsersDataArray.sendedFriendlist })
    }
    if (this.props.route.params.type == 4) {
      let DataResult = await AuthServices.GETALLUSERS()
      // this.setState({ UsersDataArray: DataResult.data })
      this.setState({ UsesrDataFriendsArray: DataResult.data })
    }



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
                <TouchableOpacity onPress={() => this.props.navigation.navigate("User")}>
                  <FontAwesome5 style={styles.headerFriendListArrow} name='arrow-left' />
                </TouchableOpacity>
                {
                  (this.state.type === 1) ? (
                    <Text style={styles.headerFriendListTitle}>
                      Friends
                    </Text>
                  ) : (this.state.type === 2) ? (
                    <Text style={styles.headerFriendListTitle}>
                      Pending Request
                    </Text>
                  ) : (this.state.type === 3) ? (
                    <Text style={styles.headerFriendListTitle}>
                      Sended Request
                    </Text>
                  ) : (
                    <Text style={styles.headerFriendListTitle}>
                      FIND FRIENDS
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
                    <View style={{ flexDirection: "row" }}>
                      {
                        (this.state.type === 1) ? (
                          <TouchableOpacity style={{ ...styles.listButton, marginRight: 5 }}>
                            <Text style={styles.headerFriendListTitle}>
                              Remove
                            </Text>
                          </TouchableOpacity>

                        ) : (this.state.type === 2) ? (
                          <TouchableOpacity onPress={() => this.accpectFriendReq(item._id)} style={{ ...styles.listButton, marginRight: 5 }}>
                            <Text style={styles.userPageAllInfoDes}>Accpect</Text>
                          </TouchableOpacity>

                        ) : (this.state.type === 3) ? (
                          <TouchableOpacity style={{ ...styles.listButton, marginRight: 5 }}>
                            <Text style={styles.userPageAllInfoDes}>Cancle</Text>
                          </TouchableOpacity>

                        ) : (
                          <TouchableOpacity onPress={() => this.addFriendReq(item._id)} style={{ ...styles.listButton, marginRight: 5 }}>
                            <Text style={styles.userPageAllInfoDes}>Add</Text>
                          </TouchableOpacity>
                        )
                      }

                        
                      <TouchableOpacity
                        onPress={() => {
                          // Pass and merge params back to home screen
                          this.props.navigation.navigate({
                            name: 'Chat',
                            params: { item },

                          });
                        }}
                        style={styles.listButton}>
                        <Text style={styles.userPageAllInfoDes}>Chat</Text>
                      </TouchableOpacity>
                      {/* <TouchableOpacity
                        onPress={() => {
                          // Pass and merge params back to home screen
                          this.props.navigation.navigate({
                            name: 'OtherUserProfile',
                            params: { userId: item._id },

                          });
                        }}
                        style={styles.listButton}>
                        <Text style={styles.userPageAllInfoDes}>View</Text>
                      </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                }

              />


            </View>
        }
      </View>
    );
  }
}
