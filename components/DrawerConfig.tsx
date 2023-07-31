import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, ScrollViewProps } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";

const DrawerConfig = (props) => {
    const {logout} = useContext(AuthContext);

    return (
        <View style={{flex: 1, backgroundColor: "#dbdad9"}}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.bottomDrawerSection}>
                <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
                    <View style={styles.logout}>
                        <Ionicons name="ios-log-out" size={30} color="black" />
                        <Text style={styles.logoutText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomDrawerSection: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#000",
        backgroundColor: "#fce61c",
        alignItems: "center"
    },
    logout: {
        flexDirection: "row",
        alignItems: "center"
    },
    logoutText: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 5
    }
})

export default DrawerConfig;