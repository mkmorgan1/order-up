import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Item() {
  return (
    <View style={styles.container}>
      <Text>Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    backgroundColor: "skyblue",
    borderRadius: 10,
    marginVertical: 12,
  },
});
