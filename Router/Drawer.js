import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack"

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}
