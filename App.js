import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/routers/AppNavigator'
import { ThemeProvider } from 'react-native-elements'

import { Provider } from 'react-redux'
import store from './src/redux/store'

const theme = {
  colors: {
    primary: '#905908',
    primary_light: '#CB8213'
  },
};


export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </ThemeProvider>
    </Provider>
  );
}
