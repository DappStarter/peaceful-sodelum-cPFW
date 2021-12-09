require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind hospital good clock bubble swarm'; 
let testAccounts = [
"0x18025f9b847ebd6863378b1f4a82f4d1f4e5895b366fdbcaf89a29bcea2d7838",
"0x0fa1f38b627094fa5ee9611d3dd846411f8554ce7f3aeb44cafea36a2cf94e14",
"0xea559a3d5739bb1d1a12692f7561b9432728db4440b16fb894dff25bc0694ae3",
"0x5d7b56f077c431e307598f2fe0a01bb1ac37b5eb16a7067fbfb443bcf206cb75",
"0x6647b55a95bbe9a3a6a2a82000d0433872d73d589e832e871b1134849b67604e",
"0xe246eaf8ecf8aac9230333b22b5b8625ad85f446fed7aed8c566e4e62c03190a",
"0xc32e6b40c4da7141dbbf64b9a7f9ade1454f9255b69d516ff868384eae7f91c8",
"0x8610f27f25d0b25b098b0ea386b144476f23ba5831212024ff6a9e61b5b80bdf",
"0xa7e207437f7275c151d0cc71b1fe2b4b4a33d8c41da5e1cc6d8a988b426dafcb",
"0xdcf5425c14987817ec6ec978c5ad2a95e9aca23b18afaa5d6ed44ba5d572080c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

