

 import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  Container,
  Button,
  Content,
  Card,
  CardItem,
  Text,
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 import {globalStyles} from '../../styles/global';
import CollectionData from '../../components/collectionData';
const FullfillCollection = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [items, setNewItem] = useState([]);

  const handelSubmit = () => {
    setModalOpen(false);
    navigation.navigate('CollectorRequest');
  };

  return (
    <KeyboardAwareScrollView>
         <Container  style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide" >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content  style={globalStyles.sectionContainer}>
            <Card style={styles.card}>
            
              <View style={styles.modalContent}>
             
                <CollectionData items={items}/>
              </View>
              <CardItem style={globalStyles.sectionContainer}>
              <Button
                small
                rounded
                 
                success
                style={styles.btn}
                onPress={handelSubmit}>
                <Text> Submit </Text>
              </Button>
              <Button
                small
                rounded
                 
                danger
                style={styles.btn}
                onPress={handelSubmit}>
                <Text> Reject </Text>
              </Button>
            </CardItem>
            </Card>
          </Content>
        </TouchableWithoutFeedback>
      </Modal>
    </Container>
    </KeyboardAwareScrollView>
   
  );
};

export default FullfillCollection;
const styles = StyleSheet.create({
 
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 90,
      alignSelf: 'center',
    //   height:200,
    //   width:120,
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
      borderRadius: 33,
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
     // height: 700,
     opacity:50,
     },
    body: {
      marginTop:5,
      textDecorationColor: 'rgba(139, 139, 139, 0.75)',
    },
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

