import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../screens/ChatScreen";
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";
import StoriesScreen from "../screens/StoriesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const BottomNav = () => {

    const Icons = {
        Map: 'map',
        Chat: 'chatbox',
        Camera: 'camera',
        Story: 'people'
    }


    return (

        <Tab.Navigator screenOptions={({route}) =>{
            return {
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {backgroundColor: '#000'},
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#fce61c',
                tabBarIcon: ({ color, size}) => {
                    const iconName = Icons[route.name as keyof typeof Icons];
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            }
        }}>
            <Tab.Screen name="Camera" component={CameraScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Story" component={StoriesScreen} />
        </Tab.Navigator>
    )
}