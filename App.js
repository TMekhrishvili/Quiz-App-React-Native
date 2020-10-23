import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/Home';
import { SettingsProvider } from './src/context/SettingsContext';

export default function App() {
  return (
    <SettingsProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdfffb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
