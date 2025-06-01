import React from 'react';
import { View } from 'react-native';
import { RootNavigation } from './src/navigation/RootNavigation';
import { UIProvider } from './src/UIProvider';

const App = () => {

  return (
    <UIProvider>
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
    </UIProvider>
  );
};
export default App;
