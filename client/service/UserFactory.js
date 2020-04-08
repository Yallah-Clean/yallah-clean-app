import web3 from 'web3';
import contract from 'truffle-contract';
const PrivateKeyProvider = require('truffle-hdwallet-provider');
// const PrivateKeyProvider = require('truffle-hdwallet-provider');

import contractArtifact from '../assets/contracts/UserFactory.json';
const provider = require('./web3.endpoint.js');

export default class UserFactoryService {
  constructor(privateKey) {
    // 0,{ Authentication: Basic dTBicTE4c3JxajpGQUU1bGx4aDh2cXc2QTk3b3dZMWx5YTJyQWlhbmNraFQwRS1LeUJZTms4 }
    // this.web3Provider = new Web3.providers.HttpProvider(provider.webProvider,0,{ Authentication: "Basic dTBicTE4c3JxajpGQUU1bGx4aDh2cXc2QTk3b3dZMWx5YTJyQWlhbmNraFQwRS1LeUJZTms4 ",mode: 'no-cors'
    // });
    // this.web3Provider = new PrivateKeyProvider(
    //   privateKey,
    //   provider.webProvider,
    //   200, {
    //     Authorization: 'Basic dTBicTE4c3JxajpGQUU1bGx4aDh2cXc2QTk3b3dZMWx5YTJyQWlhbmNraFQwRS1LeUJZTms4 ',
    //     mode: 'no-cors',
    //   },
    // );
    // this.web3Provider = new PrivateKeyProvider(
    //   privateKey,
    //   provider.webProvider,
    // );
    this.web3Provider = new web3.providers.HttpProvider(provider.webProvider);

    console.log(privateKey, 'private key');

    this.web3 = new web3(this.web3Provider);

    this.initContract().then(s => {});
  }

  async initContract() {
    this.service = contract(contractArtifact);

    this.service.setProvider(
      new web3.providers.HttpProvider(provider.webProvider),
    );
  }

  //   async businessPartners(){

  //  const instance = await this.service.at(contractAddress);

  //  const data = await instance.businessPartners.call();

  // return data;

  // }
  async addEthResident(resident, _from, _gas, contractAddress) {
    console.log('approve');

    return new Promise(resolve => {
      //this address is for dispatcher to fix the issue
      const _web3 = new web3(this.web3.currentProvider);

      const service = new _web3.eth.Contract(
        contractArtifact.abi,
        contractAddress,
      );
      service.methods
        .addResident(resident)
        .send({from: _from, gas: _gas})
        .once('transactionHash', hash => {
          resolve(true);
        });
    });
  }
  async addEthCollector(collector, _from, _gas, contractAddress) {
    console.log('approve');

    return new Promise(resolve => {
      //this address is for dispatcher to fix the issue
      const _web3 = new web3(this.web3.currentProvider);

      const service = new _web3.eth.Contract(
        contractArtifact.abi,
        contractAddress,
      );
      service.methods
        .addCollector(collector)
        .send({from: _from, gas: _gas})
        .once('transactionHash', hash => {
          resolve(true);
        });
    });
  }

  async getResident(user, contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.getResident.call(user);

    return data;
  }
  async getCollector(user, contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.getCollector.call(user);

    return data;
  }
  async getBusinessPartners(user, contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.getBusinessPartners.call(user);

    return data;
  }
  async addResident(resident, _from, _gas, contractAddress) {
    try {
      const instance = await this.service.at(contractAddress);

      const tx = await instance.addResident(resident, {
        from: _from,
        gas: _gas,
      });
      console.log(tx, 'txxxxxxxx');

      return tx;
    } catch (error) {
      console.log(error);

      return error;
    }
  }
  async addCollector(collector, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.addCollector(collector, {
          from: _from,
          gas: _gas,
        });
      })

      .then(res => {
        return res;
      })

      .catch(e => {
        console.log(e);
      });

    return instance;
  }
  async addBusinessPartner(businessPartner, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.addBusinessPartner(businessPartner, {
          from: _from,
          gas: _gas,
        });
      })

      .then(res => {
        return res;
      })

      .catch(e => {
        console.log(e);
      });

    return instance;
  }
  // function web3AsynWrapper (web3Fun) {
  //   return function (arg) {
  //     return new Promise((resolve, reject) => {
  //       web3Fun(arg, (e, data) => e ? reject(e) : resolve(data))
  //     })
  //   }
  // }
}
