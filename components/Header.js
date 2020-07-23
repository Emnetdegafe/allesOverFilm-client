import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#f6546a",
    alignItems: "stretch",
    justifyContent: "center",
  },

});

export default function Header() {
  return (
    <TouchableOpacity activeOpacity="0.2">
    <View style={styles.header}>
      <StatusBar style="light-content" />
      <Icon name="menu" size={30} color="#fff" alignItems="flex-end"/>
    </View>
    </TouchableOpacity>

  );
}