import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Item({ item }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.innerText}>{item.name}</Text>
        <Text style={styles.innerText}>${item.price}</Text>
      </View>
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
    justifyContent: "center",
  },
  innerText: {
    textAlign: "center",
  },
});
