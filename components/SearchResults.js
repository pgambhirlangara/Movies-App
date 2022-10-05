import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { API } from "../config/api";
import { searchType } from "../constant";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import UICard from "./card";

const SearchResults = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const [type, setType] = useState("multi");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(searchType);
  const [searchedList, setSearchedList] = useState([]);

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

  const searchShows = () => {
    axios
      .get(
        `${API.url}/search/${type}?api_key=${API.key}&language=en-US&page=1&query=${searchQuery}`
      )
      .then((result) => {
        setSearchedList(result.data.results);
      })
      .catch((error) => console.log(error));
  };

  const showList = () => (
    <FlatList
      data={searchedList}
      keyExtractor={(show) => show.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <UICard
            item={item}
            navigation={navigation}
            category={type === "multi" ? item.media_type : type}
          />
        );
      }}
    />
  );

  return (
    <View>
      <Text style={styles.title}>Search Movie/TV Show Name*</Text>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.searchContainer}>
        <View style={{ flexBasis: "70%" }}>{getMenu()}</View>
        <View style={{ flexBasis: "30%" }}>
          <TouchableOpacity style={styles.moreDetails} onPress={searchShows}>
            <Text style={{ color: "#fff" }}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ zIndex: 0 }}>
        {searchedList.length === 0 ? (
          <Text>Please Initiate a search</Text>
        ) : (
          showList()
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 16,
    fontWeight: "bold",
  },
  search: {
    margin: 8,
    marginTop: 0,
  },
  moreDetails: {
    backgroundColor: "#06b6d4",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 8,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 6,
  },
  menu: {
    margin: 8,
    zIndex: 10000,
  },
});

export default SearchResults;
