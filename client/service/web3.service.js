import web3 from 'web3';
const provider = require('./web3.endpoint.js');
const PrivateKeyProvider = require('truffle-hdwallet-provider');

export default class Web3Service {
  // net = new Web3Net('ws://172.27.150.7:22000');
  constructor() {
    this.web3Provider = new web3.providers.HttpProvider(provider.webProvider);

    this.web3 = new web3(this.web3Provider);
    this.accounts = [];
    this.account = '';
  }

  async getCurrentAccount() {
    this.accounts = await this.web3.eth.getAccounts();
    if (this.accounts.length === 0) {
      alert(
        "Couldn't get any accounts! Make sure your Ethereum client is configured correctly.",
      );
      return;
    }
    console.log(this.accounts, ' this.accounts');

    this.account = this.accounts[0];

    return this.account;
  }
  async createAccount(passpword) {
    // console.log(this.web3.eth.accounts, 'test');

    const newAccount = await this.web3.eth.accounts.create(passpword);
    // const newAccount = await this.web3.eth.personal.newAccount(passpword);
    // console.log(newAccount, 'newAccount');

    return newAccount;
  }
  transferEth(receiver, amount, _from=ethAdminAccount, _gas=20000) {
    // const _web3Provider =  new PrivateKeyProvider(ethPrivateKey, provider.webProvider)
    const _web3 = new web3(this.web3Provider);
    return new Promise(async(resolve) => {
   await _web3.eth.sendTransaction({to:receiver, from:_from, value:_web3.utils.toWei(_web3.utils.toBN(amount).toString(), 'ether')})
    .on('transactionHash', function(hash){
        // console.log('tx hash',hash);
        resolve(hash);
    })
    .on('receipt', function(receipt){
        // console.log('tx receipt',receipt);

    })
//     .on('confirmation', function(confirmationNumber, receipt){             console.log('tx  confirmationNumberreceipt',{confirmationNumber,receipt});
// })
    .on('error', console.error); 
});
}
  async getBalanceOf(address) {
    let balance = await this.web3.eth.getBalance(address); //Will give value in.
    // balance = this.web3.toDecimal(balance);
    return balance;
  }
  async getAccountByIndex(index) {
    this.accounts = await this.web3.eth.getAccounts();

    return this.accounts[index];
  }
  isVaildAddress(address) {
    console.log('service hit');

    return this.web3.utils.isAddress(address);
  }
  async unLockAccount(address, pasword, unlock_duration_sec = 10000) {
    if (!(await this.isUnlocked(address))) {
      return await this.web3.eth.personal.unlockAccount(
        address,
        pasword,
        unlock_duration_sec,
      );
    }
  }
  // async unLockAccount(address, pasword, unlock_duration_sec = 10000) {
  //   if (!(await this.isAccountLocked(address))) {
  //     return await this.web3.eth.personal.unlockAccount(
  //       address,
  //       pasword,
  //       unlock_duration_sec
  //     );
  //   }
  // }
  async getProvider() {
    return await this.web3.currentProvider;
  }

  async isAccountLocked(account) {
    try {
      const tx = await this.web3.eth.sendTransaction({
        from: account,
        to: account,
        value: 0,
      });
      console.log(tx, 'tx');

      return true;
    } catch (err) {
      console.log(err, 'error in lock');

      // return err.message == 'authentication needed: password or unlock';
      return false;
    }
  }

  async isUnlocked(address) {
    try {
      const sign = await this.web3.eth.sign('', address);
      console.log(sign, 'sign');
    } catch (e) {
      console.log(e, 'error in sing');

      return false;
    }
    return true;
  }
}
