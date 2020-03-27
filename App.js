import React,{useState} from 'react';
import {  Text, View } from 'react-native';
import * as Font from 'expo-font'
import {GlobalStyles} from './constants/globalStyles'

import { AppLoading } from 'expo'
const getFotns=()=>Font.loadAsync({
  "rosario-italic":require("./assets/fonts/Rosario-Italic-VariableFont_wght.ttf"),
  "rosario":require("./assets/fonts/Rosario-VariableFont_wght.ttf"),
});
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.textItem}>Open up App.js to start working on your app!</Text>
      </View>
    );
  }else{
    return (
     <AppLoading
    startAsync={getFotns}
    onFinish={()=>setFontsLoaded(true)}
     
     />
    );
  }

}

