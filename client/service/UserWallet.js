import web3 from 'web3';
import contract from 'truffle-contract';

import contractArtifact from '../assets/contracts/UserWallet.json';
const provider = require('./web3.endpoint.js');

export default class UserWalletService {
  constructor() {
    this.web3Provider = new web3.providers.WebsocketProvider(provider.webProvider);

    this.web3 = new web3(this.web3Provider);

    this.initContract().then(s => {});
  }

  async initContract() {
    this.service = contract(contractArtifact);

    this.service.setProvider(this.web3Provider);
  }

  async raisedPoints(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.raisedPoints.call();

    return data;
  }
  async orgRegistry(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.orgRegistry.call();

    return data;
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
  async isCollector(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.isCollector.call();

    return data;
  }
  async currentPoints(contractAddress) {
    const instance = await this.service.at(contractAddress);

    const data = await instance.currentPoints.call();

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
  async approveCollector(status, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.approveCollector(status, {
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
  async residentSendRequest(location, time, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.residentSendRequest(location, time, {
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
  async residentConfirm(bhash, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.residentConfirm(bhash, {
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
  async collectorSubmitRequest(location, time, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.collectorSubmitRequest(location, time, {
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
  async collectorAddDelivery(
    location,
    time,
    code,
    amount,
    _resident,
    mapHash,
    _from,
    _gas,
    contractAddress,
  ) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.collectorAddDelivery(
          location,
          time,
          code,
          amount,
          _resident,
          mapHash,
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
  async OrgConfirm(bhash, _from, _gas, contractAddress) {
    const instance = await this.service
      .at(contractAddress)

      .then(async _instance => {
        return await _instance.OrgConfirm(bhash, {
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
