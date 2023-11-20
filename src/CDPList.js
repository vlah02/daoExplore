import React from 'react';
import './App.css'; 

const CDPList = ({ cdps }) => {
  if (!cdps || cdps.length === 0) {
    return <p>No CDPs to display</p>;
  }

  return (
    <div className="CDPList">
      <h2>CDP List</h2>
      {cdps.map((cdp, index) => (
        <div key={index} className="CDPBox">
          <p><strong>ID:</strong> {cdp.id}</p>
          <p><strong>Collateral:</strong> {cdp.collateral}</p>
          <p><strong>Debt:</strong> {cdp.debt}</p>
        </div>
      ))}
    </div>
  );
};

export default CDPList;
