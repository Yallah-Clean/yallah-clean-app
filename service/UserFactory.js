
import web3 from 'web3';
import contract from '@truffle/contract';
const PrivateKeyProvider = require("@truffle/hdwallet-provider");

import contractArtifact from '../assets/contracts/UserFactory.json';
const provider = require('./web3.endpoint.js');

export default class UserFactoryService{

constructor(privateKey) { 
// 0,{ Authentication: Basic dTBicTE4c3JxajpGQUU1bGx4aDh2cXc2QTk3b3dZMWx5YTJyQWlhbmNraFQwRS1LeUJZTms4 }
// this.web3Provider = new Web3.providers.HttpProvider(provider.webProvider,0,{ Authentication: "Basic dTBicTE4c3JxajpGQUU1bGx4aDh2cXc2QTk3b3dZMWx5YTJyQWlhbmNraFQwRS1LeUJZTms4 ",mode: 'no-cors'
// });
this.web3Provider =  new PrivateKeyProvider(privateKey, provider.webProvider,0,{ Authentication: "Basic dTBicTE4c3JxajpGQUU1bGx4aDh2cXc2QTk3b3dZMWx5YTJyQWlhbmNraFQwRS1LeUJZTms4 ",mode: 'no-cors'
});
// this.web3Provider =  new PrivateKeyProvider(privateKey, provider.webProvider);
console.log(privateKey,'private key');

this.web3 = new web3(this.web3Provider);

this.initContract().then(s => {});

}

async initContract() {

this.service = contract(contractArtifact);

this.service.setProvider(new Web3.providers.HttpProvider(provider.webProvider));

}


//   async businessPartners(){

//  const instance = await this.service.at(contractAddress); 

//  const data = await instance.businessPartners.call();

// return data;

// }
  async renounceOwnership(_from, _gas, contractAddress) {

 const instance = await this.service.at(contractAddress)

 .then( async _instance => {
 return await  _instance. renounceOwnership({ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async getOwner(contractAddress){
console.log(contractAddress,'contractAddress');

 const instance = await this.service.at(contractAddress); 
 console.log(instance,'instance');

 const data = await instance.owner.call();
 console.log(data,'data');

return data;

}
  async isOwner(contractAddress){

 const instance = await this.service.at(contractAddress); 

 const data = await instance.isOwner.call();

return data;

}
//   async collectors(){

//  const instance = await this.service.at(contractAddress); 

//  const data = await instance.collectors.call();

// return data;

// }
//   async residents(){

//  const instance = await this.service.at(contractAddress); 

//  const data = await instance.residents.call();

// return data;

// }
  async transferOwnership(newOwner,_from, _gas, contractAddress) {

 const instance = await this.service.at(contractAddress)

 .then( async _instance => {
 return await  _instance. transferOwnership(newOwner,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async isNewResident(user,contractAddress){

 const instance = await this.service.at(contractAddress); 

 const data = await instance.isNewResident.call(user);

return data;

}
  async isNewCollector(user,contractAddress){

 const instance = await this.service.at(contractAddress); 

 const data = await instance.isNewCollector.call(user);

return data;

}
  async isNewBusinessPartners(user){

 const instance = await this.service.at(contractAddress); 

 const data = await instance.isNewBusinessPartners.call(user);

return data;

}
  async getResident(user,contractAddress){

 const instance = await this.service.at(contractAddress); 

 const data = await instance.getResident.call(user);

return data;

}
  async getCollector(user){

 const instance = await this.service.at(contractAddress); 

 const data = await instance.getCollector.call(user);

return data;

}
  async getBusinessPartners(user,contractAddress){

 const instance = await this.service.at(contractAddress); 

 const data = await instance.getBusinessPartners.call(user);

return data;

}
  async addResident(resident,_from, _gas, contractAddress) {

 const instance = await this.service.at(contractAddress)

 .then( async _instance => {
   console.log(_instance,'instance');
   
    await  _instance. addResident(resident,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 console.log(res,'res');
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async addCollector(collector,_from, _gas, contractAddress) {

 const instance = await this.service.at(contractAddress)

 .then( async _instance => {
 return await  _instance. addCollector(collector,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async addBusinessPartner(businessPartner,_from, _gas, contractAddress) {

 const instance = await this.service.at(contractAddress)

 .then( async _instance => {
 return await  _instance. addBusinessPartner(businessPartner,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }

 sendSigned(txData, _privKey, cb) {
  const privateKey = new Buffer(_privKey, 'hex');
  const transaction = new Tx(txData);
  transaction.sign(privateKey);
  console.log(transaction, 'transaction sign(privateKey)');

  const serializedTx = transaction.serialize().toString('hex');
  // web3.eth.sendRawTransaction('0x' + serializedTx, cb);
  this.web3.eth.sendSignedTransaction('0x' + serializedTx, cb);
}
async addResidentSigned(resident, userPK, _privKey, gas,contractAddress) {
  const test= await this.service.at(contractAddress);
  console.log(test,'test');
  
  return await new Promise((resolve, reject) => {
    this.service.at(contractAddress).then(async instance => {
      // meta = instance;
      let nonce;
      console.log(instance, 'instance');
      console.log( instance.addResident, ' instance.addResident');

      // get target function
      const targetFunction = instance.addResident.request(resident).params[0];

      console.log(targetFunction, 'targetFunction');

      this.web3.eth.getTransactionCount(userPK, (error, result)=> {
        nonce = result.toString(16);
        console.log(result, 'nonce');

        console.log('Nonce: ' + nonce);
        const txParams = {
          // gasPrice: 2000000000,
          // gasLimit: 3000000,
          // gas: estimatedGas,
          gas: gas,
          gasPrice: 0,
          to: targetFunction.to,
          data: targetFunction.data,
          from: userPK,

          nonce: '0x' + nonce
        };

        console.log(txParams, 'txParams');

        return this.sendSigned(txParams, _privKey, (err, hash)=> {
          console.log(err, 'err');
          console.log(hash, 'hash');
          resolve(hash);
        });
      });
    });
  })
    .then(rs => {
      console.log('rs', rs);
      return rs;
    })
    .catch(e => {
      console.log(e);
    });
  return promise;
}
async addCollectorSigned(resident, userPK, _privKey, gas,contractAddress) {
  const promise = await new Promise((resolve, reject) => {
    this.service.at(contractAddress).then(async instance => {
      // meta = instance;
      let nonce;
      console.log(instance, 'instance');

      // get target function
      const targetFunction = instance.addCollector.request(resident).params[0];

      console.log(targetFunction, 'targetFunction');

      this.web3.eth.getTransactionCount(userPK, (error, result)=> {
        nonce = result.toString(16);
        console.log(result, 'nonce');

        console.log('Nonce: ' + nonce);
        const txParams = {
          // gasPrice: 2000000000,
          // gasLimit: 3000000,
          // gas: estimatedGas,
          gas: gas,
          gasPrice: 0,
          to: targetFunction.to,
          data: targetFunction.data,
          from: userPK,

          nonce: '0x' + nonce
        };

        console.log(txParams, 'txParams');

        return this.sendSigned(txParams, _privKey, (err, hash)=> {
          console.log(err, 'err');
          console.log(hash, 'hash');
          resolve(hash);
        });
      });
    });
  })
    .then(rs => {
      console.log('rs', rs);
      return rs;
    })
    .catch(e => {
      console.log(e);
    });
  return promise;
}
async addBusinessPartnerSigned(businessPartner, userPK, _privKey, gas,contractAddress) {
  const promise = await new Promise((resolve, reject) => {
    this.service.at(contractAddress).then(async instance => {
      // meta = instance;
      let nonce;
      console.log(instance, 'instance');

      // get target function
      const targetFunction = instance.addBusinessPartner.request(businessPartner).params[0];

      console.log(targetFunction, 'targetFunction');

      this.web3.eth.getTransactionCount(userPK, (error, result)=> {
        nonce = result.toString(16);
        console.log(result, 'nonce');

        console.log('Nonce: ' + nonce);
        const txParams = {
          // gasPrice: 2000000000,
          // gasLimit: 3000000,
          // gas: estimatedGas,
          gas: gas,
          gasPrice: 0,
          to: targetFunction.to,
          data: targetFunction.data,
          from: userPK,

          nonce: '0x' + nonce
        };

        console.log(txParams, 'txParams');

        return this.sendSigned(txParams, _privKey, (err, hash)=> {
          console.log(err, 'err');
          console.log(hash, 'hash');
          resolve(hash);
        });
      });
    });
  })
    .then(rs => {
      console.log('rs', rs);
      return rs;
    })
    .catch(e => {
      console.log(e);
    });
  return promise;
}

}