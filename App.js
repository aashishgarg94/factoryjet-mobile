import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/routers/AppNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}
