import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import PriceResultList from "../components/PriceResultList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = ({ navigation }) => {
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
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchAPI();
        }}
      />
      <ScrollView>
        <PriceResultList
          navigation={navigation}
          title={"Budget Eats"}
          results={filterByPrice("$")}
        />
        <PriceResultList
          navigation={navigation}
          title={"Average"}
          results={filterByPrice("$$")}
        />
        <PriceResultList
          navigation={navigation}
          title={"Gettin' Pricey"}
          results={filterByPrice("$$$")}
        />
        <PriceResultList
          navigation={navigation}
          title={"Once in a Blue Moon"}
          results={filterByPrice("$$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
