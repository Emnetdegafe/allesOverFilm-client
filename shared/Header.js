import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";




export default function Header() {

  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity activeOpacity={0.2}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#fff" onPress={openMenu} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#e40066",
    alignSelf: "stretch",
      // paddingTop: 8,
      // flex: 1,
  },
});
