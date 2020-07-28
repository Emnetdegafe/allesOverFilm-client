import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingRight: 50,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    paddingTop: 30,
    paddingRight: 50,
    padding: 40,
    width: 70,
    height: 50,
  },
});

export default function Logo() {
  return (
    <TouchableOpacity activeOpacity={0.2} >
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../images/logo.png")} />
    </View>
    </TouchableOpacity>
  );
}
