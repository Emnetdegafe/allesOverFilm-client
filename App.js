import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./Router/Drawer"

import About from "./screens/About";
import HomeStack from "./Router/HomeStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
}
