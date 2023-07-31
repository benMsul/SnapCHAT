import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface AppIconProps {
  AntName?: string;
  IonName?: string;
  style?: any;
  color?: string;
  size?: number;
  onPress?: () => void;
}

const AppIcon: React.FC<AppIconProps> = ({
  AntName,
  IonName,
  style,
  color,
  size,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.icon, style]} onPress={onPress}>
      {AntName && <AntDesign name={AntName as any} size={size} color={color} />}
      {IonName && <Ionicons name={IonName as any} size={size} color={color} />}
    </TouchableOpacity>
  );
};
  

const styles = StyleSheet.create({
    icon: {
        height: 60,
        width: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
});

export default AppIcon;