import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import colors from "./colors.js";

export default function Food({ navigation }) {
  return (
    <View>
      <View style={styles.headerMenu}>
        <View style={styles.headerOption}></View>
        <View style={styles.headerOption}></View>
        <View style={styles.headerOption}></View>
      </View>
      <Text>FOOOOOOD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerMenu: {
    height: 60,
    backgroundColor: colors.lightPink,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 100,
    paddingHorizontal: 30,
  },
  headerOption: {
    backgroundColor: colors.darkPink,
    height: 75,
    width: 75,
  },
});
