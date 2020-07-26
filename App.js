import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BarcodeScannerScreen from "./screens/BarcodeScannerScreen";
import { BarCodeScanner } from "expo-barcode-scanner";
import HomeScreen from "./screens/HomeScreen";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";


const Stack = createStackNavigator();

export default function App() {

//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   // const [code, set_code] = useState("");

//   useEffect(() => {
//     (async () => {
//       const { status, permissions } = await Camera.requestPermissionsAsync();
//       if(status === "granted")
//       setHasPermission(status === "granted");
//       console.log("permission", status)
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: "column",
//       justifyContent: "center",
//       // alignItems: "center",
//     },
//     icon: {
//       padding: 50,
//       // width: 50
//     },
//   });

//   return (
//     <View>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />

//       {scanned && (
//         <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
//       )}
//     </View>
//   );
// }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BarCodeScanner" component={BarcodeScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
