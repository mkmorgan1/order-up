import 'react-native-gesture-handler';
import React, { createContext, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './pages/Navigation/NavBar.js';
import cartReducer from './context/reducers.js';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();
export const AppContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, [
    {
      name: 'test',
      price: 5.99,
    },
  ]);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Order Up" component={NavBar} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
}
