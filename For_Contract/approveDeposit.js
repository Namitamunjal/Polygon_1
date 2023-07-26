const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");//has all important deposit functions
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x9d70fb99ef56f4c5d2ca2683e2869b744143d92937ceaf04d129470b85e41c58";
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0x3658ccFDE5e9629b0805EB06AaCFc42416850961";
const walletAddress="0x929AdF89436817637b10cD85AAF533dBE2a8B830";

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);

    const approveTx = await tokenContract.approve(fxERC20RootAddress, 100);
    await approveTx.wait();

    console.log('Approval confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 100, "0x6556");
    await depositTx.wait();

    console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
