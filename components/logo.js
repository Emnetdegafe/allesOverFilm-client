import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Logo() {
  return (
    <TouchableOpacity activeOpacity={0.2}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 50,
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
