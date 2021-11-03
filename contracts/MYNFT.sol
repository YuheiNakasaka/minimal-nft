//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract MYNFT is ERC721PresetMinterPauserAutoId {
    constructor()
        ERC721PresetMinterPauserAutoId("MYNFT", "nft", "http://example.com/")
    {}
}
