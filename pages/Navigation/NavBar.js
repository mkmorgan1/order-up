import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faShoppingBasket,
  faHome,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home.js";
import Food from "../Food/Food.js";
import Cart from "../Cart/Cart.js";

const Tabs = createBottomTabNavigator();
const fontAwesomeSize = 25;

const creatIcon = (icon) => (
  <FontAwesomeIcon icon={icon} size={fontAwesomeSize}></FontAwesomeIcon>
);

export default function NavBar() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let tabIcon = "";
          if (route.name === "Home") tabIcon = faHome;
          else if (route.name === "Cart") tabIcon = faShoppingBasket;
          else if (route.name === "Food") tabIcon = faUtensils;
          return creatIcon(tabIcon);
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Food" component={Food} />
      <Tabs.Screen name="Cart" component={Cart} />
    </Tabs.Navigator>
  );
}
