import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PriceResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <Text>{results.length}</Text>
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
