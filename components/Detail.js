import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/api";
import { StyleSheet, View, Text, Image } from "react-native";

const Detail = ({ route }) => {
  const { id, category } = route.params;

  const [details, setDetails] = useState();

  const fetchDetails = () => {
    axios
      .get(`${API.url}/${category}/${id}?api_key=${API.key}&language=en-US`)
      .then((result) => {
        setDetails(result.data);
      })
      .catch((error) => console.log(error));
  };

    useEffect(() => {
      fetchDetails()

    }, [])

  return (
    <View style={styles.container}>
      {details && (
        <View style={{ display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <Text fontWeight="bold" fontSize={24}>
            {details.title ? details.title : details.name}
          </Text>
          {details.poster_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${details.poster_path}`,
              }}
              style={{ width: 300, height: 200, margin: 8}}
              alt={details.title ? details.title : details.name}
            />
          ) : (
            <View>
              <Text color="white">No Image Found</Text>
            </View>
          )}
          <View>
            <Text>{details.overview}</Text>
          </View>
          <View>
            <Text fontSize={10}>
              Popularity: {details.popularity} | Release Date:{" "}
              {details.releaseDate}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Detail;
