import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Logo from "../components/logo";
import Header from "../components/Header";
import Search from "../components/search";
import BarcodeIcon from "../components/Barcode-icon";
import Reviews from "../components/Reviews";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.logoAndScanner}>
        <Logo />
        <BarcodeIcon />
      </View>
      <View style={styles.header}>
        <Header />
        <View>
          <Search />
        </View>
        <View>
        <Reviews />
        </View>
      </View>
    </View>
  );
}
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
  input: {
    paddingTop: 5,
  },
});