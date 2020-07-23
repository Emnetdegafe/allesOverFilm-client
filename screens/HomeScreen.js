import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Logo from "../components/logo";
import Header from "../components/Header";
import Search from "../components/search";
import BarcodeIcon from "../components/Barcode-icon";
export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
    },
    logoAndScanner: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    header: {
      paddingTop: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style = {styles.logoAndScanner}>
        <Logo />
        <BarcodeIcon />
      </View>
      <View style={styles.header}>
        <Header />
      </View>
    </View>
  );
}