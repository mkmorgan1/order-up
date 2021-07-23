import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NavigationBar from "../Navigation/NavigationBar.js";
import colors from "./../colors.js";

export default function Cart({ navigation }) {
  return (
    <View>
      <NavigationBar navigation={navigation}/>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
