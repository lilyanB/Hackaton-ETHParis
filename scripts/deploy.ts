const { ethers } = require("hardhat");

const verifier = require("../artifacts/contracts/Verifier.sol/Verifier.json");

async function main() {
  const verifier = await ethers.deployContract("Verifier");

  await verifier.waitForDeployment();

  console.log(`verifier deployed to ${verifier.target}`);

  const whitelist = await ethers.deployContract("Whitelist", [verifier.target]);

  await whitelist.waitForDeployment();

  console.log(`whitelist deployed to ${whitelist.target}`);

  const voting = await ethers.deployContract("Voting", [
    verifier.target,
    whitelist.target,
  ]);

  await voting.waitForDeployment();

  console.log(`voting deployed to ${voting.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
