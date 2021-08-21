import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../colors';
import { AppContext } from '../../App.js';

export default function Item({ item }) {
  const [state, dispatch] = useContext(AppContext);
  const [clickedColor, setClickedColor] = useState(colors.lightTeal);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    changeColor();
  };
  const changeColor = () => {
    if (clickedColor === colors.lightTeal) {
      console.log(item);
      setClickedColor(colors.lightPink);
    } else {
      console.log('removed');
      setClickedColor(colors.lightTeal);
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: 180,
      height: 180,
      backgroundColor: clickedColor,
      borderRadius: 10,
      marginVertical: 12,
      justifyContent: 'center',
    },
    innerText: {
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container} onTouchEnd={addToCart}>
      <View>
        <Text style={styles.innerText}>{item.name}</Text>
        <Text style={styles.innerText}>${item.price}</Text>
      </View>
    </View>
  );
}
