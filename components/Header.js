import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon  from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f6546a",
    alignItems: "stretch",
    justifyContent: "center",
  },

});

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />
      <Icon name="menu" size={30} color="#fff" alignItems="flex-end"/>
    </View>
  );
}