import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    300: {
    Multicall: {
        address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
        abi:[
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "target",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Call[]",
                  "name": "calls",
                  "type": "tuple[]"
                }
              ],
              "name": "aggregate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "blockNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes[]",
                  "name": "returnData",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "target",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "allowFailure",
                      "type": "bool"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Call3[]",
                  "name": "calls",
                  "type": "tuple[]"
                }
              ],
              "name": "aggregate3",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "bool",
                      "name": "success",
                      "type": "bool"
                    },
                    {
                      "internalType": "bytes",
                      "name": "returnData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Result[]",
                  "name": "returnData",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "target",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "allowFailure",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Call3Value[]",
                  "name": "calls",
                  "type": "tuple[]"
                }
              ],
              "name": "aggregate3Value",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "bool",
                      "name": "success",
                      "type": "bool"
                    },
                    {
                      "internalType": "bytes",
                      "name": "returnData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Result[]",
                  "name": "returnData",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "target",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Call[]",
                  "name": "calls",
                  "type": "tuple[]"
                }
              ],
              "name": "blockAndAggregate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "blockNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "blockHash",
                  "type": "bytes32"
                },
                {
                  "components": [
                    {
                      "internalType": "bool",
                      "name": "success",
                      "type": "bool"
                    },
                    {
                      "internalType": "bytes",
                      "name": "returnData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Result[]",
                  "name": "returnData",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBasefee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "basefee",
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
                  "name": "blockNumber",
                  "type": "uint256"
                }
              ],
              "name": "getBlockHash",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "blockHash",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBlockNumber",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "blockNumber",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getChainId",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "chainid",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentBlockCoinbase",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "coinbase",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentBlockDifficulty",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "difficulty",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentBlockGasLimit",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "gaslimit",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentBlockTimestamp",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "timestamp",
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
                  "name": "addr",
                  "type": "address"
                }
              ],
              "name": "getEthBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "balance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getLastBlockHash",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "blockHash",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bool",
                  "name": "requireSuccess",
                  "type": "bool"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "target",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Call[]",
                  "name": "calls",
                  "type": "tuple[]"
                }
              ],
              "name": "tryAggregate",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "bool",
                      "name": "success",
                      "type": "bool"
                    },
                    {
                      "internalType": "bytes",
                      "name": "returnData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Result[]",
                  "name": "returnData",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bool",
                  "name": "requireSuccess",
                  "type": "bool"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "target",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Call[]",
                  "name": "calls",
                  "type": "tuple[]"
                }
              ],
              "name": "tryBlockAndAggregate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "blockNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "blockHash",
                  "type": "bytes32"
                },
                {
                  "components": [
                    {
                      "internalType": "bool",
                      "name": "success",
                      "type": "bool"
                    },
                    {
                      "internalType": "bytes",
                      "name": "returnData",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct Multicall3.Result[]",
                  "name": "returnData",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            }
          ]        
    },
    L2BaseToken: {
      address: "0xEE15464bBc574f6f64E84d26b7C8D42b1C8cC8e8",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "TokenMint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {
        allowance: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        approve: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        balanceOf: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        decimals: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        decreaseAllowance: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        increaseAllowance: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        name: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        symbol: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        totalSupply: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        transfer: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        transferFrom: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
      },
    },
  }} as const;

export default externalContracts satisfies GenericContractsDeclaration;
