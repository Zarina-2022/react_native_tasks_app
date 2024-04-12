import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

// screens
import RootNavigator from './src/router/root-navigator';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
