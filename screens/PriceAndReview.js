import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
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
    <TouchableOpacity activeOpacity={0.2} style={styles.container}>
      <Text style={styles.title}>
        <Text>{price.AmzTitle}</Text>
      </Text>
      <View>
        <Image style={styles.image} source={{ uri: price.BolPic }} />
      </View>
      <View style={styles.filmBox}>
        <View>
          <Text style={styles.amzPrice}> Amazon.nl: {price.AmzPrice}</Text>
        </View>
        <View>
          <Text style={styles.bolPrice}>Bol.com: {price.BolPrice}</Text>
        </View>
      </View>

      <StatusBar style="light" />
      <View style={styles.button}>
        <Button
          title="Read Review"
          color="#e40066"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 15,
    marginTop: 5,
    paddingTop: 5,
    padding: 10,
    alignItems: "center",
  },
  filmBox: {
    flex: 1,
    paddingBottom: 5,
    flexDirection: "row",
    marginVertical: 50,
    padding: 15,
    justifyContent: "space-evenly",
  },
  image: {
    width: 150,
    height: 200,
    paddingBottom: 10,
    marginTop: 10,
  },
  amzPrice: {
    paddingRight: 20,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: 15,
  },

  bolPrice: {
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#000000",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: 15,
    marginLeft: 25,
  },
  title: {
    fontSize: 30,
  },
  button: {
    padding: 30,
    borderRadius: 10,
  },
});
