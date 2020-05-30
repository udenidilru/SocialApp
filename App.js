import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import{createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'

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

const AppStack = createStackNavigator({
  Home: HomeScreen
})
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator({
    Loading:LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Loading"
  }
  )
)

//export default App;
