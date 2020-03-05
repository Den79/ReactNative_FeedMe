import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons"; // https://expo.github.io/vector-icons/

const SearchBar = () => {
  return (
    <View>
      <EvilIcons name="search" />
      <TextInput placeholder="search" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchBar;
