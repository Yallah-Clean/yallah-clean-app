import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Thumbnail} from 'native-base';
// import { MaterialIcons } from '@expo/vector-icons';

export default function Header({title, navigation}) {
  const url = require('../assets/images/profile.jpeg');
console.log(navigation,'navigation');

  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
   <TouchableOpacity onPress={openMenu}>
         <View style={styles.header}>

     <Thumbnail source={url} style={styles.imageFrame} />

      <Text style={styles.headerText}> {title} </Text>

    </View>
    </TouchableOpacity> 

  );
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    width: '250%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2ACF3B',
    letterSpacing: 1,
  },
  imageFrame: {
    width: '25%',
    // flex: 1,

    borderRadius: 90,
    borderColor: '#2ACF3B',
    // top: '-30%',
    position: 'absolute',
    left: 6,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  // icon: {
  //   position: 'absolute',
  //   left: 16,
  // },
  // headerTitle: {
  //   flexDirection: 'row',
  //   alignContent:"center",

  // },
  // headerImage: {
  //   width: 76,
  // //  left: 40,
  //   height: 56,
  //   marginHorizontal: 10
  // },
});
