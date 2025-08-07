// Imports and instance
require("dotenv").config();
const Web3 = require("web3");

const url = process.env.INFURA_URL;
const web3 = new Web3(url);

// web3.eth.getBlock("latest").then( (block) => {
//     console.log(block)
// })

// Get info blocks
web3.eth.getBlock("latest").then((block) => {
  console.log({
    blockhash: block.hash,
    blocknumber: block.number,
    blockminer: block.miner,
  });
});

web3.eth
  .getBlock(
    "0xd439b05373606e791485300b76914aa677d2a91724f1a04b2e4822e5ea52e22c"
  )
  .then((block) => {
    console.log({
      blockhash: block.hash,
      blocknumber: block.number,
      blockminer: block.miner,
    });
  });

web3.eth.getBlock("23089072").then((block) => {
  console.log({
    blockhash: block.hash,
    blocknumber: block.number,
    blockminer: block.miner,
  });
});

web3.eth.getBlock("23089073").then((block) => {
  console.log({
    blockhash: block.hash,
    blocknumber: block.number,
    blockminer: block.miner,
  });
});

web3.eth.getBlockNumber().then((blocks) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(blocks - i).then((block) => {
      console.log({
        blockhash: block.hash,
        blocknumber: block.number,
        blockminer: block.miner,
      });
    });
  }
});

// Get balance of miner`s block
var balance = web3.eth
  .getBalance("0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97")
  .then((bal) => {
    balance = bal;
    console.log(web3.utils.fromWei(bal, "ether"));
  });
