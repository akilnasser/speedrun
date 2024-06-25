import { ethers } from "ethers";
import { getProvider } from "./utils.js";
// import { myNFTAbi } from "./myNFTAbi.js";

const myNFTAddress = "";

const sepoliaProvider = getSigner();

const mintPrice = await myNFTContract.MINT_PRICE();

const mintCalldata = ""; // methodID aka address of method in NFT

console.log("Minting NFT");

const mintTx = await sepoliaSigner.sendTransaction({
  to: myNFTAddress,
  value: mintPrice,
  data: mintCalldata,
});

console.log("Tx sent", mintTx.hash);

await mintTx.wait();
