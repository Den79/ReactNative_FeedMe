import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons"; // https://expo.github.io/vector-icons/

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <EvilIcons style={styles.icon} name="search" />
      <TextInput
        value={term}
        style={styles.input}
        placeholder="Search"
        onChangeText={newTerm => onTermChange(newTerm)}
        //onChangeText={a => console.log(a)}
        onSubmitEditing={() => {
          onTermSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    height: 50
  },
  input: {
    flex: 1
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10
  }
});

export default SearchBar;
