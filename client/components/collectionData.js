import React from 'react';
import {StyleSheet,  View, FlatList} from 'react-native';
import {Text} from 'native-base';


const CollectionData = ({items}) => {
    return (
      <FlatList
        data={items}
        renderItem={({item, index, separators}) => (
            <Text>
              {' '}
              <Text > {item.matrial}</Text> 
              <Text style={styles.tx}> {item.weight}</Text>{' '} <Text> KG</Text>{' '}
            </Text>
        )}
      />
    );
  };

export default CollectionData;

const styles = StyleSheet.create({
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      //flex: 1,
    },
    tx: {
      flex: 1,
      borderRadius: 20,
      height: 35,
      width: 276,
      borderColor: '#2ACF3B',
      top: 15,
      color: '#2ACF3B',
      borderWidth: 1,
      flexDirection: 'column',
      alignContent: 'center',
    },
    badgeProfile: {backgroundColor: 'rgba(139, 139, 139, 0.75)', color: 'white', alignSelf:'center'},
    badgeBalance: {backgroundColor: 'rgba(139, 139, 139, 0.75)', color: 'white'},
    card: {
     // flex: 1,
      height: 700,
     },
    body: {
      marginTop:5,
flex:1,
flexDirection:'column'    },
    btn: {
      padding: 5,
      color: 'white',
      borderRadius: 25,
      // left: '30%',
      backgroundColor: '#2ACF3B',
      top: 15,
  
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageFrame: {
      width: 150,
      height: 200,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });
