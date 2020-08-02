import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BarcodeScannerScreen from "../screens/BarcodeScannerScreen";
import HomeScreen from "../screens/HomeScreen";
import PriceAndReview from "../screens/PriceAndReview";
import ReviewDetail from "../screens/ReviewDetail";
import { HeaderBackButton } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
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
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => navigation.goBack()}
              tintColor="#ffffff"
            />
          ),
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
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack();
              }}
              tintColor="#ffffff"
            />
          ),
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
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack();
              }}
              tintColor="#ffffff"
            />
          ),
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
