import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL } from '../components/config';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: '',
  });

  const register = async (username, email, password, profilePicture) => {
    setIsLoading(true);
  
    try {
      let compressedImage = null;
  
      if (profilePicture) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
        if (status !== 'granted') {
          console.log('Permission to access media library denied.');
          setIsLoading(false);
          return;
        }
  
        const options = {
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          maxWidth: 300,
          maxHeight: 300,
          quality: 0.5,
        };
  
        const response = await ImagePicker.launchImageLibraryAsync(options);
  
        if (response.canceled) {
          console.log('Image selection canceled.');
          setIsLoading(false);
          return;
        } else if (response.error) {
          console.log('ImagePicker Error:', response.error);
          setIsLoading(false);
          return;
        }
  
        compressedImage = response.base64;
      }
  
      const requestData = {
        username,
        email,
        password,
        profilePicture: compressedImage || '',
      };
  
      const response = await axios.post(`${BASE_URL}/user`, requestData);
  
      const { data } = response;
      setUserInfo(data);
      setUserToken(data.token);
  
      AsyncStorage.setItem('userInfo', JSON.stringify(data));
      AsyncStorage.setItem('userToken', data.token);
  
      Alert.alert('Register Success!');
    } catch (error) {
      console.log('register error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

    const login = (email, password) => {
        setIsLoading(true);
        axios.put(`${BASE_URL}/user`, {
            email,
            password
        })
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.data.token);

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.data.token);

            console.log(userInfo);
            console.log('userToken: ', userInfo.data.token);
        })
        .catch(e => {
            console.log(`login error: ${e}`);
        })

        setIsLoading(false);
    }

    const showUser = (username, profilePicture) => {
      axios.get(`${BASE_URL}/user`, {
        username,
        profilePicture
      })
      .then(res => {
          let userInfo = res.data;
          setUserInfo(userInfo);
          setUserToken(userInfo.data.token);
      })
      .catch(e => {
          console.log(`login error: ${e}`);
      })

      setIsLoading(false);
  }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
          setIsLoading(true);
          let userInfo = await AsyncStorage.getItem('userInfo');
          let userToken = await AsyncStorage.getItem('userToken');
      
          if (userInfo) {
            try {
              userInfo = JSON.parse(userInfo);
            } catch (e) {
              console.log('Error parsing userInfo:', e);
            }
          }
      
          console.log('userToken:', userToken);
          console.log('parsed userInfo:', userInfo);
      
          if (userInfo) {
            setUserToken(userToken);
            setUserInfo(userInfo);
          }
      
          setIsLoading(false);
        } catch (e) {
          console.log('isLoggedIn error:', e);
        }
      };
      

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{register, login, logout, isLoading, userToken}} >
            {children}
        </AuthContext.Provider>
    );
}