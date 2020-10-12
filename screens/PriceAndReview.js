import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const priceUrl = "https://alles-over-film.herokuapp.com/films/price";

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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>
            {price.AmzTitle ? (
              <Text>{price.AmzTitle}</Text>
            ) : (
              <Text>{price.BolTitle}</Text>
            )}
          </Text>
          <View style={styles.imageCard}>
            <Image style={styles.image} source={{ uri: price.BolPic }} />
          </View>
          <View style={styles.priceBox}>
            <View>
              {price.AmzPrice ? (
                <Text style={styles.amzPrice}>Amazon: € {price.AmzPrice} </Text>
              ) : (
                <Text style={styles.amzPrice}>Not available at Amazon</Text>
              )}
            </View>
            <View>
              {price.BolPrice ? (
                <Text style={styles.bolPrice}>
                  Bol.com: € {price.BolPrice.replace(/\s/g, " ")}
                </Text>
              ) : (
                <Text style={styles.bolPrice}>Not available at Bol</Text>
              )}
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
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 15,
    marginTop: 5,
    paddingTop: 5,
    padding: 10,

    textAlign: "center",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
    textAlign: "center",
  },

  imageCard: {
    marginTop: 10,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 60,
  },
  image: {
    width: 170,
    height: 250,
    marginTop: 10,
    borderRadius: 5,
  },
  priceBox: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "row",
    marginVertical: 50,
    padding: 15,
    justifyContent: "space-evenly",
  },
  amzPrice: {
    paddingRight: 20,
    borderRadius: 30,
    padding: 20,
    borderWidth: 1,
    backgroundColor: "#000000",
    color: "#ffffff",
  },

  bolPrice: {
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 30,
    color: "#000000",
    padding: 20,
    marginLeft: 25,
    backgroundColor: "#000000",
    color: "#ffffff",
  },

  title: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    padding: 20,
    elevation: 5,
  },
});
