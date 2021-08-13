import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './pages/Navigation/NavBar.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import orderUpData from './redux/reducers/reducers.js';
const store = createStore(orderUpData);

const Stack = createStackNavigator();

export default function App() {
  console.log('store', store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Order Up" component={NavBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
