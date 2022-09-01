const hre = require("hardhat");

    async function main() {
        //body
        const signers =  await hre.ethers.getSigners()
        const account0 = signers[0].address;
        const account1 = signers[1].address;

        const BankApp = await hre.ethers.getContractFactory("BankApp");
        const bankApp = await BankApp.deploy("BankApp");
        await bankApp.deployed();
        
        //created account 0
        await bankApp.register(account0,1234, "Jeremic", "Afg567d", 300 );
        
        //created account 1
        await bankApp.register(account1,1234, "Arose", "Afg567d", 100 );

        //login account 0
        await bankApp.connect(signers[0]).login();
        console.log(account0);
        await bankApp.connect(signers[0]).deposit(100);

       //check account 0 balance
        console.log(await bankApp.connect(signers[0]).checkBalance(account0));

        //transfer 50 from account 0 to account 1
        console.log(account1);
        await bankApp.connect(signers[0]).transfer(account1, 50);

        //check account 1 balance
        console.log(await bankApp.connect(signers[1]).checkBalance(account1));

        
        

    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
