import web3 from 'web3';
import contract from 'truffle-contract';

import contractArtifact from '../assets/contracts/BusinessPartnerWallet.json';
const provider = require('./web3.endpoint.js');

export default class BusinessPartnerWalletService {
  constructor() {
    this.web3Provider = new web3.providers.WebsocketProvider(provider.webProvider);

    this.web3 = new web3(this.web3Provider);

    this.initContract().then(s => {});
  }

  async initContract() {
    this.service = contract(contractArtifact);

    this.service.setProvider(this.web3Provider);
  }

  async renounceOwnership(_from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.renounceOwnership({
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
  async owner(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.owner.call();

    return data;
  }
  async isOwner(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.isOwner.call();

    return data;
  }
  async getRetailer(retailer, contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.retailers.call(retailer);

    return data;
  }
  async transferOwnership(newOwner, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.transferOwnership(newOwner, {
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
}
