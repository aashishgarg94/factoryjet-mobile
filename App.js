import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/routers/AppNavigator'

import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </Provider>
  );
}
