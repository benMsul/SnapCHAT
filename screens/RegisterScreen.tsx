import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { MainStack, MainStackParamList } from "../navigations/MainNav";
import { AuthContext } from "../context/AuthContext";
import * as ImagePicker from 'expo-image-picker';

interface RegisterScreenProps {
  navigation: NavigationProp<MainStackParamList>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [isProfilePictureSelected, setIsProfilePictureSelected] = useState(false);

  const { register } = useContext(AuthContext);

  const removeProfilePicture = () => {
    setProfilePicture(null);
    setIsProfilePictureSelected(false);
  };

  const selectProfilePicture = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled && result.assets.length > 0) {
      setProfilePicture(result.assets[0].uri);
      setIsProfilePictureSelected(true);
    }
  };
  
  const handleRegister = () => {


    register(username, email, password, profilePicture);
  };

  

  <MainStack />
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Ionicons name="logo-snapchat" size={100} color="#000" style={styles.logo}/>
        <Text style={styles.title}>Register</Text>
      </View>
      
      <View style={styles.emailView}>
        <Ionicons name="person" size={30} color="#000" style={styles.icon}/>
        <TextInput value={username} onChangeText={text => setUsername(text)} placeholder="UserName" placeholderTextColor="#000"  style={styles.input} />
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

      <View style={styles.profilePictureContainer}>
        {profilePicture && (
          <>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            <TouchableOpacity onPress={removeProfilePicture}>
              <Text style={styles.removeProfilePictureText}>Remove Profile Picture</Text>
            </TouchableOpacity>
          </>
        )}
        {!profilePicture && (
          <TouchableOpacity onPress={selectProfilePicture}>
            <Text style={styles.profilePictureText}>Choose Profile Picture</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <TouchableOpacity onPress={handleRegister} style={styles.RegisterBtn}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30 }}>Register</Text>
      </TouchableOpacity>

        <View style={styles.registerView}>
            <Text style={{color: "#fff", fontSize: 15}}>Already registered?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: "#fce61c", fontSize: 15}}> Login</Text>
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
        },
        passwordView: {
            flexDirection: "row",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 8,
            margin: 10,
            marginBottom: 30,
        },
        RegisterBtn: {
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
        profilePictureContainer: {
          alignItems: 'center',
          marginBottom: 20,
        },
        profilePicture: {
          width: 100,
          height: 100,
          borderRadius: 50,
          marginBottom: 10,
        },
        profilePictureText: {
          color: '#fff',
          fontSize: 15,
          backgroundColor: '#000',
        },
        removeProfilePictureText: {
          color: 'red',
          fontSize: 15,
          marginTop: 5,
          fontWeight: 'bold',
        },        
});

export default RegisterScreen;