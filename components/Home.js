import { View, Text } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Movies from "./Movies";
import SearchResults from "./SearchResults";
import TvShows from "./TvShows";

const Tab = createMaterialTopTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        children={() => <Movies category={"movie"} navigation={navigation} />}
      />
      <Tab.Screen
        name="Search Results"
        children={() => (
          <SearchResults category={"SearchResults"} navigation={navigation} />
        )}
      />
      <Tab.Screen
        name="Tv Shows"
        children={() => <TvShows category={"tv"} navigation={navigation} />}
      />
    </Tab.Navigator>
  );
};

export default Home;
