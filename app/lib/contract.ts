export const getOracleAddress = function(id: string): any {
  const addresses: Record<string, string> = {
    "ethusd": "0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660",
    "btcusd": "0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c",
    "daiusd": "0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4",
    "maticusd": "0xa48c56e48A71966676d0D113EAEbe6BE61661F18",
  }
//   return addresses[id]
  return "0xB304dA8f20fdBB8982c5c472c25F4eE4503368D5"
}

export const chronicleABI = [
    {
      "name": "readWithAge",
      "constant": true,
      "inputs": [
        {
          "name": "pairId",
          "type": "string"
        },
        {
          "name": "apiKey",
          "type": "string"
        }
      ],
      "outputs": [
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "age",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "name": "addAddress",
      "inputs": [
        {
          "internalType": "string",
          "name": "apiKey",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  ]

export const rawChronicleABI = [
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "initialAuthed",
                  "type": "address"
              },
              {
                  "internalType": "bytes32",
                  "name": "wat_",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "inputs": [
              {
                  "internalType": "uint8",
                  "name": "numberSigners",
                  "type": "uint8"
              },
              {
                  "internalType": "uint8",
                  "name": "bar",
                  "type": "uint8"
              }
          ],
          "name": "BarNotReached",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "uint32",
                  "name": "givenAge",
                  "type": "uint32"
              },
              {
                  "internalType": "uint32",
                  "name": "currentTimestamp",
                  "type": "uint32"
              }
          ],
          "name": "FutureMessage",
          "type": "error"
      },
      {
          "inputs": [],
          "name": "InChallengePeriod",
          "type": "error"
      },
      {
          "inputs": [],
          "name": "NoOpPokeToChallenge",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              }
          ],
          "name": "NotAuthorized",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              }
          ],
          "name": "NotTolled",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "uint160",
                  "name": "gotHash",
                  "type": "uint160"
              },
              {
                  "internalType": "uint160",
                  "name": "wantHash",
                  "type": "uint160"
              }
          ],
          "name": "SchnorrDataMismatch",
          "type": "error"
      },
      {
          "inputs": [],
          "name": "SchnorrSignatureInvalid",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "signer",
                  "type": "address"
              }
          ],
          "name": "SignerNotFeed",
          "type": "error"
      },
      {
          "inputs": [],
          "name": "SignersNotOrdered",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "uint32",
                  "name": "givenAge",
                  "type": "uint32"
              },
              {
                  "internalType": "uint32",
                  "name": "currentAge",
                  "type": "uint32"
              }
          ],
          "name": "StaleMessage",
          "type": "error"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "AuthGranted",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "AuthRenounced",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint8",
                  "name": "oldBar",
                  "type": "uint8"
              },
              {
                  "indexed": false,
                  "internalType": "uint8",
                  "name": "newBar",
                  "type": "uint8"
              }
          ],
          "name": "BarUpdated",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feed",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
              }
          ],
          "name": "FeedDropped",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feed",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
              }
          ],
          "name": "FeedLifted",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "oldMaxChallengeReward",
                  "type": "uint256"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newMaxChallengeReward",
                  "type": "uint256"
              }
          ],
          "name": "MaxChallengeRewardUpdated",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint16",
                  "name": "oldOpChallengePeriod",
                  "type": "uint16"
              },
              {
                  "indexed": false,
                  "internalType": "uint16",
                  "name": "newOpChallengePeriod",
                  "type": "uint16"
              }
          ],
          "name": "OpChallengePeriodUpdated",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "challenger",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "reward",
                  "type": "uint256"
              }
          ],
          "name": "OpChallengeRewardPaid",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "schnorrErr",
                  "type": "bytes"
              }
          ],
          "name": "OpPokeChallengedSuccessfully",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              }
          ],
          "name": "OpPokeChallengedUnsuccessfully",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "indexed": false,
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              }
          ],
          "name": "OpPokeDataDropped",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "opFeed",
                  "type": "address"
              },
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "indexed": false,
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "indexed": false,
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              }
          ],
          "name": "OpPoked",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "val",
                  "type": "uint128"
              },
              {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "age",
                  "type": "uint32"
              }
          ],
          "name": "Poked",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "TollGranted",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "caller",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "TollRenounced",
          "type": "event"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "authed",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "authed",
          "outputs": [
              {
                  "internalType": "address[]",
                  "name": "",
                  "type": "address[]"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "bar",
          "outputs": [
              {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "bud",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "challengeReward",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              }
          ],
          "name": "constructOpPokeMessage",
          "outputs": [
              {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              }
          ],
          "name": "constructPokeMessage",
          "outputs": [
              {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "decimals",
          "outputs": [
              {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "deny",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "diss",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "feedIndex",
                  "type": "uint256"
              }
          ],
          "name": "drop",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256[]",
                  "name": "feedIndexes",
                  "type": "uint256[]"
              }
          ],
          "name": "drop",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "feedRegistrationMessage",
          "outputs": [
              {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "feeds",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              },
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
              }
          ],
          "name": "feeds",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              },
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "feeds",
          "outputs": [
              {
                  "internalType": "address[]",
                  "name": "",
                  "type": "address[]"
              },
              {
                  "internalType": "uint256[]",
                  "name": "",
                  "type": "uint256[]"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes32",
                  "name": "message",
                  "type": "bytes32"
              },
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              }
          ],
          "name": "isAcceptableSchnorrSignatureNow",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "kiss",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "latestRoundData",
          "outputs": [
              {
                  "internalType": "uint80",
                  "name": "roundId",
                  "type": "uint80"
              },
              {
                  "internalType": "int256",
                  "name": "answer",
                  "type": "int256"
              },
              {
                  "internalType": "uint256",
                  "name": "startedAt",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "updatedAt",
                  "type": "uint256"
              },
              {
                  "internalType": "uint80",
                  "name": "answeredInRound",
                  "type": "uint80"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint256",
                          "name": "x",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "y",
                          "type": "uint256"
                      }
                  ],
                  "internalType": "struct LibSecp256k1.Point",
                  "name": "pubKey",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "uint8",
                          "name": "v",
                          "type": "uint8"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "r",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "s",
                          "type": "bytes32"
                      }
                  ],
                  "internalType": "struct IScribe.ECDSAData",
                  "name": "ecdsaData",
                  "type": "tuple"
              }
          ],
          "name": "lift",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint256",
                          "name": "x",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "y",
                          "type": "uint256"
                      }
                  ],
                  "internalType": "struct LibSecp256k1.Point[]",
                  "name": "pubKeys",
                  "type": "tuple[]"
              },
              {
                  "components": [
                      {
                          "internalType": "uint8",
                          "name": "v",
                          "type": "uint8"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "r",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "s",
                          "type": "bytes32"
                      }
                  ],
                  "internalType": "struct IScribe.ECDSAData[]",
                  "name": "ecdsaDatas",
                  "type": "tuple[]"
              }
          ],
          "name": "lift",
          "outputs": [
              {
                  "internalType": "uint256[]",
                  "name": "",
                  "type": "uint256[]"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "maxChallengeReward",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "maxFeeds",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              }
          ],
          "name": "opChallenge",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "opChallengePeriod",
          "outputs": [
              {
                  "internalType": "uint16",
                  "name": "",
                  "type": "uint16"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "opFeedIndex",
          "outputs": [
              {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "uint8",
                          "name": "v",
                          "type": "uint8"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "r",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "s",
                          "type": "bytes32"
                      }
                  ],
                  "internalType": "struct IScribe.ECDSAData",
                  "name": "ecdsaData",
                  "type": "tuple"
              }
          ],
          "name": "opPoke",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "uint8",
                          "name": "v",
                          "type": "uint8"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "r",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "bytes32",
                          "name": "s",
                          "type": "bytes32"
                      }
                  ],
                  "internalType": "struct IScribe.ECDSAData",
                  "name": "ecdsaData",
                  "type": "tuple"
              }
          ],
          "name": "opPoke_optimized_397084999",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "peek",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              },
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              }
          ],
          "name": "poke",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "components": [
                      {
                          "internalType": "uint128",
                          "name": "val",
                          "type": "uint128"
                      },
                      {
                          "internalType": "uint32",
                          "name": "age",
                          "type": "uint32"
                      }
                  ],
                  "internalType": "struct IScribe.PokeData",
                  "name": "pokeData",
                  "type": "tuple"
              },
              {
                  "components": [
                      {
                          "internalType": "bytes32",
                          "name": "signature",
                          "type": "bytes32"
                      },
                      {
                          "internalType": "address",
                          "name": "commitment",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "signersBlob",
                          "type": "bytes"
                      }
                  ],
                  "internalType": "struct IScribe.SchnorrData",
                  "name": "schnorrData",
                  "type": "tuple"
              }
          ],
          "name": "poke_optimized_7136211",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "read",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "readWithAge",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "rely",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint8",
                  "name": "bar_",
                  "type": "uint8"
              }
          ],
          "name": "setBar",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "maxChallengeReward_",
                  "type": "uint256"
              }
          ],
          "name": "setMaxChallengeReward",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint16",
                  "name": "opChallengePeriod_",
                  "type": "uint16"
              }
          ],
          "name": "setOpChallengePeriod",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "tolled",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "tolled",
          "outputs": [
              {
                  "internalType": "address[]",
                  "name": "",
                  "type": "address[]"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "tryRead",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              },
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "tryReadWithAge",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              },
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "who",
                  "type": "address"
              }
          ],
          "name": "wards",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "wat",
          "outputs": [
              {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "stateMutability": "payable",
          "type": "receive"
      }
  ] as const