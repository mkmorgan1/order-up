import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../colors';

export default function CartItem({ cart }) {
  const getCartItems = () => {
    return cart.map((item) => {
      return (
        <View style={styles.cartItem}>
          <Text style={styles.item}>{`${item.name}`}</Text>
          <Text style={styles.item}>{`${item.price}`}</Text>
        </View>
      );
    });
  };
  return <View>{getCartItems()}</View>;
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  item: {
    textAlign: 'center',
    width: '49%',
    height: 30,
    backgroundColor: colors.lightPink,
  },
  // itemName: {
  //   textAlign: 'center',
  //   width: '50%',
  //   height: 30,
  //   backgroundColor: 'blue',
  // },
  // itemPrice: {
  //   textAlign: 'center',
  //   width: '50%',
  //   height: 30,
  //   backgroundColor: 'grey',
  // },
});
