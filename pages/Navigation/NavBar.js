import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingBasket, faHome } from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home.js";
import Food from "../Food/Food.js";
import Cart from "../Cart/Cart.js";

const Tabs = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Food" component={Food} />
      <Tabs.Screen name="Cart" component={Cart} />
    </Tabs.Navigator>
  );
}
