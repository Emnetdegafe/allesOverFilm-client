import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Reviews from "../components/Reviews";

export default function BarcodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [eau, set_eau] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
     
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log('data', data, eau)
  };
  

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      {/* <Reviews eau={data}/> */}
    </View>
  );
}
