const hre = require("hardhat");

async function main() {
  const signers =  await hre.ethers.getSigners();
  const contractAddres = "0xE06Fe1E3D3bbFaaB6843936C44D4A94Eba392B64";
  
  //metask Adress
  console.log("myAddress",signers[0].address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
