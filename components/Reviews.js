import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";
import Axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

const baseUrl = "http://192.168.1.49:4000/films";

export default function Reviews() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      Axios.get(baseUrl).then((response) => {
        setData(response.data.films);
        setLoading(false);
      });
      console.log("result", response.data.films);
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(data);
  // console.log("response", response);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.filmBox} >
              <Text style={styles.filmText}>{item.title}</Text>
              <Text>{item.year}</Text>
              {/* <Image source={item.image} /> */}
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 48,
    marginLeft: 20,
  },
  filmBox: {
    paddingBottom: 5,
    marginHorizontal: 40,
    marginVertical: 30,
    // borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  filmText: {
    fontSize: 20,
    fontWeight: "200",
  },
  title: {
    fontSize: 32,
  },
});
