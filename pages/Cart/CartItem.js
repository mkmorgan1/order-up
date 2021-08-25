import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../colors';

export default function CartItem({ cart }) {
  const getCartItems = () => {
    return cart.map((item) => {
      return (
        <View style={styles.cartItem} key={item.name}>
          <Text style={styles.item}>{`${item.name}`}</Text>
          <Text style={styles.item}>{`${item.price}`}</Text>
          <Button style={styles.xButton} title={'X'} color={'black'}/>
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
    width: '45%',
    height: 30,
    backgroundColor: colors.lightPink,
  },
  xButton: {
    backgroundColor: colors.lightPink,
    paddingHorizontal: 4
  }
});
