import "dotenv/config";
import { ethers } from "ethers";

const getProvider = (mainnet = false) => {
  const providerUrl = mainnet
    ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
    : `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;

  return new ethers.providers.JsonRpcProvider(providerUrl);
};

const generateWallet = () => {
  const wallet = ethers.Wallet.createRandom();

  // this can be stored in a text file
  console.log("address:", wallet.address);
  console.log("private key:", wallet.privateKey);
  console.log("mnenomic:", wallet.mnemonic.phrase);
};

const getSigner = (mainnet = false) => {
  const provider = getProvider(mainnet);

  return new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);
};

// const signer = getSigner();
// console.log("signer", await signer.getAddress());

// generateWallet();

// const provider = getProvider();
// console.log("Provider", await provider.getNetwork());

// ES6 module syntax
export { getProvider, getSigner, generateWallet };
