import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BASE_URL } from "../components/config";
import { FlatList } from "react-native-gesture-handler";

interface UserData {
  [x: string]: any;
  username: string;
}

const FriendsAddScreen = () => {
  const [data, setData] = useState<UserData[]>([]);

  const getApiData = async () => {
    const url = `${BASE_URL}/user`;
    let response = await fetch(url);
    let result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>FriendsAddScreen</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.username}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FriendsAddScreen;
