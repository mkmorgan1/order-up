import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../colors';

export default function Item({ item }) {
  const [clickedColor, setClickedColor] = useState(colors.lightTeal);

  const addToCart = () => {
    if (clickedColor === colors.lightTeal) {
      console.log(item);
      setClickedColor(colors.lightPink);
    } else {
      console.log('removed');
      setClickedColor(colors.lightTeal);
    }
  }

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
