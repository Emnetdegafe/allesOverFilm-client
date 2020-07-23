import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
    container: {
        borderColor: "blue",
        boarder: 1 

    },
  filmBox: {
    backgroundColor: "#f6546a",
    alignItems: "stretch",
    justifyContent: "center",
  },

});

export default function Review() {
  return (
    <TouchableOpacity activeOpacity="0.2">
    <View style={styles.container}>
      <StatusBar style="light-content" />
    </View>
    </TouchableOpacity>

  );
}