/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import './shims';
import React from 'react';
import {
  
  StatusBar,
 
} from 'react-native';

import Navigator from './routes/drawerStack';

const App: () => React$Node = () => {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // if (fontsLoaded) {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Navigator />

    </>
  );
};



export default App;
