const hre = require("hardhat");

async function main() {
  const BankApp = await hre.ethers.getContractFactory("BankApp");
  const bankApp = await BankApp.deploy("BankApp");
  await bankApp.deployed();

  console.log(`bankApp has been deployed at ${bankApp.address} address`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
