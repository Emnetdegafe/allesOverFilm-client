import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Logo from "../components/logo";
import Header from "../components/Header";
import Search from "../components/search";
import BarcodeIcon from "../components/Barcode-icon";
import Reviews from "../components/ReviewsList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoAndScanner}>
        <Logo />
        <BarcodeIcon />
      </View>
      <View style={styles.header}>
        <Header />
        <View>{/* <Search /> */}</View>
        <View style={{ flex: 1 }}>
          <Reviews />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  logoAndScanner: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  header: {
    paddingTop: 8,
    flex: 1,
  },
  input: {
    paddingTop: 5,
  },
});
