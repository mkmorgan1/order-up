import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from './../colors.js';
import CartItem from './CartItem.js';
import { AppContext } from '../../App.js';

export default function Cart() {
  const [state, dispatch] = useContext(AppContext);

  return (
    <View style={styles.cart}>
      <Text style={styles.header}>Cart</Text>
      <CartItem cart={state} />
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    margin: 30,
  },
  header: {
    fontSize: 30,
    paddingBottom: 20,
  },
});
