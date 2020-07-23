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
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

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
  return (
    <View style={styles.container}>
      {/* <Pressable 
      // onPress={() => {}}
      > */}
      <Icon name="barcode-scan" size={50} />
      <StatusBar style="auto" />
      {/* </Pressable> */}
    </View>
  );
}
