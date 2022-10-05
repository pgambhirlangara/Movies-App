import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import UICard from "./card";
import axios from "axios";
import { API } from "../config/api";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { sortingMovies } from "../constant";
import DropDownPicker from "react-native-dropdown-picker";

const Movies = ({ category, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [type, setType] = useState("upcoming");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(sortingMovies);

  const getMenu = () => (
    <View style={styles.menu}>
      <DropDownPicker
        open={open}
        value={type}
        items={items}
        setOpen={setOpen}
        setValue={setType}
        setItems={setItems}
      />
    </View>
  );

  const getListOfShows = () => {
    setIsLoading(true);
    axios
      .get(
        `${API.url}/${category}/${type}?api_key=${API.key}&language=en-US&page=1`
      )
      .then((result) => {
        console.log(result, "Data");
        setShows(result.data.results);
      })
      .then((result) => setIsLoading(false))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getListOfShows();
  }, [type]);

  return (
    <View>
      {getMenu()}
      <FlatList
        data={shows}
        keyExtractor={(show) => show.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <UICard
              item={item}
              navigation={navigation}
              category={category === "multi" ? item.media_type : category}
            />
          );
        }}
      />
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
  menu: {
    margin: 8,
  },
});

export default Movies;
