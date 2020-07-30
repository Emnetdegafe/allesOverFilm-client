import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

export default function About({ navigation }) {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.container}>
        <View>
          <Image style={styles.image} source={require("../images/logo.png")} />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            AllesOverFilm (formerly DVD.nl) has been a household name for 20
            years. Movie buffs and collectors and gives you tons of information
            about DVDs, (Ultra HD) Blu-ray Discs, cinema films, streaming and
            home cinema! On our website you will find reviews and the latest
            information from the film world and upcoming releases. In addition,
            you will find interesting articles, exclusive interviews, hardware
            reviews and blogs on film-related topics. In short: Everything
            related to film has to do with. And there is often also something to
            gain. Via a extensive and informative forum AllesOverFilm knows many
            thousands provide visitors with information on a wide variety of
            topics subjects. You can also trade films and merchandise visit our
            forum. A website for enthusiasts for over 20 years lovers!
          </Text>
        </View>
        <Button
          color="#e40066"
          onPress={() => navigation.goBack()}
          title="go back home"
        />
        <StatusBar style="light" />
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    // flex: 1,
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
  },
  textBox: {
    padding: 5,
    alignItems: "center",
  },
  text: {
    paddingTop: 3,
    textAlign: "justify",
  },
  header: {
    paddingTop: 8,
    flex: 1,
  },
  image: {
    width: 170,
    height: 150,
  },
});
