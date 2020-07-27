import { StatusBar } from "expo-status-bar";
import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import axios from 'axios'

const baseUrl = "http://localhost:4000/films/prices";

export default function PriceAndReview(eau) {
  const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
// console.log('what is eau', eau)

// const {eau} = route.params

  useEffect(() => {
    console.log("what is prop", eau);
    try {
      axios.get(`${baseUrl}/${eau}`).then((response) => {
        setData(response.data);
        setLoading(false);
      });
      console.log("result", response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TouchableOpacity activeOpacity="0.2">
      <View style={styles.container}>
        <StatusBar style="light-content" />
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
