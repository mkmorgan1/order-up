import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NavigationBar from "../Navigation/NavigationBar.js";

export default function Food({ navigation }) {
  return (
    <View>
      <NavigationBar navigation={navigation} />
      <Text>FOOD</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
