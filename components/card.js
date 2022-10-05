import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const UICard = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
        />
      <View style={styles.textContainer}> 
        <Text style={{ fontWeight: "bold"}}>{item.title ? item.title : item.name}</Text>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Release Date: {item.release_date}</Text>
        <TouchableOpacity style={styles.moreDetails} onPress={() => {}}><Text style={{ color: "#fff"}}>More Details</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row"
  },
  moreDetails: {
    width: 200,
    backgroundColor: "#06b6d4",
    marginTop: 8,
    height: 40,
    padding: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  image: {
    width: 100,
    height: 100,
    flexBasis: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  textContainer: {
    flexBasis: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  }
});

export default UICard;
