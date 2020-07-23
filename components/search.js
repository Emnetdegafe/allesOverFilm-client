import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { onChange } from "react-native-reanimated";
import Axios from "axios";

const styles = StyleSheet.create({
  container: {
      paddingTop: 5,
    padding: 8,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#EAE6E3",
    // justifyContent: "space-evenly",
  },
  icon: {
    paddingTop: 20,
    justifyContent: "center",
    paddingLeft: 10,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 10,
  },
});

export default function Search() {
  const [text, set_text] = useState("");
  const onChange = (textValue) => set_text(textValue);
  
  const searchFilm = text => {
    Axios.get("url")
    .then((response) => {
        alert(JSON.stringify(response.data));
      })
        .catch((error) => {
          alert(error.message);
        })
        .finally(() => {
          alert("text");
        })
  };
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="type here..."
          value={text}
          onChangeText={onChange}
        />
        <Icon style={styles.icon} name="search" size={20} color="#000000" onPress={searchFilm()}/>
      </View>
    </TouchableOpacity>
  );
}
