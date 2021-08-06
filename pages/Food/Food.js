import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import Item from './Item'
import { foodItems } from './dumbyData'

export default function Food({ navigation }) {
  const getData = (type) => {
    return foodItems[type].map((item) => {
      return <Item item={item} />
    })
  }
  return (
    <View>
      <Text>FOOD</Text>
      <ScrollView>
        <View style={styles.foodContainer}>
          <Text style={styles.itemHeader}>Sides</Text>
          {getData('sides')}
          <Text style={styles.itemHeader}>Entrees</Text>
          {getData('entrees')}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  itemHeader: {
    width: '100%',
    textAlign: 'center',
  },
  foodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
})
