require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {},
    mumbai: {
      //polygon mumbai https
       url: "https://polygon-mumbai.g.alchemy.com/v2/0duhGORdZM5yzJC0qo0GXGNsMKS7tTNY",

       //private key of metask account
       accounts: ["2b9c04e293be5a11be87d64794289490d6ad49ab946076a4dabb8eefa55a43a6"],
       chainId: 80001,
    },
  },
 
  solidity: "0.8.9",
};

