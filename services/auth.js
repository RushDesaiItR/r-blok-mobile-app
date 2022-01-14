
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
const UserData = async () => {
  let userId = await getUserId();

  const Url = `${HOST}/api/getuserbyid/61c7f10326b92738b4054661`;
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
  const Url = `${HOST}/api/getfriendsbyid/${id}`;
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
  console.log("-----GetPostsById-----id--", id)
  //const Url = `${HOST}/api/getfriendsbyid/${id}`;
  const Url = `${HOST}/api/gethomedatabyidtwo/61c7f10326b92738b4054661`;
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
      console.log("-----GetPostsById-------", error)
      return {
        error
      }

    });
}
const GetStoriesById = async (id) => {
  let userId = await getUserId();
  console.log("-----GetStoriesById-----id--", id)
  //const Url = `${HOST}/api/getfriendsbyid/${id}`;
  const Url = `${HOST}/api/gethomedatabyid/61c7f10326b92738b4054661`;
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
          imgaeUrl:data.friendlist[friend].imageUrl,
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
module.exports.GetStoriesById = GetStoriesById;
module.exports.GetPostsById = GetPostsById;
module.exports.Getfriendsbyid = Getfriendsbyid;
module.exports.UserData = UserData
module.exports.getUserId = getUserId;
module.exports.getToken = getToken;
module.exports.Login = Login;
module.exports.OtherUserData = OtherUserData;


