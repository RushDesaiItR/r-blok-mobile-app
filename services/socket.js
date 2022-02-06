

 const HOST = "https://chatsocketappvrblok.herokuapp.com";

 import io from 'socket.io-client'

 export const socket = io(HOST, { 
    reconnect: true,
     reconnectionAttempts: 100,
      reconnectionDelay: 3000,
 
   });
 
 

 socket.on('connection', () => {
 console.log('connected!');
 });
 socket.on("connent_error", (err) =>{
   console.log(err);
 })

