require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  hardhat: {},
  mumbai: {
     url: "",
     accounts: ["2b9c04e293be5a11be87d64794289490d6ad49ab946076a4dabb8eefa55a43a6"],
     chainId: 8001,
  },
  solidity: "0.8.9",
};

