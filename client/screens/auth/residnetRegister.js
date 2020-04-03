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
import ResidentRegisterForm from '../../components/residentRegisterForm';

import UserFactoryService from '../../service/UserFactory.js';
import OrgRegistry from '../../service/OrgRegistry';
import Web3Service from '../../service/web3.service.js';
import LocalStorageService from '../../service/core/LocalStorage.service';

const factoryAddress = '0xf3FB48AA114E03e28b7C2bdFD363014E9D1F56DA';
const ResidnetRegister = ({navigation}) => {
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
    const orgRegistryService = new OrgRegistry(address.privateKey);
    const orgRegistryAddress = await orgRegistryService.userFactory("");
    console.log(orgRegistryAddress,'orgRegistryAddress');
    
    // const address = await web3Service.getAccountByIndex(2);
    //   value.ethAddress= address;

    // const factory = new UserFactoryService();
    console.log(value, 'value');

    const tx = await factory.addResident(
      value.ethAddress,
      value.ethAddress,
      2000000000,
      orgRegistryAddress,
    );
    //   console.log(tx,'tx');

    // const tx=  await factory. addResidentSigned( value.ethAddress,  "0xecE015E844CeB9CE76fd447468C29987fE01d6BE",  "0xeb235ccf4e331a907fb9aa1e7631bc9245936e93e392f41ac5858f521901e875", 2000000000,factoryAddress)
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

            <ResidentRegisterForm register={handleRegister} />

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

export default ResidnetRegister;

const styles = StyleSheet.create({
  hyperLink: {
    // left:55,
  },
});
