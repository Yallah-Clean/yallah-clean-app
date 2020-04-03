import web3 from 'web3';
const PrivateKeyProvider = require('truffle-hdwallet-provider');

import userFactoryArtifact from '../assets/contracts/UserFactory.json';
import userWalletArtifact from '../assets/contracts/UserWallet.json';
import tokenArtifact from '../assets/contracts/YallaCleanToken.json';
import orgRigsiteryArtifact from '../assets/contracts/OrgRegistry.json';
const provider = require('./web3.endpoint.js');

export default class YallahCleanService {
  constructor(privateKey) {
    this.web3Provider = new PrivateKeyProvider(
      privateKey,
      provider.webProvider,
      0,
      {
        Authentication:
          'Basic dTBicTE4c3JxajpGQUU1bGx4aDh2cXc2QTk3b3dZMWx5YTJyQWlhbmNraFQwRS1LeUJZTms4 ',
        mode: 'no-cors',
      },
    );
    this.web3 = new web3(this.web3Provider);
  }

  initUserFactory(userFactoryAddress) {
    this.userFactoryContract = new web3.eth.Contract(
      userFactoryArtifact.abi,
      userFactoryAddress,
    );
  }

   addResident(resident, _from, _gas, contractAddress) {
    console.log('approve');
    this.initUserFactory(contractAddress);
    return new Promise(resolve => {
      //this address is for dispatcher to fix the issue
      this.userFactoryContract.methods
        .addResident(resident)
        .send({
          from: _from,
        })
        .once('transactionHash', hash => {
          resolve(true);
        });
    });
  }

  addResidentCB(resident, _from, _gas, contractAddress, cb) {
    console.log('approve');
    this.initUserFactory(contractAddress);
    this.userFactoryContract.methods.addResident(resident).send(
      {
        from: _from,
      },
      cb,
    );
  }
}
