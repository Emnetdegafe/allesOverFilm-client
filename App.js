import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Logo from "./components/logo";
import Scanner from "./components/Barcode-icon";
import Header from "./components/Header";
import Search from "./components/search";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
    },
    logAndScanner: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "stretch",
    },
    header: {
      paddingTop: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.logAndScanner}>
        <Logo />
        <Scanner />
      </View>
      <View style={styles.header}>
        <Header />
        <Search />
      </View>
      <View>{/* <BarcodeReader /> */}</View>
    </View>
  );
}
