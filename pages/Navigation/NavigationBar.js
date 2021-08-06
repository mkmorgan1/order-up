import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingBasket, faHome } from '@fortawesome/free-solid-svg-icons';
import colors from '../colors.js';

export default function NavigationBar({ navigation }) {
  const fontAwesomeSize = 30;
  return (
    <View style={styles.headerMenu}>
      <View
        style={styles.headerOption}
        onTouchEnd={() => navigation.navigate('Home')}
      >
        <FontAwesomeIcon icon={faHome} size={fontAwesomeSize}></FontAwesomeIcon>
      </View>
      <View style={styles.headerOption}></View>
      <View
        style={styles.headerOption}
        onTouchEnd={() => navigation.navigate('Cart')}
      >
        <FontAwesomeIcon
          icon={faShoppingBasket}
          size={fontAwesomeSize}
        ></FontAwesomeIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerMenu: {
    height: 60,
    backgroundColor: colors.lightPink,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 100,
    paddingHorizontal: 30,
  },
  headerOption: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkPink,
    height: 75,
    width: 75,
  },
});
