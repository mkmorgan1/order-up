import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.homePage}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.clickBelow}>Click below to place an order</Text>
      <View style={styles.orderButton}>
        <Button title="Order" onPress={() => navigation.navigate('Food')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcome: {
    fontSize: 60,
  },
  clickBelow: {},
  orderButton: {
    margin: 30,
    padding: 10,
    backgroundColor: '#f194ff',
    borderRadius: 8,
  },
});
