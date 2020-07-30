import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
  Image,
  View,
} from "react-native";
import Axios from "axios";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const baseUrl = "http://192.168.1.49:4000/films";

export default function ReviewDetail(props) {
  const [isLoading, setLoading] = useState(true);
  const [film, setFilm] = useState([]);

  const id = parseInt(props.route.params.id);
  console.log("item?", props.route.params.id);

  useEffect(() => {
    try {
      let isMounted = true;
      Axios.get(`${baseUrl}/${id}`).then((response) => {
        // console.log("response", response.data.films);
        if (isMounted) {
          setFilm(response.data.film);
          setLoading(false);
          console.log("response", response.data.film);
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
        <ScrollView>
          <TouchableOpacity style={styles.filmBox}>
            <Text style={styles.title}>
              <Text>{film.title}</Text>
            </Text>
            <View>
              <Image style={styles.image} source={{ uri: film.image }} />
            </View>
            <Text>
              <Text>Director: {film.director}</Text>
            </Text>

            <Text>
              <Text>Actors: {film.actors.join(" , ")}</Text>
            </Text>
            <View>
              <Text style={styles.filmText}>
                Summary: {film.reviews[0].summary}
              </Text>
            </View>
            <StatusBar style="light" />
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 15,
    marginTop: 5,
    paddingTop: 5,
    padding: 10,
    alignItems: "center",
  },
  filmBox: {
    padding: 5,
    alignItems: "center",
  },
  filmText: {
    paddingTop: 3,
    textAlign: "justify",
  },
  title: {
    fontSize: 30,
  },
  image: {
    width: 250,
    height: 300,
    paddingBottom: 10,
    marginTop: 10,
  },
});
