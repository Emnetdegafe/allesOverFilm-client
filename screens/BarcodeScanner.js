import React, { useState, useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import  * as Permissions from "expo-permissions"
import { BarCodeScanner} from "expo-barcode-scanner"



export default function BarcodeReader() {
  // const [state, set_state] = useState(" ")


      const [hasPermission, setHasPermission] = useState(null);
      const [scanned, setScanned] = useState(false);
      const [code, set_code] = useState('')
    
      useEffect(() => {
        (async () => {
          const { status } = await Permissions.getAsync(
            Permissions.CAMERA
          );
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        set_code(data)
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
             
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
      );
}




