
// import AsyncStorage from "@react-native-community/async-storage"
const HOST = "https://shrouded-scrubland-67974.herokuapp.com";
import { AsyncStorage } from 'react-native';
const Login = () => {
    console.log("called..")
 const Url = `${HOST}/api/login`;
  // const testUrl = `${HOST}/${API}/test`;

  

var raw = JSON.stringify({
  "email": "abch@gmailcom",
  "name": "hkjk",
  "password": "tyyuu",
  "user_typeid": 1
});

 return fetch(Url, {
    method: "post",
    body: raw,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(function (response) {
     return response.json();
  })
  .then(function (data) {
    let bearer = "Bearer " + data.token;
    AsyncStorage.setItem("token", bearer);
    AsyncStorage.setItem("userid",  data.user._id);

    
    return {
        success: true,
        token:data.token
      };
  })
  .catch(error => {
      return {
          success:false
      }
   
  });
};

const getToken=async()=>{
   return await AsyncStorage.getItem("token");

}
const getUserId=async()=>{
  return await AsyncStorage.getItem("userid");

}
module.exports.getUserId = getUserId;
module.exports.getToken = getToken;
module.exports.Login = Login;


