import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Divider } from 'react-native-paper';
import colors from '../colors';

export default function CartItem({ cart }) {
  const getCartItems = () => {
    return cart.map((item) => {
      return (
        <View style={styles.cartItem} key={item.name}>
          <Text style={styles.item}>{`${item.name}`}</Text>
          <Text style={styles.item}>{`${item.price}`}</Text>
          <Button style={styles.xButton} title={'X'} color={'black'} />
          <Divider />
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
    justifyContent: 'center',
    width: '45%',
    textAlign: 'center',
    paddingTop: 12,
  },
  xButton: {
    paddingHorizontal: 4,
  },
});
