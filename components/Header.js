import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#e40066",
    justifyContent: "center",
    alignSelf: "stretch",
  },

});

export default function Header() {
  return (
    <TouchableOpacity activeOpacity={0.2} >
    <View style={styles.header}>
      <StatusBar style="light-content" />
      <Icon name="menu" size={30} color="#fff" />
    </View>
    </TouchableOpacity>

  );
}