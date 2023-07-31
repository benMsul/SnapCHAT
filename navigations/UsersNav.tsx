import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomNav } from './BottomNav';
import FriendsAddScreen from '../screens/FriendsAddScreen';

const Stack = createNativeStackNavigator();

export type UsersStackParamList = {
    Friends: undefined;
    Home: undefined;
  };

export const UsersStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomNav}
        />
        <Stack.Screen name="Friends"
        component={FriendsAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};