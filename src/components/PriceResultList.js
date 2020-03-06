import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

const PriceResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default PriceResultList;
