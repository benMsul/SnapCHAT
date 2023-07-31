import React from "react";
import { View, StyleSheet } from "react-native";
import IndexNav from "../navigations/IndexNav";
import { AuthProvider } from "../context/AuthContext";


export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <IndexNav />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
