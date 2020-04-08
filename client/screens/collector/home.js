import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import UserWallet from '../../service/UserWallet';
import Web3Service from '../../service/web3.service';
import OrgRegistry from '../../service/OrgRegistry';
import UserFactoryService from '../../service/UserFactory';
import {
  Container,
  Button,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Picker,
} from 'native-base';

import {globalStyles} from '../../styles/global';
import UserWalletService from '../../service/UserWallet';
import {TextInput} from 'react-native-gesture-handler';
const CollectorHome = ({route, navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container style={globalStyles.container}>
      <Content>
        <Card style={styles.card}>
          <CardItem header>
            <TextInput style={globalStyles.searchInput} value="Location ...." />
          </CardItem>
          <CardItem style={globalStyles.sectionContainer}>
            <Button
              large
              rounded
              block
              success
              style={styles.btn}
              onPress={()=>navigation.navigate('FullfillCollection')}>
              <Text> CHECK NEW REQUESTS </Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default CollectorHome;

const styles = StyleSheet.create({
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
  },
  card: {
    flex: 1,
    height: 700,
  },
  btn: {
    flex: 1,
    padding: 5,
    color: 'white',
    borderRadius: 25,
    height: 65,
    width: 315,
    backgroundColor: '#2ACF3B',
    top: 15,

    flexDirection: 'row',
    alignItems: 'center',
  },
  imageFrame: {
    width: 350,
    height: 400,

    //resizeMode: 'contain',
  },
});
