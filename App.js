import React from 'react';
import { SettingsProvider } from './src/context/SettingsContext';
import Home from './src/components/Home';
import Settings from './src/components/Settings/Settings';
import Questions from './src/components/Questions/Questions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <SettingsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Quiz" component={Questions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SettingsProvider>
  );
}

export default App