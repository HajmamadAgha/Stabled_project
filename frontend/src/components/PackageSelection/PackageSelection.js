// src/components/PackageSelection/PackageSelection.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../PackageCard/PackageCard';
import SelectedPackageContext from '../../contexts/SelectedPackageContext';
import './PackageSelection.css';

const PackageSelection = () => {
  const { setSelectedPackage } = useContext(SelectedPackageContext);
  const navigate = useNavigate();

  const handlePackageSelection = (packageName, packagePrice) => {
    setSelectedPackage({ packageName, packagePrice });
    navigate('/payment');
  };

  return (
    <div className="package-selection">
      <PackageCard
        packageName="Movie Pack"
        packagePrice={19.99}
        packageIcon="movie_pack_icon.png"
        onSelect={() => handlePackageSelection('Movie Pack', 19.99)}
      />
      {/* Other package cards go here */}
    </div>
  );
};

export default PackageSelection;