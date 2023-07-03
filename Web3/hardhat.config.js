/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url:'https://rpc.ankr.com/eth_sepolia',
        account:[`0x${process.env.PRIVATE_KEY}`]
  
      },
      goerli: {
        url: 'https://rpc.ankr.com/eth_goerli',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
