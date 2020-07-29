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
        <Text style={styles.title}>
          <Text>{price.AmzTitle}</Text>
        </Text>
        <View>
          <Image style={styles.image} source={{ uri: price.BolPic }} />
        </View>
        <View>
          <Text>
            <Text> Amazon.nl: {price.AmzPrice}</Text>
          </Text>
          <Text>
            <Text>Bol.com {price.BolPrice}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 30,
    marginVertical: 40,
    alignContent: "center"
  },
  filmBox: {
    flex: 1,
    backgroundColor: "#f6546a",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 300,
    // alignItems: "center",
    paddingBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
  },
});
