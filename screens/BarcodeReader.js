import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text } from 'react-native'

export default function BarcodeReader() {
  const [state, set_state] = useState(" ")

    

useEffect(() => {

  return fetch ("https://api.barcodelookup.com/v2/products?barcode=3614272049529&formatted=y&key=your_api_key")
  .then((response) => response.json() )
  .then ( (responseJson) => {
    set_state( {
      isLoading:false,
      dataSource: responseJson
    })
    })
    
  })


}

  return (
    <View>
      {JSON.stringify()}
      
    </View>
  )
}
