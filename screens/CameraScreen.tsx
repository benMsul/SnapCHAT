import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera';
import AppIcon from '../components/AppIcon';
import { Modal, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../navigations/MainNav';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


interface CameraScreenProps {
  navigation: NavigationProp<MainStackParamList>;
}

const CameraScreen: React.FC<CameraScreenProps> = ({navigation}) => {
  const [allowedCamera, setAllowedCamera] = useState(false);
  const [typeCamera, setTypeCamera] = useState(CameraType.back);
  const [flash, setFlash] = useState('off');
  const [imagePreview, setImagePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const changeFlashMode = () => {
    setFlash(flash === 'off' ? 'torch' : 'off');
  };

  const changeCameraType = () => {
    setTypeCamera((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  useEffect(() => {
    allowPermissions();
  }, []);

  
const allowPermissions = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Location permission not granted');
    }
    setAllowedCamera(true);
  } catch (error) {
    console.log('Error loading camera:', error);
  }
};

  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (!cameraRef) {
      return;
    }
    try {
      const pic = await cameraRef.current.takePictureAsync();
      setImagePreview(pic.uri);
      setIsOpen(true);
    } catch (error) {
      console.log('error taking picture: ', error);
    }
  };

  const closeImagePreview = () => {
    setImagePreview(null);
    setSelectedImage(null);
    setIsOpen(false);
  };
  

  const openGallery = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  
    if (status !== 'granted') {
      console.log('Permission to access gallery was denied');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      setSelectedImage(selectedAsset.uri);
      setIsOpen(true);
    }
  };

  if (!allowedCamera) {
    return (
      <View style={styles.notAllowed}>
        <TouchableOpacity style={styles.btn} onPress={allowPermissions}>
          <Text style={styles.btnText}>Allow Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (imagePreview || selectedImage) {
    function UserListScreen(): void {
      throw new Error('Function not implemented.');
    }

    return (
      <Modal animationType="fade" visible={isOpen}>
        <Image
          source={{ uri: imagePreview || selectedImage }}
          style={{ height: '100%', width: '100%' }}
        />
        <View style={styles.actionBottom}>
          <AppIcon
            IonName="ios-send"
            size={25}
            color="black"
            style={styles.sendBtn}
            onPress={()=>navigation.navigate('Users')}
          />
        </View>
        <View style={styles.closeBtn}>
          <AppIcon
            AntName="closecircleo"
            size={25}
            color="yellow"
            onPress={closeImagePreview}
          />
        </View>
      </Modal>
    );
  }
  
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={typeCamera} flashMode={flash} ref={cameraRef}>
        <TouchableOpacity style={styles.captureBtn} onPress={takePicture} />
        <AppHeader />
        <View style={styles.sideItem}>
          <AppIcon
            style={styles.sideIcons}
            IonName="flash-outline"
            size={20}
            color="#eee"
            onPress={changeFlashMode}
          />
          <AppIcon
            style={styles.sideIcons}
            IonName="camera-reverse-outline"
            size={20}
            color="#eee"
            onPress={changeCameraType}
          />
            <AppIcon onPress={openGallery}
              style={styles.sideIcons}
              IonName="ios-images"
              size={20}
              color="#eee"
            />
          <AppIcon
            style={styles.sideIcons}
            IonName="ios-musical-notes-outline"
            color="#eee"
            size={20}
          />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  notAllowed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
  },
  captureBtn: {
    position: 'absolute',
    bottom: 20,
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: '#eee',
    borderWidth: 6,
    alignSelf: 'center',
  },
  sideItem: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    marginTop: 100,
    marginRight: 3,
  },
  sideIcons: {
    width: 45,
    height: 45,
    marginVertical: 10,
  },
  actionBottom: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  sendBtn: {
    backgroundColor: 'yellow',
    left: 310,
  },
  closeBtn: {
    padding: 10,
    position: 'absolute',
    top: 40,
  },
});

export default CameraScreen;
