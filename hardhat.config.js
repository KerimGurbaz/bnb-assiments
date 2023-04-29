require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
  },
  etherscan: {
    apiKey: "6X18FAVZEHZRHNWFTIVFDN7EXKQI64G7MC",
  },
};
