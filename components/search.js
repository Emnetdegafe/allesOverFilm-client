import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingTop: 60,
    justifyContent: "center",
    // padding: 10,
  },
});

export default function Search() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <TextInput placeholder="type here..." />
        <Icon style={styles.icon} name="search" size={30} color="#000000" />
      </View>
    </TouchableOpacity>
  );
}
