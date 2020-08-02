import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";


export default function BarcodeIcon({ BarcodeScannerScreen }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon
          name="barcode-scan"
          size={70}
          onPress={() => navigation.navigate("BarCodeScanner")}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation:5,
//     shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 3.84,
    
  },
  scanner: {
    paddingTop: 30,
    paddingRight: 50,
    width: 66,
    height: 58,
  },
});