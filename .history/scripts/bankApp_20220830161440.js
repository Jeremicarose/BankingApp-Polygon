const hre = require("hardhat");

    async function main() {
        //body
        const BankApp = await hre.ethers.getContractFactory("BankApp");
        const bankApp = await BankApp.deploy("BankApp");
        await bankApp.deployed();
    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
