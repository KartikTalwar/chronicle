import { ethers } from "hardhat";

async function main() {

  const oracle = await ethers.getContractFactory("Chronicle");
  const deploy = await oracle.deploy();


  console.log("Contract deployed to address:", deploy.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
