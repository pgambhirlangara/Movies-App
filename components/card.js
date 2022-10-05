import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
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
        <Text>{item.title ? item.title : item.name}</Text>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Release Date: {item.release_date}</Text>
        <Button style={styles.moreDetails}>More Details</Button>
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
    backgroundColor: "aqua",
    marginTop: 8
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
