// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IChronicle {
  function wat() external view returns (bytes32 wat);
  function read() external view returns (uint value);
  function readWithAge() external view returns (uint value, uint age);
  function tryRead() external view returns (bool isValid, uint value);
  function tryReadWithAge() external view returns (bool isValid, uint value, uint age);
}

contract Chronicle {

  mapping(bytes32 => bool) public allowedKeys;
  address public owner;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Caller is not the owner");
    _;
  }

  function addAddress(string memory apiKey) public onlyOwner {
    allowedKeys[keccak256(abi.encodePacked(apiKey, msg.sender))] = true;
  }

  function removeAddress(string memory apiKey) public onlyOwner {
    allowedKeys[keccak256(abi.encodePacked(apiKey, msg.sender))] = false;
  }

  function readWithAge(string memory pairId, string memory apiKey) public view returns (uint value, uint age) {
    require(allowedKeys[keccak256(abi.encodePacked(apiKey, msg.sender))], "Invalid API key");

    address main = 0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660;
    if (keccak256(bytes("btcusd")) == keccak256(bytes(pairId))) {
      main = 0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c;
    }
    if (keccak256(bytes("daiusd")) == keccak256(bytes(pairId))) {
      main = 0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4;
    }
    if (keccak256(bytes("maticusd")) == keccak256(bytes(pairId))) {
      main = 0xa48c56e48A71966676d0D113EAEbe6BE61661F18;
    }
    IChronicle ChronicleContract = IChronicle(main);
    return ChronicleContract.readWithAge();
  }

}
