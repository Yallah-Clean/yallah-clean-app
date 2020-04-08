let USER = 'u0bq18srqj';
let PASS = 'FAE5llxh8vqw6A97owY1lya2rAianckhT0E-KyBYNk8';
let RPC_ENDPOINT = 'u0c27rjk0h-u0jpleum6x-rpc.us0-aws.kaleido.io'; // Remove the leading https://

// HTTP Provider Example
// NOTE: The HTTP Provider is deprecated, as it won't work for subscriptions.
// // See: https://web3js.readthedocs.io/en/1.0/web3.html#providers

// const appCred = 'u0bq18srqj:FAE5llxh8vqw6A97owY1lya2rAianckhT0E-KyBYNk8'; // from application credential widget
// const connectionURL = 'u0c27rjk0h-u0jpleum6x-rpc.us0-aws.kaleido.io'; // without protocol (https://)
// let nodeUrl = `https://u0bq18srqj:FAE5llxh8vqw6A97owY1lya2rAianckhT0E-KyBYNk8@u0c27rjk0h-u0jpleum6x-rpc.us0-aws.kaleido.io`;
// let nodeUrl = "https://ropsten.infura.io/v3/a30f44f7f6de4a7dbe4c9ad2eea7420e";
// let nodeUrl = "wss://" + USER + ":" + PASS + "@" + WSS_ENDPOINT;
let nodeUrl = "ws://localhost:8545";

module.exports = {
  webProvider: nodeUrl,
};
