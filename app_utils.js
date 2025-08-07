// Imports and instance
const Web3 = require("web3");

const url = process.env.INFURA_URL;
const web3 = new Web3(url);

// Encrypt
console.log("sha3", web3.utils.sha3("123"));
console.log("keccak256", web3.utils.keccak256("123"));
console.log("solidity", web3.utils.soliditySha3("hola programadores"));
console.log("solidity", web3.utils.soliditySha3("hola", "programadores"));
console.log(
  "solidityType",
  web3.utils.soliditySha3({ type: "string", value: "hola programadores" })
);
console.log(
  "solidityType",
  web3.utils.soliditySha3(
    { type: "string", value: "hell" },
    { type: "uint16", value: 0x3031 }
  )
);

// Generate random numbers
console.log("randomHex", web3.utils.randomHex(0));
console.log("randomHex", web3.utils.randomHex(2));
console.log("randomHex", web3.utils.randomHex(4));
console.log("randomHex", web3.utils.randomHex(8));
console.log("randomHex", web3.utils.randomHex(16));

// Validations
console.log("isHex?: (pepe)", web3.utils.isHex("pepe"));
console.log("isHex?: (3)", web3.utils.isHex(3));
console.log("isHex?: (0xa0e34cb6)", web3.utils.isHex(0xa0e34cb6));
console.log('isHex?: "(0xa0e34cb6)"', web3.utils.isHexStrict("0xa0e34cb6"));
console.log("isHex?: (0xa0e34cb6)", web3.utils.isHexStrict(0xa0e34cb6));

console.log("isAddress?: (0xa0e34cb6)", web3.utils.isAddress(0xa0e34cb6));
console.log(
  "isAddress?: (0x76eC5A0D3632b2133d9f1980903305B62678Fbd3)",
  web3.utils.isAddress(0x76ec5a0d3632b2133d9f1980903305b62678fbd3)
);
console.log(
  'isAddress?: ("0x76eC5A0D3632b2133d9f1980903305B62678Fbd3")',
  web3.utils.isAddress("0x76eC5A0D3632b2133d9f1980903305B62678Fbd3")
);

// Convert
console.log("hexToNumber: (0xea)", web3.utils.hexToNumber("0xea"));
console.log("numberToHex: (234)", web3.utils.numberToHex(234));
console.log("numberToHex: (23456789)", web3.utils.numberToHex(23456789));
console.log(
  "hexToUtf8: (0x49206861766520313030e282ac)",
  web3.utils.hexToUtf8("0x49206861766520313030e282ac")
);
