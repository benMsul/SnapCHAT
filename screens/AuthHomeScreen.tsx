import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { MainStackParamList } from "../navigations/MainNav";

interface AuthHomeScreenProps {
    navigation: NavigationProp<MainStackParamList>;
}
const AuthHomeScreen: React.FC<AuthHomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}><Ionicons name="logo-snapchat" size={100} color="#000" style={styles.logo}/>
        <Text style={styles.title}>Snapchat</Text>
      </View>

      <View style={styles.signView}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.signIn}>
            <Text style={styles.signText}>Sign In</Text>
            </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.signUp}>
            <Text style={styles.signText}>Sign Up</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce61c",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#000",
    padding: 2,
  },
  logoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  signView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signIn: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    marginRight: 5,

  },
  signUp: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    marginLeft: 5,
  },
  signText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default AuthHomeScreen;
