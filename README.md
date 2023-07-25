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

# Gas Optimization

Gas Optimization in Solidity is a process by which code is written to reduce the amount of gas (the fee needed to process a transaction on the Ethereum blockchain) required to run a contract. This is done by writing efficient and optimized code that requires fewer steps in order to execute the contract. Gas optimization is especially important when writing ERC721 contracts, as these contracts require more gas than other types of Ethereum contracts.


# Deployment Environment
This contract can be deployed in any version of solidity between 0.7.0 to 0.9.0.

# Author
Namita Munjal

namitamunjal27@gmail.com
