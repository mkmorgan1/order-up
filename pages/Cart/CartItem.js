import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CartItem({cart}) {
  const getCartItems = () => {
    return cart.map((item) => {
      return (
        <View>
          <Text>{`${item.name} | ${item.price}`}</Text>
        </View>
      )
    })
  }
  return (
    <View>
      {getCartItems()}
    </View>

  )
}