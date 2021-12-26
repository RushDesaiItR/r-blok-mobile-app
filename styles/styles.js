import { StyleSheet } from "react-native";
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
    homePageStory:{
        height:500,
        marginTop:20,
        paddingHorizontal:20,
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
        height:"100%",
        marginRight:10,
        justifyContent:"center",
        alignItems:"center"
      //  alignItems:"flex-end"
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
    marginVertical:30,
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
   zIndex:1
},
userPostFotterLogo:{
   fontSize:25,
   fontWeight:"bold",
   color:DARK_GRAY,
   
 //  color:"#FF6066"
},
userPostHeaderText:{
   fontSize:16,
   fontWeight:"400",
   color:"#FF6066"
},
userPostFotter:{
    flexDirection:"row",
    alignItems:"center",
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
    color