import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
//import {Ionicons} from '@expo/vector-icons'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import{createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
import { Icon } from 'react-native-elements'
import * as firebase from 'firebase';

//var firebaseConfig = FirebaseKeys;

var firebaseConfig = {
  apiKey: "AIzaSyBLxFR1aQ3lqID7i-sN8y4qFn-keYRRMxk",
  authDomain: "socialapp-27882.firebaseapp.com",
  databaseURL: "https://socialapp-27882.firebaseio.com",
  projectId: "socialapp-27882",
  storageBucket: "socialapp-27882.appspot.com",
  messagingSenderId: "623708467460",
  appId: "1:623708467460:web:22447bd593640a9baf6051",
  measurementId: "G-G73ET70XJ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  // {
  // default: createBottomTabNavigator(
    
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' name="home" size={24} color={tintColor}/>
        }
      },
      Message: {
        screen: MessageScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' name="comments" size={24} color={tintColor}/>
        }
      },
      // Post: {
      //   screen: PostScreen,
      //   navigationOptions: {
      //     tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' name="comments" size={24} color={tintColor}/>
      //   }
      // },
      Post: {
        screen: PostScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => 
          <Icon 
            name="add-circle-outline" 
            size={48} 
            color={tintColor} 
            style={{
              shadowColor: "E9446A" ,
              shadowOffseet: { width:0,height:0},
              shadowRadius: 10,
              shadowOpacity:0.3
            }}
            />
        }
      },
      Notification: {
        screen: NotificationScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' name="bell"  size={24} color={tintColor}/>
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' name="user" size={24} color={tintColor}/>
        }
      }
    },
  
    {
      // defaultNavigationOptions: {
      //   tabBarOnPress: ({navigation, defaultHandler}) => {
      //     if(navigation.state.key == "Post"){
      //       navigation.navigate("postModel")
      //     }else{
      //       defaultHandler()
      //     }
      //   }
      // },
      tabBarOptions: {
        activeTintColor: "#161F3D",
        inactiveTintColor: "#B8BBC4",
        showLabel:false
      }
    }
  
// ),
    // postModal: {
    //   screen: PostScreen
    // }
  // } ,
  // {
  //   mode: "model",
  //   headerMode: "none",
  //   initialRouteName: "postModal"
  // } 
);


const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator({
    Loading:LoadingScreen,
    App: AppTabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: "Loading"
  }
  )
)

//export default App;
