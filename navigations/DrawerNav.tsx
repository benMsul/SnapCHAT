import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomNav } from "./BottomNav";
import DrawerConfig from "../components/DrawerConfig";

import SearchScreen from "../screens/SearchScreen";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
            <Drawer.Navigator 
            drawerContent={props => <DrawerConfig children={undefined} {...props} />}    
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: "#fce61c",
                drawerActiveTintColor: "#000",
                drawerLabelStyle: {
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center"
                }
            }}>
                <Drawer.Screen name="Settings" component={BottomNav} />
                <Drawer.Screen name="Search" component={SearchScreen} />
            </Drawer.Navigator>
    );
}

export default DrawerNav;