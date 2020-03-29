
import web3 from 'web3';
import contract from '@truffle/contract';

import contractArtifact from '../assets/contracts/YCAdminRole.json';
const provider = require('./web3.endpoint.js');

export default class YCAdminRoleService{

constructor() { 

this.web3Provider = new Web3.providers.HttpProvider(provider.webProvider);


this.web3 = new web3(this.web3Provider);

this.initContract().then(s => {});

}

async initContract() {

this.service = contract(contractArtifact);

this.service.setProvider(this.web3Provider);

}


  async isYCAdmin(account){

 const instance = await this.service.deployed(); 

 const data = await instance.isYCAdmin.call(account);

return data;

}
  async addYCAdmin(account,_from,_gas){

 const instance = await this.service.deployed()

 .then( async _instance => {
 return await  _instance. addYCAdmin(account,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async renounceYCAdmin(_from,_gas){

 const instance = await this.service.deployed()

 .then( async _instance => {
 return await  _instance. renounceYCAdmin({ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }

}