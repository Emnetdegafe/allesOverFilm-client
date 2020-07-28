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
import {useNavigation} from "@react-navigation/native"
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  scanner: {
    paddingTop: 30,
    paddingRight: 50,
    width: 66,
    height: 58,
  },
});

export default function BarcodeIcon({BarcodeScannerScreen}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name="barcode-scan" size={60} onPress={() => navigation.navigate("BarCodeScanner")} />
      </View>
    </TouchableOpacity>
  );
}
