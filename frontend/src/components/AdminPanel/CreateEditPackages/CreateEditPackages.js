import React, { useState } from 'react';
import './CreateEditPackages.css';

const CreateEditPackages = ({ onSubmit }) => {
  const [packageName, setPackageName] = useState('');
  const [packagePrice, setPackagePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: packageName, price: packagePrice });
    setPackageName('');
    setPackagePrice('');
  };

  return (
    <div className="create-edit-packages">
      <h2>Create/Edit Package</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="package-name">Package Name</label>
          <input
            type="text"
            id="package-name"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="package-price">Package Price</label>
          <input
            type="number"
            id="package-price"
            value={packagePrice}
            onChange={(e) => setPackagePrice(e.target.value)}
            required
          />
        </div>
        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditPackages;
