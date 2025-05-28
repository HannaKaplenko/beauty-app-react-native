import React from 'react';
import { View } from 'react-native';
import { RootNavigation } from './src/navigation/RootNavigation';
import { create } from 'zustand'

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
};
export default App;
