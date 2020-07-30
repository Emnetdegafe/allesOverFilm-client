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
  Button,
  ImageBackground,
} from "react-native";
import Axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const baseUrl = "http://192.168.1.49:4000/films";

export default function ReviewsList({ ReviewDetail }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    try {
      let isMounted = true;
      Axios.get(baseUrl).then((response) => {
        // console.log("response", response.data.films);
        if (isMounted) {
          setData(response.data.films);
          setLoading(false);
          console.log("response", response.data.films);
          // console.log('íd', data.id)
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
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.filmText}>Released in {item.year}</Text>
              </View>
              <Image style={styles.image} source={{ uri: item.image }} />

              <Text>Rating</Text>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <ImageBackground
                  source={require("../images/hexagon.png")}
                  style={styles.imageBackground}
                  // tintColor="#00000"
                >
                  <Text> {item.reviews[0].rating}</Text>
                </ImageBackground>
              </View>
              <View style={styles.button}>
                <Button
                  title="view Detail"
                  color="#e40066"
                  onPress={() =>
                    navigation.navigate("ReviewDetail", { id: item.id })
                  }
                />
              </View>
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
    marginTop: 10,
    marginLeft: 5,
  },
  filmBox: {
    paddingBottom: 5,
    marginHorizontal: 40,
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  filmText: {
    fontSize: 20,
    fontWeight: "200",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  image: {
    width: 120,
    height: 150,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 40,
    height: 40,
    alignItems: "center",
  },
  button: {
    padding: 10,
  },
});