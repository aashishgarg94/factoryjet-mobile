import * as React from 'react'
import AuthNavigator from './src/routers/AuthNavigator'
import { ThemeProvider } from 'react-native-elements'

import axios from 'axios'
import { Provider } from 'react-redux'
import store from './src/redux/store'

import Toast from 'react-native-toast-message';

axios.defaults.baseURL = 
  'http://3.6.144.151:8000/'
  //'http://172.17.0.1:8000/'

const theme = {
  Text: {
    style: {
      fontSize: 15
    },
    h3Style: {
      fontSize: 18,
      fontWeight: "bold"
    }
  },
  colors: {
    primary: '#905908',
    primary_light: '#CB8213'
  },
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AuthNavigator />
        </ThemeProvider>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
