import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../../shared/card';
import Thumbnail from '../../shared/thumbnail';
import HyperLink from '../../shared/hyperlink';
import {globalStyles} from '../../styles/global';
import CollectorRegisterForm from '../../components/collectorRegisterForm';

import UserFactoryService from '../../service/UserFactory.js';
import Web3Service from '../../service/web3.service.js';
import LocalStorageService from '../../service/core/LocalStorage.service';

const factoryAddress = '0x45e00820163F3d1bb6Df0781666d90b4B29C26c9';
const CollectorRegister = ({navigation}) => {
  const Url = require('../../assets/images/logo2.jpg');

  const handleRegister = async value => {
    const web3Service = new Web3Service();
    // create addresss
    //  await  createAccount( state.password);
    // save to blockchain
    const address = await web3Service.createAccount(value.password);
    value.ethAddress = address.address;
    value.privateKey = address.privateKey;
    const factory = new UserFactoryService(address.privateKey);
    // const factory = new UserFactoryService();
    console.log(factory, 'factory');

    const tx = await factory.addResident(
      value.ethAddress,
      value.ethAddress,
      2000000000,
      factoryAddress,
    );
    //   console.log(tx,'tx');

    // const tx=  await factory. addResidentSigned( state.ethAddress,  state.ethAddress,  state.privateKey, 2000000000,factoryAddress)
    console.log(tx, 'tx');
    if (tx) {
      // save to off chain storage
      // const wallet = await factory.getResident( state.ethAddress,factoryAddress);
      value.walletAddress = tx.address;
      const storage = new LocalStorageService();
      await storage.setUser(value);
      console.log(value);

      //Api.registerRes( state)
    }
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={globalStyles.scrollView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Thumbnail source={Url} />
          <Card>
            {/* <Image source={Url}  /> */}

            <CollectorRegisterForm register={handleRegister} />

            <HyperLink
              goToURL={() => navigation.navigate('Auth')}
              title={'Login?'}
              style={styles.hyperLink}
            />
          </Card>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default CollectorRegister;

const styles = StyleSheet.create({
  hyperLink: {
    // left:55,
  },
});
