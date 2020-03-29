
import React from 'react';
import { StyleSheet, Text ,TouchableOpacity} from 'react-native';

export default function HyperLink({title,goToURL}) {
  return (
      <TouchableOpacity onPress={goToURL}>
    <Text style={styles.title} >
         {title}
      </Text>
      </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    title: {
        color: '#acacac',
        fontWeight: 'bold',
        alignItems:'center',
        
      }
});