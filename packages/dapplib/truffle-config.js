require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember evil hockey arctic broken slab'; 
let testAccounts = [
"0x12475ac9f12837073624d077b84df76343a770ea2e33af62954a46fa7ad530d2",
"0x0421c620366e6edc6a2c54ad008759bcbe8e79975f8fcf89004a6c21842717dd",
"0x7bd6593b4d254fdbe4318b7436a169de355ce5192350f54fbb91d908ae7d2e49",
"0x632e59c11283ff2302679c7b0cb6dae95ab100b6286b31be3d0d466e88b0b762",
"0x489109ce5427b2cc79db26cd052ccad27d3290ee3fff7da025ccca454c3db6c5",
"0x0bb0caec2c13016367f8eb31e0aa05b53c66f2c69a38e2891cdf2105233807bb",
"0x8d716e7452092f1aa7104aa4e9fe810effd79093176503b1dd8edcbcaba7f8c5",
"0x3d31d076deb10dc418d8e1db278ff5491ab372539d2d7ac8aa4abb3716a905b0",
"0xfee62f5fcb38055d03c4f41f7ce169fda3850f1c6fd2b7be8ced3cc6fe97eeee",
"0x59db6dd16452d32682369f179442f8f59357d8d1423947e3a4bd821620767556"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
