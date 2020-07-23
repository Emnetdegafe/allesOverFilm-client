import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BarcodeScanner from "./screens/BarcodeScanner";
import Logo from "./components/logo";
import Scanner from "./components/scanner"
import Header from "./components/Header"
import Icon  from "react-native-vector-icons/Feather";


export default function App() {
  const styles = StyleSheet.create({
      icon: {
        paddingTop: 60,
        justifyContent: "center",
        // padding: 10,
      }
  })
  return (
    <TouchableOpacity activeOpacity="0.2">
    <View style={{
      justifyContent: "space-between",
    }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
      }}
      >
      <Logo />
      <Icon style={styles.icon}name="search" size={30} color="#000000" />
      <Scanner/>

      {/* <BarcodeScanner /> */}
    </View>
    <View style={{     
      paddingTop: 10
    }}>
          <Header/>
          </View>
      </View>
    </TouchableOpacity>
  );
}
