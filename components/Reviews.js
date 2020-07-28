import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  View,
  SectionList,
} from "react-native";
import Axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

const baseUrl = "http://192.168.1.49:4000/films";

export default function Reviews() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      let isMounted = true;
      Axios.get(baseUrl).then((response) => {
        // console.log("response", response.data.films);
        if (isMounted) {
          setData(response.data.films);
          setLoading(false);
          console.log("response", response.data.films);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          style={{ width: "100%", flex: 1 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.filmBox}>
              <Text style={styles.filmText}>{item.title}</Text>
              <Text>{item.year}</Text>
              <Image style={styles.image} source={{ uri: item.image }} />
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
    // flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  filmBox: {
    paddingBottom: 5,
    marginHorizontal: 40,
    marginVertical: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
  },
  filmText: {
    fontSize: 20,
    fontWeight: "200",
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 3
  }
});
