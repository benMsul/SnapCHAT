import {Stack} from 'expo-router';

export const Layout = () => {
    return <Stack 
        initialRouteName='index'
        screenOptions={{
            headerShown: false
        }}
    />;
}

export default Layout;