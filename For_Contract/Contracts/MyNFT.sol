// SPDX-License-Identifier: MIT

pragma solidity > = 0.7.0 < 0.9.0;

import "erc721a/contracts/ERC721A.sol";

contract emojis is ERC721A {
    address public owner;

    // Maximum number of tokens that can be minted
    uint256 public maxQuantity = 10;

    // Base url for the nfts
    string baseUrl =
        "https://bafybeihuzl3vlndrvwylalfisj2znacupokrhtrty6brfkqj44azgzgnr4.ipfs.nftstorage.link/";

    // URL for the prompt description
    string public prompt = "These NFTs represent different emojis";

    constructor() ERC721A("emojis", "Emoji") {
        owner = msg.sender;
    }

    // Modifier that only allows the owner to execute a function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner has the right to perform this action!");
        _;
    }

    // Function to mint NFT which only owner can perform
    function mint(uint256 quantity) external payable onlyOwner {
        require(msg.sender == owner(), "Only the contract owner can mint");
        require(totalSupply() + quantity <= maxQuantity, "You can not mint more than the maximum quantity");
        _mint(msg.sender, quantity);
    }

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURL() internal view override returns (string memory) {
        return baseUrl;
    }

    // Return the URL for the prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
