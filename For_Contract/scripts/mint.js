// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

const tokenAddress = "0x69673dbe52bf80cd7e01894397b7e742e092300b923df1f8edf884150600caec"; 
const tokenABI = tokenContractJSON.abi; //to get the abi information that we need

const walletAddress="0x929AdF89436817637b10cD85AAF533dBE2a8B830";



async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    const tx = await token.mint(walletAddress, 100);
    await tx.wait(); //waiting for transaction to be confirmed om blockchain

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
