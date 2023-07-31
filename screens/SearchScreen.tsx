import React, { JSXElementConstructor, ReactElement } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import { BASE_URL } from "../components/config";
import { useEffect, useState } from "react";
import { ListRenderItemInfo } from "react-native";

const SearchScreen = () => {
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/user`)

        const fetchData = async (url) => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log(error);
            }
        }

    }, []);


    const handleSearch = (query) => {
        setSearch(query);
        console.log(query);
    }


    return (
        <SafeAreaView>
            <TextInput placeholder="Search" clearButtonMode="always" autoCapitalize="none"  style={styles.searchBox} autoCorrect={false} onChangeText={(query) => handleSearch(query)} />
        <FlatList data={data} keyExtractor={(item) => item.username} renderItem={({item}) => (
            <View>
                <Image source={{uri: item.profilePicture}} />
                <View>
                    <Text>{item.username}</Text>
                    <Text>{item.email}</Text>

                </View>
            </View>
        )}
            
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
    }
});


export default SearchScreen;

