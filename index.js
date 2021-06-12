/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import { BLUE } from './utils/commoncolors';
import {Provider} from 'react-redux';
import store from './src/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: BLUE
  }
}

export default function Main() {
    return (
      <Provider store={store}>
         <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </Provider>
    );
  }
  

AppRegistry.registerComponent(appName, () => Main);
