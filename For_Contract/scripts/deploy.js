const { ethers, upgrades } = require("hardhat");

async function main() {
  const maxQuantity = 10; 
  const baseUrl = "https://bafybeihuzl3vlndrvwylalfisj2znacupokrhtrty6brfkqj44azgzgnr4.ipfs.nftstorage.link/";
  const promptDescription = "These NFTs represent different emojis"; 

  const Emojis = await ethers.getContractFactory("emojis");
  const emojis = await upgrades.deployProxy(Emojis, [], { initializer: "initialize", gasLimit: 100000 });

  // Set the contract owner
  await emojis.transferOwnership("0x929AdF89436817637b10cD85AAF533dBE2a8B830"); // Replace with the desired contract owner's address

  console.log("Contract deployed to:", emojis.address);

  // Set the base URL and prompt description
  await emojis.setBaseURL(baseUrl);
  await emojis.setPrompt(promptDescription);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
