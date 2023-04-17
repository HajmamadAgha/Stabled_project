import React from 'react';
import './PackageCard.css';

const PackageCard = ({ packageName, packagePrice, packageIcon, onSelect }) => {
  return (
    <div className="package-card" onClick={onSelect}>
      <img src={packageIcon} alt={`${packageName} icon`} className="package-icon" />
      <h3 className="package-name">{packageName}</h3>
      <p className="package-price">${packagePrice}</p>
    </div>
  );
};

export default PackageCard;