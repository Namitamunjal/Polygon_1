# Overview

Moving the NFT project to Polygon to increase demand and save on gas involves several steps, including deploying the NFT collection on Ethereum, mapping it to Polygon, and transferring assets over via the Polygon Bridge. Additionally, we will need to generate images for the NFTs using an image generation tool like DALL-E 2 or Midjourney.

# Objectives
1. Generate a 5-item collection using DALLE 2 or Midjourney
2. Store items on IPFS using pinata.cloud
3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
4. You should have a promptDescription function on the contract that returns the prompt you used to generate the images
5. Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
6. Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
7. Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
* Approve the NFTs to be transferred
* Deposit the NFTs to the Bridge
* Test balanceOf on Mumbai

# Tools Used
 * Hardhat
 * Foundry
   
### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance


# Gas Optimization

Gas Optimization in Solidity is a process by which code is written to reduce the amount of gas (the fee needed to process a transaction on the Ethereum blockchain) required to run a contract. This is done by writing efficient and optimized code that requires fewer steps in order to execute the contract. Gas optimization is especially important when writing ERC721 contracts, as these contracts require more gas than other types of Ethereum contracts.


# Deployment Environment
This contract can be deployed in any version of solidity between 0.7.0 to 0.9.0.

# Author
Namita Munjal

namitamunjal27@gmail.com
