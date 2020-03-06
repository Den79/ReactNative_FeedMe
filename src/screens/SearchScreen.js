import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [businesses, setBusinesses] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get("search", {
      params: {
        limit: 1,
        term: term,
        location: "vancouver"
      }
    });
    setBusinesses(response.data.businesses);
    console.log(businesses); //TEST
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchAPI();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
