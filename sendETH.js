import "dotenv/config";
import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner, generateWallet } from "./utils.js";

const sepoliaProvider = getProvider();
const sepoliaSigner = getSigner();

const myBalance = await sepoliaSigner.getBalance();

console.log(
  "My wallet's Sepolia ETH balance ",
  ethers.utils.formatEther(myBalance)
);

const secondAddress = process.env.SECOND_WALLET_PUBLIC_KEY;

console.log("Sending ETH to", secondAddress);

const tx = await sepoliaSigner.sendTransaction({
  to: secondAddress,
  value: myBalance.div(BigNumber.from(10)),
});

console.log("TX SENT!", tx.hash);

await tx.wait();

console.log("TX CONFIRMED!");
