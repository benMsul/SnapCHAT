import React from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import AppIcon from "./AppIcon";
import { useNavigation } from '@react-navigation/native';

const AppHeader = () => {
  const navigation = useNavigation();


    return (
          <View style={styles.header}>
              <AppIcon style={styles.headerIcon} AntName="user" color="#eee" size={20} onPress={()=>navigation.openDrawer()} />
            <AppIcon style={styles.headerIcon} AntName="search1" color="#eee" size={20} />
            <AppIcon style={styles.addUserIcon} AntName="adduser" color="#eee" size={20} onPress={()=>navigation.navigate(FriendsAddScreen)}/>
          </View>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 10,
        left: 0,
        padding: 10,
        flexDirection: 'row',
        marginTop: 40,
      },
      headerIcon: {
        width: 45,
        height: 45,
        marginHorizontal: 5,
        flexDirection: 'row',
      },
      addUserIcon: {
        width: 45,
        height: 45,
        marginHorizontal: 235,
      },
});

export default AppHeader;
