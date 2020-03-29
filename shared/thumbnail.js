import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Thumbnail({ source, navigation }) {



  return (
    <View style={styles.mainFrame}>
        <Image source={source} style={styles.imageFrame} />
        {/* <View style={styles.imageFrame}>

        </View> */}
      </View>
  );
}

const styles = StyleSheet.create({
  mainFrame: {
    // width: '100%',
    // height: '100%',
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },


  imageFrame: {
   width: '100%',
    flex:1,
    flexDirection: 'row',
    height: '100%',
 
    resizeMode: 'contain',

     marginHorizontal: 30,
     marginVertical:40,
  },
});