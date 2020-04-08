import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {globalStyles} from '../../styles/global';
import ResidentRegisterForm from '../../components/residentRegisterForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import UserFactoryService from '../../service/UserFactory.js';
import OrgRegistry from '../../service/OrgRegistry';
import Web3Service from '../../service/web3.service.js';
import LocalStorageService from '../../service/core/LocalStorage.service';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';

const ResidnetRegister = ({navigation}) => {
  const handleRegister = async value => {
    const web3Service = new Web3Service();
    // create addresss
    //  await  createAccount( state.password);
    // save to blockchain
    const address = await web3Service.getAccountByIndex(2);
    value.ethAddress = address;
    // const address = await web3Service.createAccount(value.password);
    const txxx = await web3Service.transferEth(address, 10, address, 20000);
    // value.ethAddress = address.address;
    // value.privateKey = address.privateKey;
    value.ethAddress = address;
    console.log(txxx, 'txxx');

    const factory = new UserFactoryService('address.privateKey');
    const orgRegistryService = new OrgRegistry('address.privateKey');
    const orgRegistryAddress = await orgRegistryService.userFactory('');
    console.log(orgRegistryAddress, 'orgRegistryAddress');

    // const factory = new UserFactoryService();

    const tx = await factory.addEthResident(
      value.ethAddress,
      value.ethAddress,

      2500000,
      orgRegistryAddress,
    );
    console.log(tx, 'tx');

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
    <KeyboardAwareScrollView style={globalStyles.scrollView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Card style={{flex: 1}}>
          <CardItem bordered>
            <ResidentRegisterForm register={handleRegister} />
          </CardItem>
          <CardItem footer bordered>
            <TouchableOpacity>
              <Text
                style={styles.hyperLink}
                onPress={() => navigation.navigate('Auth')}>
                Have an account?
              </Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default ResidnetRegister;

const styles = StyleSheet.create({
  hyperLink: {
    fontWeight: 'bold',
    textAlign: 'center',

    color: '#2ACF3B',
    letterSpacing: 1,
  },
});
