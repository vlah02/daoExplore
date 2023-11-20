import React, { useState, useEffect } from 'react';
import './App.css';
import getWeb3 from './getWeb3';
import { getMultipleCDPDetails, getRateForCollateralType } from './makerDaoService';
import CDPList from './CDPList';

function App() {
  const [collateralType, setCollateralType] = useState('ETH-A');
  const [roughCdpId, setRoughCdpId] = useState('');
  const [debouncedRoughCdpId, setDebouncedRoughCdpId] = useState('');
  const [web3, setWeb3] = useState(null);
  const [cdpDetails, setCdpDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function initWeb3() {
      try {
        const web3Instance = await getWeb3();
        setWeb3(web3Instance);
      } catch (error) {
        alert('Error loading Web3. Have you installed Metamask?');
      }
    }
    initWeb3();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedRoughCdpId(roughCdpId);
    }, 500); 

    return () => clearTimeout(timerId);
  }, [roughCdpId]);

  useEffect(() => {
    async function loadMultipleCDPDetails() {
      if (!web3 || !debouncedRoughCdpId) return;
      setIsLoading(true);
      try {
        let collateralTypeBytes32 = web3.utils.asciiToHex(collateralType);
        while (collateralTypeBytes32.length < 66) {
          collateralTypeBytes32 += "0";
        }
        const rate = await getRateForCollateralType(web3, collateralTypeBytes32);
        const details = await getMultipleCDPDetails(web3, parseInt(debouncedRoughCdpId), 20, collateralTypeBytes32, rate);
        setCdpDetails(details);
      } catch (error) {
        console.error("Error fetching CDPs:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMultipleCDPDetails();
  }, [web3, debouncedRoughCdpId, collateralType]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="SearchFilterContainer">
          <input
            className="BigInput"
            type="text"
            value={roughCdpId}
            onChange={(e) => setRoughCdpId(e.target.value)}
            placeholder="Enter rough CDP ID"
          />
          <select
            className="FilterSelect"
            value={collateralType}
            onChange={(e) => setCollateralType(e.target.value)}
          >
            <option value="ETH-A">ETH-A</option>
            <option value="WBTC-A">WBTC-A</option>
            <option value="USDC-A">USDC-A</option>
            {}
          </select>
        </div>
        {isLoading ? <p>Loading...</p> : <CDPList cdps={cdpDetails} />}
      </header>
    </div>
  );
}

export default App;
