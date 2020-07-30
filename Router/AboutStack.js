import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About Alles Over Film",
          headerStyle: {
            backgroundColor: "#e40066",
          },
          headerTitleStyle: {
            textAlign: "center",
            color: "#ffffff"
          },
        }}
      />
    </Stack.Navigator>
  );
}
