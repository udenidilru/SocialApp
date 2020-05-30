import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class LoginScreen extends React.Component {
    render(){
        return (
            <View style={StyleSheet.container}>
                <Text>Login Screen</Text>
            </View>
        );
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
});