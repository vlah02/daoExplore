import Web3 from 'web3';
import { bytesToString, stringToBytes } from '@defisaver/tokens';
import BigNumber from 'bignumber.js';


const contractAddress = '0x68C61AF097b834c68eA6EA5e46aF6c04E8945B2d'; 
const contractABI = [
  {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "_getProxyOwner",
    "outputs": [{"internalType": "address", "name": "userAddr", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "_cdpId", "type": "uint256"}],
    "name": "getCdpInfo",
    "outputs": [
      {"internalType": "address", "name": "urn", "type": "address"},
      {"internalType": "address", "name": "owner", "type": "address"},
      {"internalType": "address", "name": "userAddr", "type": "address"},
      {"internalType": "bytes32", "name": "ilk", "type": "bytes32"},
      {"internalType": "uint256", "name": "collateral", "type": "uint256"},
      {"internalType": "uint256", "name": "debt", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const getContractInstance = (web3) => {
  return new web3.eth.Contract(contractABI, contractAddress);
};
  
export const getRateForCollateralType = async (web3, collateralTypeBytes32) => {
    const contractAddress = '0x35d1b3f3d7966a1dfe207aa4514c12a259a0492b'; 
    const contractABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg3","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"constant":true,"inputs":[],"name":"Line","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"can","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dai","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"debt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"flux","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"i","type":"bytes32"},{"internalType":"address","name":"u","type":"address"},{"internalType":"int256","name":"rate","type":"int256"}],"name":"fold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"int256","name":"dink","type":"int256"},{"internalType":"int256","name":"dart","type":"int256"}],"name":"fork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"i","type":"bytes32"},{"internalType":"address","name":"u","type":"address"},{"internalType":"address","name":"v","type":"address"},{"internalType":"address","name":"w","type":"address"},{"internalType":"int256","name":"dink","type":"int256"},{"internalType":"int256","name":"dart","type":"int256"}],"name":"frob","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"gem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"i","type":"bytes32"},{"internalType":"address","name":"u","type":"address"},{"internalType":"address","name":"v","type":"address"},{"internalType":"address","name":"w","type":"address"},{"internalType":"int256","name":"dink","type":"int256"},{"internalType":"int256","name":"dart","type":"int256"}],"name":"grab","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"heal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"hope","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"ilks","outputs":[{"internalType":"uint256","name":"Art","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"spot","type":"uint256"},{"internalType":"uint256","name":"line","type":"uint256"},{"internalType":"uint256","name":"dust","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"live","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"nope","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"sin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"usr","type":"address"},{"internalType":"int256","name":"wad","type":"int256"}],"name":"slip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"u","type":"address"},{"internalType":"address","name":"v","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"suck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"urns","outputs":[{"internalType":"uint256","name":"ink","type":"uint256"},{"internalType":"uint256","name":"art","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    try {
      console.log("Getting rate for collateral type:", collateralTypeBytes32);
      const rate = await contract.methods.ilks(collateralTypeBytes32).call();
      console.log("Rate for collateral type:", rate);
      return rate;
    } catch (error) {
      console.error("Error fetching rate:", error);
      throw error;
    }
};
  
export const getCDPDetails = async (web3, cdpId) => {
  const contract = getContractInstance(web3);
  const cdpDetails = await contract.methods.getCdpInfo(cdpId).call();
  return cdpDetails;
};

const cleanString = (bytes32String, web3Instance) => {
  if (bytes32String && bytes32String.startsWith('0x') && bytes32String.length === 66) {
    try {
      let cleanedString = web3Instance.utils.hexToAscii(bytes32String).replace(/\0/g, '').trim();
      return cleanedString;
    } catch (error) {
      console.error("Error converting bytes32 to string:", error);
      return '';
    }
  } else {
    return bytes32String;
  }
};


export const getMultipleCDPDetails = async (web3, startId, limit, collateralTypeBytes32, rate) => {
  const contract = getContractInstance(web3);
  let cdpDetails = [];

  let cdpIds = Array.from({ length: limit }, (_, index) => startId + index - Math.floor(limit / 2));

  const processCDP = async (cdpId) => {
    try {
      console.log(`Processing CDP ${cdpId}...`);
      const details = await contract.methods.getCdpInfo(cdpId).call();
      details.ilk = cleanString(details.ilk, web3);
      if (details.ilk !== 'CRVV1ETHSTETH-A') {
        const collateralBN = new BigNumber(details.collateral.toString());
        const scaledCollateral = collateralBN.dividedBy(new BigNumber(10).pow(18)); 
        const debtBN = new BigNumber(details.debt.toString());
        const rateBN = new BigNumber(rate.rate.toString()); 
        const pow27BN = new BigNumber(10).pow(27);
        const calculatedDebt = debtBN.multipliedBy(rateBN).dividedBy(pow27BN).dividedBy(new BigNumber(10).pow(18));;
        const collateralCurrency = cleanString(collateralTypeBytes32, web3); 

        cdpDetails.push({
          id: cdpId,
          urn: details.urn,
          owner: details.owner,
          userAddr: details.userAddr,
          ilk: details.ilk,
          collateral: (scaledCollateral.isNaN() ? '0' : scaledCollateral.decimalPlaces(2)) + ` ${collateralCurrency}`,
          debt: calculatedDebt.isNaN() ? '0' : calculatedDebt.decimalPlaces(2, BigNumber.ROUND_DOWN).toString() + ' DAI',
        });
      }
      console.log(`CDP ${cdpId} processed:`, details);
    } catch (error) {
      console.error(`Error fetching CDP ${cdpId}: `, error);
    }
  };

  // const concurrentLimit = 5;
  // const batches = [];
  // for (let i = 0; i < cdpIds.length; i += concurrentLimit) {
  //   const batch = cdpIds.slice(i, i + concurrentLimit).map(processCDP);
  //   batches.push(Promise.all(batch));
  // }

  // await Promise.all(batches.flat());

  // console.log("bytes32:", collateralTypeBytes32)
  // const collateralTypeString = cleanString(collateralTypeBytes32, web3);
  // console.log("string:", collateralTypeString)

  // const filteredDetails = cdpDetails.filter(cdp => cleanString(cdp.ilk, web3) === collateralTypeString);
  // console.log("Filtered CDP Details:", filteredDetails);

  // return filteredDetails;
  const processBatch = async (batch) => {
    await Promise.all(batch.map(cdpId => processCDP(cdpId)));
  };
  
  for (let i = 0; i < cdpIds.length; i += 5) {
    const batch = cdpIds.slice(i, i + 5);
    await processBatch(batch);
  }

  cdpDetails.sort((a, b) => a.id - b.id);

  const filteredDetails = cdpDetails.filter(cdp => cleanString(cdp.ilk, web3) === cleanString(collateralTypeBytes32, web3));
  return filteredDetails;
};

