import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AuthHomeScreen from "../screens/AuthHomeScreen";
import { BottomNav } from "./BottomNav";
import UsersListScreen from "../screens/UsersListScreen";

const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  AuthHome: undefined;
  Login: undefined;
  Register: undefined;
  Index: undefined;
  Users: undefined;
};

export const MainStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AuthHome"
          component={AuthHomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Index"
          component={BottomNav}
        />
        <Stack.Screen
          name="Users"
          component={UsersListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const AppStack = () => {

}
