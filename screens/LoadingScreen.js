import React from 'react';
import {
  StyleSheet,View,Text, ActivityIndicator} from 'react-native';

export default class LoadingScreen extends React.Component {
    render(){
        return (
            <View style={StyleSheet.container}>
                <Text>Loading Screen</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
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