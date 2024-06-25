import "dotenv/config";
import { ethers } from "ethers";

// access to ethereum
const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;

// there is also an infura provider, but this one is generic
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
//console.log("Current block number", await provider.getBlockNumber());

// ENS > address
//console.log("austingriffith.eth is", await provider.resolveName("atg.eth"));

// big number > small number
const atgbalance = await provider.getBalance("austingriffith.eth");
const sanfordbalance = await provider.getBalance("sanfordstout.eth");
console.log(atgbalance);
console.log(sanfordbalance);

//console.log("austingriffith.eth has ", ethers.formatEther(ATGbalance));

if (atgbalance.gt(sanfordbalance)) {
  console.log("atg has more than sanford");
} else {
  console.log("sanford has more than atg");
}

// small number > big number
//console.log("1.5 ETH is ", ethers.parseEther("1.5"), " wei");

// ENS > address
// console.log(
//   "atg.eth tx count is",
//   await provider.getTransactionCount("atg.eth")
// );

// address > ENS
// console.log(
//   "0x34aA3F359A9D614239015126635CE7732c18fDF3 is ",
//   await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3")
// );
