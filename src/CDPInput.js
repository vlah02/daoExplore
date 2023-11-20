import React, { useState, useEffect } from 'react';

const CDPInput = ({ onCollateralTypeChange, onRoughCdpIdChange }) => {
  const [collateralType, setCollateralType] = useState('ETH-A');
  const [roughCdpId, setRoughCdpId] = useState('');
  const [debouncedRoughCdpId, setDebouncedRoughCdpId] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedRoughCdpId(roughCdpId);
      console.log("debounced:", roughCdpId)
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [roughCdpId]);

  useEffect(() => {
    onRoughCdpIdChange(debouncedRoughCdpId);
  }, [debouncedRoughCdpId, onRoughCdpIdChange]);

  return (
    <div>
      {}
      <select
        value={collateralType}
        onChange={(e) => {
          setCollateralType(e.target.value);
          onCollateralTypeChange(e.target.value);
        }}
      >
        <option value="ETH-A">ETH-A</option>
        <option value="WBTC-A">WBTC-A</option>
        <option value="USDC-A">USDC-A</option>
      </select>

      {}
      <input
        type="text"
        value={roughCdpId}
        onChange={(e) => setRoughCdpId(e.target.value)}
        placeholder="Enter rough CDP ID"
      />
    </div>
  );
};

export default CDPInput;
