const hre = require("hardhat");

    async function main() {
        //body
        const signers =  await hre.ethers.getSigners()
        const account0 = signers[0].address;
        const account1 = signers[1].address;

        const BankApp = await hre.ethers.getContractFactory("BankApp");
        const bankApp = await BankApp.deploy("BankApp");
        await bankApp.deployed();
        //account1
        await bankApp.register(account0,1234, "Jeremic", "Afg567d", 300 );
        //account2
        await bankApp.register(account1,1234, "Arose", "Afg567d", 100 );
      await bankApp.connect(signers[0]).login();
       console.log(account0);
        await bankApp.connect(signers[0]).deposit(100);
        await bankApp.connect(signers[0]) .checkBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        console.log(await bankApp.connect(signers[0]).checkBalance(account0));
        console.log(await bankApp.connect(signers[0]).transfer(account1, 50));
        console.log(await bankApp.connect(signers[1]).checkBalance(account1));

        
        

    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
