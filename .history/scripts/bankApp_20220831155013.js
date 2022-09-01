const hre = require("hardhat");

    async function main() {
        //body
        const signers =  await hre.ethers.getSigners()
        const account0 = signers[0].address;

        const BankApp = await hre.ethers.getContractFactory("BankApp");
        const bankApp = await BankApp.deploy("BankApp");
        await bankApp.deployed();

        await bankApp.register(account0,1234, "Jeremic", "Afg567d", 300 );
        await bankApp.login();

    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
