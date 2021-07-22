import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingBasket, faHome } from "@fortawesome/free-solid-svg-icons";
import FoodHeader from "./FoodHeader.js";
import colors from "./../colors.js";

export default function Food({ navigation }) {
  const fontAwesomeSize = 30;
  return (
    <View>
      <FoodHeader navigation={navigation} />
      <Text>FOOD</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
