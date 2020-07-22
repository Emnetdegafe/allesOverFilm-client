import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BarcodeScanner from "./screens/BarcodeScanner";
import Logo from "./components/logo";
import Scanner from "./components/scanner"

export default function App() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
      }}
    >
      <Logo />
      <Scanner/>
      {/* <BarcodeScanner /> */}
    </View>
  );
}
