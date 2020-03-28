import React,{useState} from 'react';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import {GlobalStyles} from './constants/globalStyles';
import Navigator from './routes/drawerStack';
import { AppLoading } from 'expo';

const getFotns=()=>Font.loadAsync({
  "rosario-italic":require("./assets/fonts/Rosario-Italic-VariableFont_wght.ttf"),
  "rosario":require("./assets/fonts/Rosario-VariableFont_wght.ttf"),
});
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){

    return (
      <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Navigator/>
     
     
      </React.Fragment>

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

