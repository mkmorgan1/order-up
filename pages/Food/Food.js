import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FoodHeader from "./FoodHeader.js";

export default function Food({ navigation }) {
  return (
    <View>
      <FoodHeader navigation={navigation} />
      <Text>FOOD</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
