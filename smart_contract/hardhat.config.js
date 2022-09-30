require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/p5mrtEKb1IoKrQq7fpqGCV5AwVFLZqDs',
      accounts: ['93837237569185a2e7addb6774d72597ae35195d4b054869d72cf21a44a3a7d7'],
    },
  },
};