import { ethers } from "ethers";
import { getSigner } from "./utils.js";
import myNFTAbi from "./myNFTAbi.js";

const myNFTAddress = //;
const sepoliaSigner = getSigner();

const myNFTContract = new ethers.Contract(
  myNFTAddress,
  myNFTAbi,
  sepoliaSigner
);

const mintPrice = await myNFTContract.MINT_PRICE(); // get price to mint

console.log("myNFT mint price", ethers.utils.formatEther(mintPrice)); // convert to bignumber format

console.log("Minting NFT!");

const mintTx = await myNFTContract.mint({
  value: mintPrice, // in bignumber format
});

console.log("Tx sent", mintTx.hash);

await mintTx.wait();

console.log("Tx mined!");
