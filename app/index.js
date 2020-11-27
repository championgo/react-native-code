import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry, StyleSheet, Text, StatusBar } from 'react-native';

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
//import appModel from './models/app'
import { theme } from "./utils";
import { default as models}  from './models'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const app = dva({
  initialState: {},
  models: models,
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(
     <SafeAreaProvider>
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor={theme.headerTintColor} animated={true} hidden={false} androidtranslucent={true} />
    <Router />
  </NavigationContainer>
    </SafeAreaProvider>
)
AppRegistry.registerComponent('OfflineAdv', () => App)

