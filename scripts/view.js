const Web3 = require("web3");

// ADDRESS, KEY and URL are examples.
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PUBLIC_KEY = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const PROVIDER_URL = "http://localhost:8545";

async function viewNFT() {
  const web3 = new Web3(PROVIDER_URL);
  const contract = require("../artifacts/contracts/MYNFT.sol/MYNFT.json");
  const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);
  nftContract.methods.balanceOf(PUBLIC_KEY).call().then(console.log);
}

viewNFT();
