const hre = require("hardhat");

async function main() {
  const FunToken = await hre.ethers.getContractFactory("FunToken");
  const funToken = await FunToken.deploy(100);

  await funToken.deployed();

  console.log("FunToken deployed with an initial supply of 100 tokens to:", funToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
