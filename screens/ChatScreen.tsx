import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import AppHeader from "../components/AppHeader";

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <AppHeader />
        <Text style={styles.title}>Chat</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#000',
        position: 'absolute',
        top: 75,
        right: 175,
        fontSize: 15,
        fontWeight: '500'
    }
})

export default ChatScreen;