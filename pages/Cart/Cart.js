import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import colors from './../colors.js';
import CartItem from './CartItem.js';

function Cart({cart}) {
  return (
    <View>
      <Text>Cart</Text>
      <CartItem cart={cart.current}/>
    </View>
  );
}
const mapStateToProps = (state) => ({cart: state.cart})

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(Cart);
