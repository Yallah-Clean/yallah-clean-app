import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Thumbnail from '../shared/thumbnail'
import { globalStyles } from '../styles/global';
const Splach = ({navigation}) => {
  const Url = require('../assets/images/splash.png');
  return (
    <View style={globalStyles.containerSplach}>
      <Thumbnail source={Url} ></Thumbnail>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Auth');
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Let's Get Going</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Splach;

const styles = StyleSheet.create({
  button: {
     backgroundColor: '#FFFFFF',
    // position: 'relative',
    width: 289,
    height: 60,
    left: 43,
    bottom: 25,
borderRadius: 25,
    /**position: absolute;
width: 289,
height: 60,
left: 43,
top: 411, */
  },
  buttonText: {
    fontFamily: 'Rosario',
    color:'#2ACF3B',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 29,
    position: 'relative',
    top: 10,
  },
});
