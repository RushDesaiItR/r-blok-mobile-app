
import { View, Text, TextInput, TouchableOpacity,StatusBar,FlatList,ScrollView,StyleSheet } from 'react-native';

import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import Received from './components/Received';

import Sent from "./components/Sent"
let socket;
const Chat = () => {
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
        e.preventDefault();
       
        socket.emit('sendMessage', message, () => setMessage(""))
        // setTimeout(() => {
        //     var div = document.getElementById("chat_body");
        //     div.scrollTop = div.scrollHeight ;
        // }, 100)
    }

    return (
        <View>
            <View  >
                <View >
               
                    <Sent
                        message={
                            "asas"
                        }
                    />
                   
                        {
                            users.map((e, i) => (
                                <Text key={i}>{e.user}</Text>
                            ))
                        }
                   
                </View>
                <View>
                    <View>
                        <View >
                            <View >
                                <Text>{room}</Text>
                            </View>

                        </View>
                        {/* className="panel-body msg_container_base" id="chat_body" */}
                        <View >
                            {
                                messages.map((e, i) => (
                                    e.user === user?.toLowerCase() ? <>
                                        <View key={i} >
                                            <View >
                                                <View >
                                                    <Text>{e.text}</Text>
                                                    <Text>{e.user}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </> : <>
                                        <View key={i} >
                                        <Received
                                        image={"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_960_720.jpg"}
                                          message={"hhh"}
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

                        </View>
                        <GiftedChat
      messages={messages}
     
    />
                        {/* <div className="panel-footer">
                            <div className="input-group">
                                <input id="btn-input" type="text"
                                    value={message}
                                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                                    onChange={(event) => setMessage(event.target.value)}
                                    className="form-control input-sm chat_input" placeholder="Write your message here..." />

                            </div>
                        </div> */}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Chat;
const styles = StyleSheet.create({
  // rest remains same
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});