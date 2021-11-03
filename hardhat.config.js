require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "Alchemyで得たropstenのURL",
      accounts: "自分のウォレットの秘密鍵",
    },
    mainnet: {
      url: "Alchemyで得たEthereumのmainnetのURL",
      accounts: "自分のウォレットの秘密鍵",
    },
  },
};
