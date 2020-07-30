import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BarcodeScannerScreen from "../screens/BarcodeScannerScreen";
import HomeScreen from "../screens/HomeScreen";
import PriceAndReview from "../screens/PriceAndReview";
import ReviewDetail from "../screens/ReviewDetail";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Alles Over Film",
          headerStyle: { backgroundColor: "#000000" },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      />
      <Stack.Screen
        name="ReviewDetail"
        component={ReviewDetail}
        options={{
          title: "Alles Over Film",
          headerStyle: { backgroundColor: "#000000" },
          headerTitleStyle: {
            textAlign: "center",
            color: "#ffffff",
          },
        }}
      />
      <Stack.Screen
        name="BarCodeScanner"
        component={BarcodeScannerScreen}
        options={{
          title: "Alles Over Film",
          headerStyle: { backgroundColor: "#000000" },

          headerTitleStyle: {
            textAlign: "center",
            color: "#ffffff",
          },
        }}
      />
      <Stack.Screen
        name="PriceAndReview"
        component={PriceAndReview}
        options={{
          title: "Alles Over Film",
          headerStyle: { backgroundColor: "#000000" },
          headerTitleStyle: {
            textAlign: "center",
            color: "#ffffff",
          },
        }}
      />
    </Stack.Navigator>
  );
}
