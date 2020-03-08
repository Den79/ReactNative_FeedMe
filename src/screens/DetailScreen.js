import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  View
} from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const [business, setBusiness] = useState({});

  const searchAPI = async () => {
    const response = await yelp.get(id, {});
    setBusiness(response.data);
  };

  useEffect(() => {
    searchAPI();
  }, []); //call once

  return (
    <SafeAreaView>
      <Image style={styles.mainImage} source={{ uri: business.image_url }} />
      <Text>Name: {business.name}</Text>
      <Text>Phone: {business.display_phone}</Text>
      <Text>Now: {business.is_closed ? "CLOSED" : "OPEN"}</Text>
      <Text>Avg.Rating: {business.rating}</Text>
      {/* <Text>Address: {business.location.address1}</Text> */}
      <Text>Reviews: {business.review_count}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={business.photos}
        keyExtractor={result => result}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    height: 200,
    width: "100%"
  },
  image: {
    height: 200,
    width: 200,
    margin: 4,
    borderRadius: 10
  }
});

export default DetailScreen;
