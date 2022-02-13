
import { View, Text, TextInput, TouchableOpacity, StatusBar, FlatList, ScrollView, StyleSheet } from 'react-native';

import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import Received from './components/Received';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import Sent from "./components/Sent"
let socket;
const App = () => {
    const [user, setUser] = useState("abc");
    const [room, setRoom] = useState("abc");
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const socketUrl = 'https://chatsocketappvrblok.herokuapp.com'
    //'http://localhost:8000/'
    //'https://chatsocketappvrblok.herokuapp.com/'
    // const socketUrl = ''
    //
    useEffect(() => {
        // const search = window.location.search;
        // const params = new URLSearchParams(search);
        // const user = params.get('name');
        // const room = params.get('room');

        // setUser(user)
        // setRoom(room)
        console.log(socketUrl)
        socket = io.connect(socketUrl)

        //io(socketUrl);



        socket.emit('join', { user, room }, (err) => {
            if (err) {
                // alert(err)
            }
        })

        return () => {
            // User leaves room
            socket.disconnect();

            socket.off()
        }

    }, [socketUrl])

    useEffect(() => {
        socket.on('message', msg => {
            setMessages(prevMsg => [...prevMsg, msg])

            setTimeout(() => {

                // var div = document.getElementById("chat_body");
                // div.scrollTop = div.scrollHeight - div.clientWidth;
            }, 10)
        })

        socket.on('roomMembers', usrs => {
            setUsers(usrs)
        })
    }, [])

    const sendMessage = (e) => {
        console.log("caled")   
        socket.emit('sendMessage', message, () => setMessage(""))
        return;
        // setTimeout(() => {
        //     var div = document.getElementById("chat_body");
        //     div.scrollTop = div.scrollHeight ;
        // }, 100)
    }

    return (
        <View style={styles.chatContainer}>
            <View style={styles.chatContainerHeader}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("User")}>
                  <FontAwesome5 style={styles.headerFriendListArrow} name='arrow-left' />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.chatContainerMessages} showsVerticalScrollIndicator={true}>
                {
                    messages.map((e, i) => (
                        e.user === user?.toLowerCase() ? <>
                            <View key={i} >
                                <View >
                                    <View >
                                        <Sent
                                         message={e.text}
                                       />
                                        {/* <Text>{e.user}</Text> */}
                                    </View>
                                </View>
                            </View>
                        </> : <>
                            <View key={i} >
                                <Received
                                    image={"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_960_720.jpg"}
                                    message={e.text}
                                />
                                {/* <View >
                                                <View >
                                                    <Text>{e.text}</Text>
                                                    <Text>{e.user}</Text>
                                                </View>
                                            </View> */}
                            </View>
                        </>
                    ))
                }
            </ScrollView>
            <View style={styles.chatContainerInput}>
                <TextInput style={{ width: "80%" }}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                  
                    placeholder={"Enter Your Message"} />
                <TouchableOpacity onPress={(e) => sendMessage(e)} style={{ width: "10%", marginLeft: "10%" }}>
                    <Text>GO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App;
const styles = StyleSheet.create({
    // rest remains same
    chatContainer: {
        flex: 1,

    },
    chatContainerHeader: {
        height: "5%",
        flexDirection:"row",
        alignItems:"center",
        padding:10
    },
    chatContainerMessages: {
        height: "80%",
    },
    chatContainerInput: {
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        padding:10,
        backgroundColor:"#f2f2f2"
        
    }
});