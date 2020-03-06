import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import PriceResultList from "../components/PriceResultList";

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
    //console.log(businesses);
  };

  useEffect(() => {
    searchAPI();
  }, []);
  // [] empty array - means that function will be executed ONLY ONCE, when component first rendered
  // Important: if use [value] -> function will be executed, when value changed

  const filterByPrice = price => {
    return businesses.filter(business => {
      return business.price === price;
    });
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
      <PriceResultList title={"Budget Eats"} results={filterByPrice("$")} />
      <PriceResultList title={"Average"} results={filterByPrice("$$")} />
      <PriceResultList
        title={"Gettin' Pricey"}
        results={filterByPrice("$$$")}
      />
      <PriceResultList
        title={"Once in a Blue Moon"}
        results={filterByPrice("$$$$")}
      />
      {/* <FlatList
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
