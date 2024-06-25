import { ethers } from "ethers";
import { getProvider } from "./utils.js";
// import { myNFTAbi } from "./myNFTAbi.js";

const myNFTAddress = //;
const sepoliaProvider = getProvider();

const myNFTContract = new ethers.Contract(
  myNFTAddress,
  myNFTAbi,
  sepoliaProvider
);

const mintPrice = await myNFTContract.MINT_PRICE();

console.log("myNFT mint price", ethers.utils.formatEther(mintPrice));
