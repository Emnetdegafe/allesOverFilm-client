import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import Axios from "axios";

const baseUrl = "http://localhost:4000/films";

export default function Reviews() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(baseUrl)
      .then(function(response){
        console.log('response', response.data)
      } )
      // .then((json) => setData(json: ))
      .catch((error) => {
        console.log(error);
      });
            // console.log("response", response);

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
          return (
          <Text>{item.summary}</Text>
          )
          }}
          />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
