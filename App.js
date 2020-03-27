import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
const getFotns=()=>Font.loadAsync({
  "rosario-italic":require("./assets/fonts/Rosario-Italic-VariableFont_wght.ttf"),
  "rosario":require("./assets/fonts/Rosario-VariableFont_wght.ttf"),
});
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <View style={styles.container}>
        <Text style={styles.textItem}>Open up App.js to start working on your app!</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem:{
    fontFamily:'rosario',

  }
});
