import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  Icon,
  Container,
  Button,
  Content,
  FlatList,
  Badge,
  Card,
  CardItem,
  Text,
  Body,
  Thumbnail,
} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import CollectionRequestForm from '../../components/collectionRequestForm';
import {globalStyles} from '../../styles/global';
import CollectionData from '../../components/collectionData';
const FullfillCollection = ({navigation}) => {
//   const [modalOpen, setModalOpen] = useState(true);
  const [items, setNewItem] = useState([]);
  const addItem = item => {
    const matrial = ['Organic', 'Plastic', 'Glass'];
    console.log(item, 'item');
    item.matrial = matrial[item.matrial];
    item.key = Math.random().toString();
    setNewItem(items => {
      return [item, ...items];
    });
  };
  const handelSubmit = () => {
    // send transaction and show toast
    navigation.navigate('CollectorRequest');
  };

  return (
    // <KeyboardAwareScrollView>
    <Container style={globalStyles.container}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <Content>
        <Card style={styles.card}>
          <View style={styles.modalContent}>
            {/* <Icon
                  name="close"
                  size={24}
                  style={{...styles.modalToggle, ...styles.modalClose}}
                  onPress={() => setModalOpen(false)}
                /> */}
            <CollectionRequestForm add={addItem} />
          </View>
          <Body>
            <Text>I collected</Text>
            <CollectionData items={items} />
            <CardItem style={globalStyles.sectionContainer}>
              <Button
                small
                rounded
                block
                success
                style={styles.btn}
                onPress={handelSubmit}>
                <Text> Submit </Text>
              </Button>
            </CardItem>
          </Body>
        </Card>
      </Content>
      {/* </TouchableWithoutFeedback> */}
    </Container>
    // </KeyboardAwareScrollView>
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
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    paddingTop: 25,
  },
});
