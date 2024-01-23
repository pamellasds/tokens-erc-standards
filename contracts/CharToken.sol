// SPDX-License-Identifier: MIT
import "./ERC20Mod.sol";

pragma solidity ^0.8.19;


contract CharToken is ERC20Mod {
    constructor() ERC20Mod("CharToken", "CTK"){
        _mint(msg.sender, 10 * 10 ** decimals());
    }
}