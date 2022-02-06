import React, { useEffect } from 'react';
import io from "socket.io-client";
import { View, Text, TextInput, TouchableOpacity,StatusBar,FlatList,ScrollView } from 'react-native';
import styles from './styles/styles';
const socket = io.connect("https://chatsocketappvrblok.herokuapp.com")
//https://chatsocketappvrblok.herokuapp.com/")
//http://localhost:5000")
const App=()=> {
  const [msg, setMsg]=React.useState("")
  const [Arrmsg, setArrMsg]=React.useState([])
useEffect(() => {
  socket.on("chat",payload=>{
    setArrMsg([...Arrmsg,payload])
  })
});
const clickEvent=()=>{
  console.log(msg)
  socket.emit("chat",{msg})
 
  console.log("--",Arrmsg)

}
	return (
	// <>
  // <TextInput placeholder="ghjgh" onChangeText={(text)=>setMsg(text)} />
  // <TouchableOpacity onPress={()=>clickEvent()}>
  //   <Text>ok</Text>
  // </TouchableOpacity>
  
  //   {
  //     Arrmsg.map((item,index)=>{
  //       return(
  //           <Text key={index}>
  //             {
  //               item.msg
  //             }
  //           </Text>
  //       )
  //     })
  //   } 

    
	//  </>
  <ScrollView style={styles.chatContainer}>
       <View  style={styles.chatContainerInner}>
        
         <View style={styles.chatOutgoingMessage}>
         <Text style={styles.chatOutgoingMessageTextName}>
            RUshikesh
         </Text>
            <Text style={styles.chatOutgoingMessageText}>
              Hi how are you?
            </Text>
            <Text style={styles.chatOutgoingMessageTime}>
            2.30 PM
            </Text>
         </View>


         <View style={styles.chatIncomingMessage}>
         <Text style={styles.chatOutgoingMessageTextName}>
            RUshikesh
         </Text>
            <Text style={styles.chatOutgoingMessageText}>
              Hi how are you?dffffffffffffffffffffffffffffffffffff
            </Text>
            <Text style={styles.chatOutgoingMessageTime}>
            2.30 PM
            </Text>
           </View>
       </View>
  </ScrollView>
	);
}

export default App;



// import React from 'react';

// import AuthServices from './services/auth'
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import Index from "./pages/index"
// const App = () => {
//  React.useEffect(()=>{
//   // AuthServices.loginUser()
//  },[])

//   return (
//    <Index/>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


// import React, { useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View,TextInput } from "react-native";
// import io from "socket.io-client";
// //const socket = io.connect("https://chatsocketappvrblok.herokuapp.com/")
// //("https://chatsocketappvrblok.herokuapp.com/")
// //http://localhost:5000")
// const App=()=> {
//   const [msg, setMsg]=React.useState("")
//   const [Arrmsg, setArrMsg]=React.useState([])
// useEffect(() => {
  
// socket.on('connection', () => {
// console.log('connected!');
// });
// socket.on("connent_error", (err) =>{
// console.log(err);
// })
//   socket.on("chat",payload=>{
//     setArrMsg([...Arrmsg,payload])
//   })
// });
// const clickEvent=()=>{
//   console.log("called...",msg)
//   socket.emit("chat",{msg})
//   console.log("called...")
// }
// 	return (
//     <>
//     <TouchableOpacity
    
//     onPress={()=>clickEvent()}
//   >
//     <Text>Press Here</Text>
//   </TouchableOpacity>
//    <TextInput
  
//    onChangeText={(text)=>setMsg(text)}
//    value={msg}
//    placeholder="useless placeholder"
//    keyboardType="numeric"
//  />
//  </>
// 	// <h1>
// 	// 	Geeks....!
//   //   <input value={msg} onChange={(e)=>setMsg(e.target.value)} type="text"/>
//   //   <button onClick={()=>clickEvent()}>click</button>
//   //   {
//   //     Arrmsg.map((item)=>{
//   //       return(
//   //           <h1>
//   //             {
//   //               item.msg
//   //             }
//   //           </h1>
//   //       )
//   //     })
//   //   }
// 	// </h1>
// 	);
// }

//export default App;

