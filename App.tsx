import React from 'react';
import { View } from 'react-native';
import { RootNavigation } from './src/navigation/RootNavigation';
import { UserProvider } from './src/context/userContext';

const App = () => {
  return (
    <UserProvider>
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
    </UserProvider>
  );
};
export default App;
