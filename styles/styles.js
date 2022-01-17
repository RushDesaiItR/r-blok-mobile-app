import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {BGCOLOR, WHITE, PURPLE, HEADING_TEXT, DESCRIPTION, TEXT, BLACK, LIGHT_GRAY, DARK_GRAY, CARD1, CARD2, CARD3} from "../constants/color"
export default StyleSheet.create({
    setBackground:{
        backgroundColor:BGCOLOR,
        flex:1,
        flexDirection:'column',
        width:'100%',
        height:'100%'
    },
    loginHeaderBox:{
        height:'15%',
         width:'100%',
        backgroundColor:WHITE,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        elevation:5
    },
    inputError:{
       color:"red",
       fontSize:12,
       fontWeight:"300"
    },
    loginBox:{
        marginTop:'5%',
        height:'80%',
        width:'100%',
        backgroundColor:WHITE,
        elevation:5,
        borderRadius:3,
        padding:10
        
    },
    loginBoxHeader:{
       color:BLACK,
        fontSize:HEADING_TEXT,
        fontWeight:'bold'
    },
    textInput:{
     borderBottomWidth:2, 
     borderBottomColor:DARK_GRAY,
     padding:0,
     paddingTop:3,
     paddingBottom:3
     },
     loginGroup:{
       marginTop:10
     },
     textInputLabel:{
        color:DARK_GRAY
     },
     buttonStyle:{
         padding:10,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:PURPLE,
         elevation:5,
         borderRadius:5,
         marginTop:10
     },
     buttonText:{
         textAlign:'center',
         color:WHITE,
         fontWeight:'bold',
       
     },



    //  -------------------------------------home page style-----------------------------


    homePageContainer:{
        flex:1,
        width:'100%',
        height:'100%',
        flexDirection:"column",
        paddingVertical:20,
        position:"relative"
        // justifyContent:"space-between",
        
        // paddingHorizontal:20
    },
    homePageHeader:{
       flexDirection:"column",
       height:"10%"
       
    },
    homePageTitle:{
        color:BLACK,
        fontSize:30,
        fontWeight:"500"
    },
    homePageDes:{
        color:BLACK,
        fontSize:20,
        fontWeight:"200"
    },
    homePageTopBar:{
        paddingVertical:20,
        flexDirection:"row",
       
       
    },
    homePageTopBarText:{
        marginHorizontal:20
    },
  
    homePageNewGuys:{
        
    },
    homePageStoryCardSidebarButtonIcon:{
       fontSize:20,
       marginVertical:10,
    },
    homePageStoryCard:{
        borderRadius:30,
        width:300,
       
        marginRight:10,
        justifyContent:"center",
        alignItems:"center"
      //  alignItems:"flex-end"
    },
    homePageStory:{
        height:"40%",
        width:"90%",
       marginHorizontal:"5%"
    },
    homePagePosts:{
      
       height:"80%",
      
    },
    homePageStoryCardSidebar:{
      elevation:10,
      right:5,
       borderTopLeftRadius:15,
      borderBottomLeftRadius:15,
   // borderRadius:10,
      flexDirection:"column",
      padding:20,
      backgroundColor:WHITE,  
      position:"absolute",
      zIndex:2,
      
    },
    homePageStoryCardInner:{
        width:"96%",
        height:"98%",
        borderRadius:20,
        position:"relative"
    },
    
    homePageNewGuy:{
        width:40,
        height:40,
        borderBottomColor:CARD1,
        borderBottomWidth:5,
        borderRightColor:CARD1,
        borderRightWidth:5,
        borderLeftColor:CARD1,
        borderLeftWidth:5,
        borderTopColor:CARD1,
        borderTopWidth:5,
        borderRadius:360,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginRight:10
    },
    homePageNewGuyInner:{
        width:30,
        height:30,
      
        borderRadius:360,
       
    },
    // -------------------------------------sign in------------------------------------
signin:{
 flex:1,
 flexDirection:"row",
 backgroundColor:"#3D2892",
 height:"100%",
 width:"100%",
 flexDirection:"column",
 position:"relative"
 
},
signinInnerTop:{
    height:"30%",
    width:"100%",
    flexDirection:"column",
    alignItems:"center",
   justifyContent:"center"
},
signupInnerTop:{
    height:"20%",
    width:"100%",
    flexDirection:"column",
    alignItems:"center",
   justifyContent:"center"
},
signupInnerBottom:{
    height:"80%",
    width:"100%",
    backgroundColor:WHITE,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    flexDirection:"column",
},
signinInnerBottom:{
    height:"70%",
    width:"100%",
    backgroundColor:WHITE,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    flexDirection:"column",
    
    
},
signinFormHeader:{
    fontSize:30,
    marginTop:"20%",
    fontWeight:"bold",
},
signinHeader:{
  color:WHITE,
  fontSize:30,
  fontWeight:"bold",
  textAlign:"center"
},
signinDes:{
    color:WHITE
},
signinModal:{
    padding:10,
    position:"absolute",
    width:"80%",
    height:"30%",
    backgroundColor:"red",
    marginTop:"40%",
    marginLeft:"10%",
    backgroundColor:WHITE,
    elevation:11,
    borderRadius:5,
    flexDirection:"column",
   
},
searchBarInput:{
    borderRadius:10,
    backgroundColor:"#e0e0eb",
    width:"80%",
    padding:7,
    color:WHITE,
    height:"100%",
},
searchBarButtonContainer:{
     flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#3D2892",
    height:"100%",
    marginRight:0,
    borderRadius:360
},
searchBarButton:{
   paddingHorizontal:13,
   padding:10,
   color:"white"
},
searchBarContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:40,
   paddingHorizontal:20
},
userPost:{
    height:200,
    marginVertical:20,
    elevation:10,
    width:"90%",
    marginHorizontal:"5%",
    elevation:10
},
userPostContainer:{
    position:"relative"
},
userPostHeader:{
    flexDirection:"row",
    alignItems:"center",
    position:"absolute",
    zIndex:2,
  //  backgroundColor:"rgba(115, 115, 115,.0)",
    left:0,
    right:0,
    padding:10,
},
userPostImage:{
   height:"100%",
   zIndex:1,
   elevation:10,
   borderRadius: 10,
   overflow: "hidden",
   
},
userPostFotterLogo:{
   fontSize:25,
   fontWeight:"bold",
   color:"#3D2892",
   
 //  color:"#FF6066"
},
userPostHeaderText:{
   fontSize:16,
   fontWeight:"bold",
   color:"#3D2892"
},
userPostFotter:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    left:0,
    right:0,
    padding:10,
  //  backgroundColor:"rgba(115, 115, 115,.2)",
    bottom:0
},
// -------------------------user Page

userPageContainer:{
   flexDirection:"column",
   width:"100%"
},
userPageImage:{
    height:100,
    width:100,
    margin:5,
    borderRadius:360
},
userPageTitle:{
   fontSize:20,
   fontWeight:"600",
   color:"#3D2892",
   marginTop:5
},
userPageDes:{
    fontSize:15,
    fontWeight:"600",
    color:"#3D2892",
    marginTop:5
},
userPageAllInfo:{
    backgroundColor:"#a99be4", 
    height:140,
     width:"48%",
    marginTop:10,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
},
userPageAllInfoLogo:{
     fontSize:30,
      // backgroundColor:"white",
     //  paddingVertical:10,
     //  paddingHorizontal:14,
     color:"white",
     fontWeight:"bold",
     borderRadius:360
},
userPageAllInfoText:{
    color:"#3D2892",
    marginTop:5,
    fontSize:30
},
userPageAllInfoDes:{
    color:"white"
},

///111111111111111111111111111111111111111111111111111111111111111
headerFriendList:{
   height:60,
   elevation:8,
   width:"100%",
   padding:10,
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
   backgroundColor:"#3D2892"

},
headerFriendListArrow:{
    fontSize:20,
    color:"white"
},
headerFriendListTitle:{
    fontSize:17,
    color:"white"
},
list:{
//    height:100,
   paddingHorizontal:10,
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
   paddingVertical:10
},
listImage:{
    width:60,
    height:60,
    borderRadius:70
},
listName:{
    marginLeft:15,
    fontSize:18
},
listButton:{
    paddingVertical:10,
    paddingHorizontal:14,
    backgroundColor:"#3D2892",
    borderRadius:10
},

///----------------------------------addImage page
addImage:{
   padding:10,
   flex:1,
//    backgroundColor:"#3D2892",
   borderRadius:10,
   
},
addImageMenus:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:50
},
addImageMenu:{
    padding:10,
   backgroundColor:"#3D2892",
   width:"45%",
   height:70,
   borderRadius:10,
   alignItems:"center",
   textAlign:"center",
   justifyContent:"center",
   elevation:16
},
addImageMenuIcon:{
    fontSize:25,
},
addImageMenuIconContainer:{
    marginTop:"-50%",
    borderRadius:360,
    width:60,
    height:60,
    borderWidth:10,
    borderColor:"#3D2892",
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center"
},
imageForm:{
 
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  marginVertical:10,
  width:"100%",
},
imageFormImage:{
    width:100,
    height:100,
    fontSize:100,
    borderRadius:360,
    
},
imageFormYes:{
  marginTop:"20%",  
  width:"100%",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
},
imageFormNo:{
    marginTop:"20%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
   
},
imageFormInput:{
    padding:5,
    width:"90%",
    borderWidth:2,
    borderColor:"#3D2892",
    marginVertical:10,
    borderRadius:5
},
imageFormButton:{
    backgroundColor:"#3D2892",
    width:"90%",
    borderRadius:10
},
////----------------------------------------------------new story
newStory:{
   width:200,
   height:"70%",
    marginHorizontal:20,
   marginVertical:10,
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"center",
   borderRadius:10
   
},
newStoryInner:{
    width:"95%",
   height:"90%",
   backgroundColor:"red",
   borderRadius:10,
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"center"
},
newStoryTitle:{
  fontSize:25,
  fontWeight:"bold"
},
newStoryImage:{
   width:"100%",
   height:"100%"
},
storyFullPage:{
    position:"absolute",
    backgroundColor:"rgba(77, 77, 77,.3)",
    top:0,
    left:0,
    right:0,
    bottom:0,
    zIndex:5,
   
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
},
storyFullPageInner:{
    backgroundColor:"white",
    width:"100%",
    height:"100%",
    borderRadius:10,
    padding:20,

},
storyFullPageBoxImg:{
    width:windowWidth,
    height:windowHeight/2,
    marginRight:10
},
storyFullPageBoxIndicatorContainer:{
    width:windowWidth - 10,
    marginHorizontal:5
   
},
storyFullPageBoxIndicator:{
    backgroundColor:DARK_GRAY,
    borderRadius:10,
    height:10,
    marginHorizontal:5
},
activeStoryFullPageBoxIndicator:{
    backgroundColor:"#3D2892",
    borderRadius:10,
    height:10,
    marginHorizontal:5
},
storyFullPageInnerHeader:{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
   marginVertical:10
},
storyFullPageInnerHeaderText:{
    fontSize:20,
    fontWeight:"bold"
},
storyFullPageInnerHeaderCount:{
    width:30,
    height:30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#3D2892",
    borderRadius:360,
   
}
});







