import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {globalStyles} from '../../styles/global';
import CollectorRegisterForm from '../../components/collectorRegisterForm';

import OrgRegistry from '../../service/OrgRegistry.js';
import UserFactoryService from '../../service/UserFactory.js';
import Web3Service from '../../service/web3.service.js';
import { Card, CardItem, Text } from 'native-base';

const CollectorRegister = ({navigation}) => {

  const handleRegister = async value => {
    const web3Service = new Web3Service();
    // create addresss
    //  await  createAccount( state.password);
    // save to blockchain
    // const address = await web3Service.createAccount(value.password);
    // value.ethAddress = address.address;
    // value.privateKey = address.privateKey;
    const address = await web3Service.getAccountByIndex(3);
    value.ethAddress = address;
    const factory = new UserFactoryService("address.privateKey");
    const orgRegistryService = new OrgRegistry("address.privateKey");
    const orgRegistryAddress = await orgRegistryService.userFactory("");
    // const factory = new UserFactoryService();
    console.log(factory, 'factory');

    const tx = await factory.addEthCollector(
      value.ethAddress,
      value.ethAddress,
      2000000000,
      orgRegistryAddress,
    );
    //   console.log(tx,'tx');

    // const tx=  await factory. addResidentSigned( state.ethAddress,  state.ethAddress,  state.privateKey, 2000000000,factoryAddress)
    console.log(tx, 'tx');
    if (tx) {
      // save to off chain storage
      // const wallet = await factory.getResident( state.ethAddress,factoryAddress);
      value.walletAddress = tx.address;
      // const storage = new LocalStorageService();
      // await storage.setUser(value);
      console.log(value);

      //Api.registerRes( state)
    }
  };
  return (
    <KeyboardAwareScrollView
      // contentInsetAdjustmentBehavior="automatic"
      style={globalStyles.scrollView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Card style={{flex:1}}>
            
            <CardItem bordered>
            <CollectorRegisterForm register={handleRegister} />

            </CardItem>
            <CardItem footer bordered>
 <TouchableOpacity>

 <Text style={styles.hyperLink} onPress={ ()=> navigation.navigate('Auth')}>Have an account?</Text> 
 
 </TouchableOpacity>
            </CardItem>
          </Card>
  
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default CollectorRegister;

const styles = StyleSheet.create({
  hyperLink: {
    fontWeight: 'bold',
     textAlign: 'center',

    color: '#2ACF3B',
    letterSpacing: 1,
     

  },
});
