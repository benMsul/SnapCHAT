import React, {useContext, useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { MainStackParamList, MainStack } from "../navigations/MainNav";
import { AuthContext } from "../context/AuthContext";

interface LoginScreenProps {
  navigation: NavigationProp<MainStackParamList>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  const {login} = useContext(AuthContext);

  <MainStack />
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Ionicons name="logo-snapchat" size={100} color="#000" style={styles.logo}/>
        <Text style={styles.title}>Login</Text>
      </View>
      
      <View style={styles.emailView}>
        <Ionicons name="mail" size={30} color="#000" style={styles.icon}/>
        <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Email" placeholderTextColor="#000"  style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.passwordView}>
        <Ionicons name="lock-closed" size={30} color="#000" style={styles.icon}/>
        <TextInput value={password} onChangeText={text => setPassword(text)} placeholder="Password" placeholderTextColor="#000"  style={styles.input} secureTextEntry={true} />
        <TouchableOpacity onPress={() => {}}>
            <Text style={{color: "#000"}}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={() => {login(email, password)}} style={styles.LoginBtn}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 30}}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerView}>
            <Text style={{color: "#fff", fontSize: 15}}>New to this app?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: "#fce61c", fontSize: 15}}> Register</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fce61c",
        justifyContent: "center",
        alignItems: "center",
      },
      title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#000",
        padding: 2,
        paddingHorizontal: 30,
      },
      logoView: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 70,
      },
      logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
      },
        icon: {
            marginRight: 5,
        },
        input: {
            flex: 1,
            paddingVertical: 0,
        },
        emailView: {
            flexDirection: "row",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 8,
            margin: 10,
            marginTop: 50,
        },
        passwordView: {
            flexDirection: "row",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 8,
            margin: 10,
            marginBottom: 50,
        },
        LoginBtn: {
            backgroundColor: "#000",
            padding: 10,
            borderRadius: 10,
            width: "85%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
        },
        registerView: {
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 100,
            backgroundColor: "#000",
            borderRadius: 10,
            padding: 3,
        },
});

export default LoginScreen;