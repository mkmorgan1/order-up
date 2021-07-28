import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Item from "./Item";

export default function Food({ navigation }) {
  return (
    <View>
      <Text>FOOD</Text>
      <ScrollView>
        <View style={styles.foodContainer}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  foodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
