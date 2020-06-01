import React from 'react';
import {
  StyleSheet,View,Text,SafeAreaView,TouchableOpacity, Image,TextInput} from 'react-native';
  //import {Ionicons} from '@expo/vector-icons'
  //import Ionicons from 'react-native-vector-icons/Ionicons';
  import { Icon } from 'react-native-elements'

export default class PostScreen extends React.Component {
    render(){
        return (
            <SafeAreaView style={StyleSheet.container}>
                <View style={StyleSheet.header}>
                    <TouchableOpacity>
                        <Icon style={{ alignSelf:"flex-start",marginLeft:10}} type='font-awesome' name="arrow-left" size={24} color="#D8D9DB"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontWeight: "500" , alignSelf:"flex-end",marginRight:10}}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={require("../assets/abc.jpg")} style={styles.avatar}></Image>
                    <TextInput 
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1}}
                        placeholder="Want to share something."
                        ></TextInput>
                </View>

                <TouchableOpacity style={styles.photo}>
                    <Icon type='font-awesome' name="camera" size={32} color="#D8D9DB"/>
                </TouchableOpacity>
            </SafeAreaView>
           
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    },
    arrow: {
        alignSelf:"flex-start"
    }
}
)