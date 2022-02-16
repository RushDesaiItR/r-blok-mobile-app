import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
const Tab = createBottomTabNavigator();
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Add from "../pages/Add"
import User from "../pages/User"
import OtherUser from "../pages/OtherUser"
import FriendList from "../pages/FriendList"
import Login from "../pages/Login"
import Register from "../pages/Register"
import OtherUserProfile from "../pages/OtherUserProfile"
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import { createStackNavigator } from '@react-navigation/stack';
import Chat from "../pages/Chat"
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}

    >
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Register" component={Register} />
       <Stack.Screen name="OtherUser" component={OtherUser} />
      <Stack.Screen name="FriendList" component={FriendList} />
      <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />
      <Stack.Screen name="Chat" component={Chat} />
      {/* Chat  */}

    </Stack.Navigator>
  );
}

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      alignContent: "center",
      justifyContent: "center",
      elevation: 10
    }}
  >
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 35,
        backgroundColor: "#3D2892"
      }}
    >
      {children}
    </View>

  </TouchableOpacity>
)


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",

          height: 60,
          backgroundColor: "white",
          elevation: 10,

          borderRadius: 10
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MaterialIcons name="home"
                size={18}
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 25
                }} />
              <Text
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 15
                }}
              >Home</Text>
            </View>
          ),
        }}
        name="Home" component={Home} />
      <Tab.Screen name="Chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons
                name="chatbox"
                size={18}
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 25
                }} />
              <Text
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 15
                }}
              >Chat</Text>
            </View>
          ),
        }}
        component={Chat} />



      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add"
              size={18}
              style={{
                color: focused ? "white" : "white",
                fontSize: 25
              }} />

          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
        name="Add" component={Add} />



      <Tab.Screen name="User"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <FontAwesome5 name="user"
                size={18}
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 25
                }} />
              <Text
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 15
                }}
              >User</Text>
            </View>
          ),
        }}
        component={User} />
      <Tab.Screen name="Settings"

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="settings"
                size={18}
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 25
                }} />
              <Text
                style={{
                  color: focused ? "#3D2892" : "#000033",
                  fontSize: 15
                }}
              >Seetings</Text>
            </View>
          ),
        }}
        component={Profile} />

    </Tab.Navigator>
  );
}
export default MyStack;