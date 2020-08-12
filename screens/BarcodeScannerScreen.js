import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, PermissionsAndroid } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";


export default function BarcodeScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [eau, set_eau] = useState("");
  useEffect(() => {
    (async () => {
      console.log("status", status);
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      console.log("1", status)
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    set_eau(data);
    console.log("data", data);
    navigation.navigate("PriceAndReview", { eau: data });

    console.log("eau", data);
  };

  if (hasPermission === null) {
    return <Text>Requesting Camera Permissions</Text> 
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
    </View>
  );
}
