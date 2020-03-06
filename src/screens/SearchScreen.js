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
        limit: 50,
        term: term,
        location: "vancouver"
      }
    });
    setBusinesses(response.data.businesses);
    console.log(businesses);
  };

  useEffect(() => {
    searchAPI();
  }, []);
  // [] empty array - means that function will be executed ONLY ONCE, when component first rendered
  // Important: if use [value] -> function will be executed, when value changed
  //console.log(businesses);

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
