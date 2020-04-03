import web3 from 'web3';
import contract from 'truffle-contract';
const PrivateKeyProvider = require('truffle-hdwallet-provider');

import contractArtifact from '../assets/contracts/OrgRegistry.json';
const provider = require('./web3.endpoint.js');
export default class OrgRegistryService {
  constructor(privateKey) {
    this.web3Provider = new PrivateKeyProvider(
      privateKey,
      provider.webProvider,
    );

    // this.web3Provider = new Web3.providers.HttpProvider(provider.webProvider);

    this.web3 = new web3(this.web3Provider);

    this.initContract().then(s => {});
  }
  getContractAddress() {
    return '0xBD682775b8Fbcf8E5Fb81bF2249879CAeD12dAbB';
  }
  async initContract() {
    this.service = contract(contractArtifact);

    this.service.setProvider(this.web3Provider);
  }

  // add new org " this should be done though factory contract later on"
  async deployContract(orgOwner, adminAddress, tokenAddress, rate, from) {
    return await this.service.new(orgOwner, adminAddress, tokenAddress, rate, {
      from: from,
    });
  }

  async collectorRate(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.collectorRate.call();

    return data;
  }
  async getDeliveredCode(bhash, contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.getDeliveredCode.call(bhash);

    return data;
  }
  async userFactory(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.userFactory.call();

    return data;
  }
  async rate(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.rate.call();

    return data;
  }
  async trashsubmission(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.trashsubmission.call();

    return data;
  }
  async getResidentRate(contractAddress) {
    const instance = await this.service. deployed();
    console.log(instance, 'instance');

    const data = await instance.residentRate.call();

    return data;
  }
  async renounceOwnership(_from, _gas, contractAddress) {
    const instance = await this.service
      . deployed()

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
  async pointRaised(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.pointRaised.call();

    return data;
  }
  async owner(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.owner.call();

    return data;
  }
  async isOwner(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.isOwner.call();

    return data;
  }
  async getTrashListItem(code, contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.trashList.call(code);

    return data;
  }
  async getDeliveredAmount(bhash, contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.getDeliveredAmount.call(bhash);

    return data;
  }
  async transferOwnership(newOwner, _from, _gas, contractAddress) {
    const instance = await this.service
      . deployed()

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
  async admin(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.admin.call();

    return data;
  }
  async token(contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.token.call();

    return data;
  }
  async calcCollectorPoints(code, amount, contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.calcCollectorPoints.call(code, amount);

    return data;
  }
  async calcResidentPoints(code, amount, contractAddress) {
    const instance = await this.service. deployed();

    const data = await instance.calcResidentPoints.call(code, amount);

    return data;
  }
  async manageTrashType(
    code,
    name,
    UnitName,
    unitMaltiplier,
    price,
    _from,
    _gas,
    contractAddress,
  ) {
    const instance = await this.service
      . deployed()

      .then(async _instance => {
        return await _instance.manageTrashType(
          code,
          name,
          UnitName,
          unitMaltiplier,
          price,
          {
            from: _from,
            gas: _gas,
          },
        );
      })

      .then(res => {
        return res;
      })

      .catch(e => {
        console.log(e);
      });

    return instance;
  }
  async approve(_from, _gas, contractAddress) {
    const instance = await this.service
      . deployed()

      .then(async _instance => {
        return await _instance.approve({
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
  async addDelivery(
    location,
    time,
    code,
    amount,
    residnet,
    mapHash,
    account,
    _from,
    _gas,
    contractAddress,
  ) {
    const instance = await this.service
      . deployed()

      .then(async _instance => {
        return await _instance.addDelivery(
          location,
          time,
          code,
          amount,
          residnet,
          mapHash,
          account,
          {
            from: _from,
            gas: _gas,
          },
        );
      })

      .then(res => {
        return res;
      })

      .catch(e => {
        console.log(e);
      });

    return instance;
  }
  async validateDeliverables(
    mapHash,
    points,
    account,
    _from,
    _gas,
    contractAddress,
  ) {
    const instance = await this.service
      . deployed()

      .then(async _instance => {
        return await _instance.validateDeliverables(mapHash, points, account, {
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
  async confirmPickup(mapHash, points, account, _from, _gas, contractAddress) {
    const instance = await this.service
      . deployed()

      .then(async _instance => {
        return await _instance.confirmPickup(mapHash, points, account, {
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
