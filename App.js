import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "./components/SearchResults";
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";
import { Provider as PaperProvider } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Movies"
            children={() => <Movies category={"movie"} />}
          />
          <Tab.Screen
            name="Search Results"
            children={() => <SearchResults category={"SearchResults"} />}
          />
          <Tab.Screen
            name="Tv Shows"
            children={() => <TvShows category={"tv"} />}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
