import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import PriceResult from "../components/PriceResult";

const PriceResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <PriceResult result={item} />;
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
