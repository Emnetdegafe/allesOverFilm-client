import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BarcodeReader from "../screens/BarcodeScanner";

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scanner: {
    width: 66,
    height: 58,
  },
});

export default function Scanner() {
  console.log("barcodescanner", barcodescanner);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name="barcode-scan" size={50} onPress={() => BarcodeReader} />
      </View>
    </TouchableOpacity>
  );
}
