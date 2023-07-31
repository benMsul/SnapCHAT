import { NavigationContainer } from "@react-navigation/native";
import React, {useContext} from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { MainStack } from "./MainNav";
import DrawerNav from "./DrawerNav";

const IndexNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading) {
        return (
        <View style={styles.isLoading}>
            <ActivityIndicator size={'large'} />
        </View>
        );
    }


    return (
        <NavigationContainer independent={true}>
            {userToken !== null ? <DrawerNav /> : <MainStack />}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    isLoading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default IndexNav;