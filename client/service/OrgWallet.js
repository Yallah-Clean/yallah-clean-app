import web3 from 'web3';
import contract from 'truffle-contract';

import contractArtifact from '../assets/contracts/OrgWallet.json';
const provider = require('./web3.endpoint.js');

export default class OrgWalletService {
  constructor() {
    this.web3Provider = new web3.providers.HttpProvider(provider.webProvider);

    this.web3 = new web3(this.web3Provider);

    this.initContract().then(s => {});
  }

  async initContract() {
    this.service = contract(contractArtifact);

    this.service.setProvider(this.web3Provider);
  }

  async token(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.token.call();

    return data;
  }
  async rate(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.rate.call();

    return data;
  }
  async pointRaised(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.pointRaised.call();

    return data;
  }
}
