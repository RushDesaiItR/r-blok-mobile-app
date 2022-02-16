
// import AsyncStorage from "@react-native-community/async-storage"
const HOST = "http://shrouded-scrubland-67974.herokuapp.com";
import { AsyncStorage } from 'react-native';

const Login = async(email, password) => {
  console.log("called..", email, password)
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("userid");
  const Url = `${HOST}/api/login`;
  // const testUrl = `${HOST}/${API}/test`;



  var raw = JSON.stringify({
    "email": email,
    "name": "hkjk",
    "password": password,
    "user_typeid": 1
  });
  // abch@gmailcom
  // hkjk
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
      AsyncStorage.setItem("userid", data.user._id);


      return {
        success: true,
        token: data.token
      };
    })
    .catch(error => {
      return {
        success: false
      }

    });
};

const getToken = async () => {
   return await AsyncStorage.getItem("token");
}
const getUserId = async () => {
   return await AsyncStorage.getItem("userid");
}
const removeToken = async () => {
  console.log("caaled2")
   await AsyncStorage.removeItem("token");
   await AsyncStorage.removeItem("userid");
}
const removeUserId = async () => {
 
   console.log("removeToken")
}

const UserData = async () => {
  let userId = await getUserId();
  //61c7f10326b92738b4054661
  const Url = `${HOST}/api/getuserbyid/${userId}`;
  return fetch(Url, {
    method: "get",

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
      console.log("------------", data)

      return {
        data
      };
    })
    .catch(error => {
      console.log("------------", error)
      return {
        error
      }

    });
}
const OtherUserData = async (UserId) => {
  // let userId = await getUserId();
  let userId = await getUserId();
  const Url = `${HOST}/api/getuserbyid/${UserId}`;
  return fetch(Url, {
    method: "get",

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
      console.log("------------", data)

      return {
        data
      };
    })
    .catch(error => {
      console.log("------------", error)
      return {
        error
      }

    });
}
const Getfriendsbyid = async (id) => {
  let userId = await getUserId();
  console.log("-----Getfriendsbyid-----id--", id)
  const Url = `${HOST}/api/getfriendsbyid/${userId}`;
  return fetch(Url, {
    method: "get",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      var arrayFriends = [];
      arrayFriends = response.json();
      return arrayFriends;
    })
    .then(function (data) {
      console.log("-----Getfriendsbyid-------", data)

      return {
        data
      };
    })
    .catch(error => {
      console.log("-----Getfriendsbyid-------", error)
      return {
        error
      }

    });
}
const GetChatid = async (userFirstId) => {
  let userSecondId = await getUserId();
  console.log("----GetChatid-----id--", userFirstId,userSecondId)
  let row = JSON.stringify({
       "userSecond":userSecondId,
       "userFirst":userFirstId
  })
  const Url = `${HOST}/api/getUserChatData`;
  return fetch(Url, {
    method: "post",
    body: row,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log("-----GetChatid-------", data)

      return {
        data
      };
    })
    .catch(error => {
      console.log("-----GetChatid-------", error)
      return {
        error
      }

    });
}
const GetPendingfriendsbyid = async (id) => {
  let userId = await getUserId();
  console.log("-----Getfriendsbyid-----id--", id)
  const Url = `${HOST}/api/getallpendingrequest/${id}`;
  return fetch(Url, {
    method: "get",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      var arrayFriends = [];
      arrayFriends = response.json();
      return arrayFriends;
    })
    .then(function (data) {
      console.log("----- GetPendingfriendsbyid-------", data)

      return {
        data
      };
    })
    .catch(error => {
      console.log("----- GetPendingfriendsbyid-------", error)
      return {
        error
      }

    });
}
const GetSendedfriendsbyid = async (id) => {
  let userId = await getUserId();
  console.log("-----Getfriendsbyid-----id--", id)
  const Url = `${HOST}/api/getallsendedgrequest/${userId}`;
  return fetch(Url, {
    method: "get",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      var arrayFriends = [];
      arrayFriends = response.json();
      return arrayFriends;
    })
    .then(function (data) {
      console.log("-----Getfriendsbyid-------", data)

      return {
        data
      };
    })
    .catch(error => {
      console.log("-----Getfriendsbyid-------", error)
      return {
        error
      }

    });
}
const GetPostsById = async (id) => {
  let userId = await getUserId();
  //console.log("-----GetPostsById-----id--", id)
  //const Url = `${HOST}/api/getfriendsbyid/${id}`;
  const Url = `${HOST}/api/gethomedatabyidtwo/${userId}`;
  return fetch(Url, {
    method: "get",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      var arrayFriends = [];
      arrayFriends = response.json();
      return arrayFriends;
    })
    .then(function (data) {
      // console.log("-----GetPostsById", data.friendlist)
      let resturnPosts = [];

      for (let friend = 0; friend < data.friendlist.length; friend++) {
        console.log(data.friendlist[friend].name)
        for (let post = 0; post < data.friendlist[friend].posts.length; post++) {
          let createPost = {
            ...data.friendlist[friend].posts[post],
            name: data.friendlist[friend].name,
            userImg: data.friendlist[friend].imageUrl,
            userid: data.friendlist[friend]._id,
            id: data.friendlist[friend].posts[post]._id
          }
          resturnPosts.push(createPost)
          // console.log("--------post---",data.friendlist[friend].posts[post])
        }
      }
      resturnPosts.sort((a, b) => a.createdAt - b.createdAt)
      // resturnPosts.forEach(element => {
      //      console.log("-------",element)
      //    });
      return {
        resturnPosts
      };
    })
    .catch(error => {
      console.log("----- GetSendedfriendsbyid-------", error)
      return {
        error
      }

    });
}
const GetStoriesById = async (id) => {
  let userId = await getUserId();
 // console.log("-----GetStoriesById-----id--", id)
  //const Url = `${HOST}/api/getfriendsbyid/${id}`;
  const Url = `${HOST}/api/gethomedatabyid/${userId}`;
  return fetch(Url, {
    method: "get",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      var arrayFriends = [];
      arrayFriends = response.json();
      return arrayFriends;
    })
    .then(function (data) {

      let returStories = [];

      for (let friend = 0; friend < data.friendlist.length; friend++) {
        let createstory = {
          arrayId: friend,
          name: data.friendlist[friend].name,
          userid: data.friendlist[friend]._id,
          imageUrl: data.friendlist[friend].imageUrl,
          newStories: []
        }

        returStories.push(createstory)
        for (let story = 0; story < data.friendlist[friend].storiesnew.length; story++) {
          returStories[friend].newStories.push(data.friendlist[friend].storiesnew[story])
        }
      }
      let dummyEmptyArr = [];
      for (let friend = 0; friend < returStories.length; friend++) {
        if (returStories[friend].newStories.length > 0) {
          dummyEmptyArr.push(returStories[friend])
        }
      }

      returStories = [];
      returStories = dummyEmptyArr;
      returStories.sort((a, b) => a.createdAt - b.createdAt)
      returStories.forEach(friend => {
        console.log("--------", friend)
      })
      return {
        returStories
      };
    })
    .catch(error => {
      console.log("-----GetStoriesById-------", error)
      return {
        error
      }

    });
}

const uploadProfile = async (sourceImage) => {
  
  const data = new FormData()
  data.append("file", sourceImage)
  data.append("upload_preset", "qtrmjhlj")
  data.append("cloud_name", "xyz-ltd")

  fetch("https://api.cloudinary.com/v1_1/xyz-ltd/image/upload",{
    body: data,
    method: "post",
    headers:{
      "Content-Type":"multipart/form-data"
    }
    
   })
     .then(response => response.json())
    .then(data => {
      console.log(data)

    })
    .catch(error => {
      console.log(error)
    })
}
const AddStory = async (imageUrl)=>{
  let userId = await getUserId();
  const Url = `${HOST}/api/story/${userId}`;
  let row = JSON.stringify({
    "src":imageUrl
  })
  return fetch(Url, {
    method: "post",
    body: row,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(data =>{
      console.log(data,"------------------")
       return data
    })
    .catch(error => {
      console.log(error)
    })
}
const register = async (name,email,password, imageUrl) => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("userid");
  const url = `${HOST}/api/register`;
  let row = JSON.stringify({
    "name": name,
    "user_type_id": 1,
    "email": email,
    "password":password,
    "imageUrl":imageUrl
  })
  return fetch(url, {
    method: "post",
    body: row,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(data =>{
      let bearer = "Bearer " + data.token;
      AsyncStorage.setItem("token", bearer);
      AsyncStorage.setItem("userid", data.registeredUser._id);
     console.log("0000",data, data.registeredUser._id)

      return {
        success: true,
        token: data.token
      };
    })
    .catch(error => {
      console.log(error)
    })

}
const updatePofile=async(imageUrl)=>{
  let userId = await getUserId();
  const url = `${HOST}/api/updateprofile/${userId}`;
  let row = JSON.stringify({
     "imageUrl":imageUrl
  })
  return fetch(url, {
    method: "put",
    body: row,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(data =>{
    
     console.log("----",data)
        return {
        success: true,
       
      };
    })
    .catch(error => {
      console.log(error)
    })
}
const createPost=async(title,des,imageUrl)=>{
  let userId = await getUserId();
  const url = `${HOST}/api/post/${userId}`;
  let row = JSON.stringify({
     "imageUrl":imageUrl,
     "title":title,
     "description":des
  })
  return fetch(url, {
    method: "post",
    body: row,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(data =>{
    
     console.log("----",data)
        return {
        success: true,
       
      };
    })
    .catch(error => {
      console.log(error)
    })
}
const accpectRequest=async(friendId)=>{
  let userId = await getUserId();
  console.log(userId, friendId)
  const url = `${HOST}/api/createfriend/${userId}`;
  let row = JSON.stringify({
    "_id":friendId  
  })
  return fetch(url, {
    method: "post",
    body: row,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(data =>{
    
     console.log("----",data)
        return {
        success: true,
       
      };
    })
    .catch(error => {
      console.log(error)
    })
}
const GETALLUSERS = async () => {

  const Url = `${HOST}/api/getalluser`;
  return fetch(Url, {
    method: "get",

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
      console.log("------------", data)

      return {
        data
      };
    })
    .catch(error => {
      console.log("------------", error)
      return {
        error
      }

    });
}

const addRequest=async(friendId)=>{
  let userId = await getUserId();
  console.log(userId, friendId)
  const url = `${HOST}/api/requestfriend/${userId}`;
  let row = JSON.stringify({
    "_id":friendId  
  })
  return fetch(url, {
    method: "post",
    body: row,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(data =>{
    
     console.log("----",data)
        return {
        success: true,
       
      };
    })
    .catch(error => {
      console.log(error)
    })
}
module.exports.addRequest=addRequest;
module.exports.createPost=createPost
module.exports.updatePofile = updatePofile;
module.exports.register = register;
module.exports.removeToken = removeToken;
module.exports.uploadProfile = uploadProfile;
module.exports.GetStoriesById = GetStoriesById;
module.exports.GetPostsById = GetPostsById;
module.exports.Getfriendsbyid = Getfriendsbyid;
module.exports.GetPendingfriendsbyid = GetPendingfriendsbyid;
module.exports.GetSendedfriendsbyid = GetSendedfriendsbyid;
module.exports.UserData = UserData
module.exports.getUserId = getUserId;
module.exports.getToken = getToken;
module.exports.Login = Login;
module.exports.OtherUserData = OtherUserData;
module.exports.AddStory = AddStory;
module.exports.accpectRequest=accpectRequest;
module.exports.GETALLUSERS=GETALLUSERS;
module.exports.GetChatid=GetChatid;



