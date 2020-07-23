import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingRight: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function Logo() {
  return (
    <TouchableOpacity activeOpacity="0.2">
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../images/logo.png")} />
    </View>
    </TouchableOpacity>
  );
}