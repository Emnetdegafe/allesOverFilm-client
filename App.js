import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BarcodeScannerScreen from "./screens/BarcodeScannerScreen";
import HomeScreen from "./screens/HomeScreen";
import PriceAndReview from "./screens/PriceAndReview";
import ReviewDetail from "./screens/ReviewDetail";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
        <Stack.Screen name="BarCodeScanner" component={BarcodeScannerScreen} />
        <Stack.Screen name="PriceAndReview" component={PriceAndReview} />
      </Stack.Navigator>
    </NavigationContainer>
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
  }
})