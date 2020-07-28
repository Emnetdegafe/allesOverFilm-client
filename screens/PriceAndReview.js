import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";

const priceUrl = "http://192.168.1.49:4000/films/price";

export default function PriceAndReview({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [price, set_price] = useState("");

  console.log("prop", route.params.eau); // eau
  useEffect(() => {
    try {
      const eau = parseInt(route.params.eau);
      console.log("eau to send", eau);
      axios.get(`${priceUrl}/${eau}`).then((response) => {
        setLoading(false);
        set_price(response.data);
        console.log("result", response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.2}>
      <View style={styles.container}>
        <Text> Amazon.nl: {price.eurosAmz}</Text>
        <Text>Bol.com {price.bolPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "blue",
    borderWidth: 1,
  },
  filmBox: {
    backgroundColor: "#f6546a",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
