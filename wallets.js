import "dotenv/config";
import { ethers } from "ethers";

// const wallet = ethers.Wallet.createRandom();
// console.log("address:", wallet.address);
// console.log("private key:", wallet.privateKey);
// console.log("mnenomic:", wallet.mnemonic.phrase);

const sepoliaInfuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const sepoliaProvider = new ethers.providers.JsonRpcProvider(sepoliaInfuraUrl);

const signer = new ethers.Wallet(
  process.env.MY_WALLET_PRIVATE_KEY,
  sepoliaProvider
);
const myBalance = await sepoliaProvider.getBalance(signer.address);

console.log("Sepolia balance", ethers.utils.formatEther(myBalance));

// signer.sendTransaction({
//   to: "${process.env.MY_WALLET_PUBLIC_KEY}",
//   value: myBalance,
// });

const signerAddress = ethers.utils.verifyMessage("Hola!", signature);
console.log("signerAddress ", signerAddress);
