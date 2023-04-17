// src/components/Home/Home.js

import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PackageCard from '../PackageCard/PackageCard';

const Home = () => {
  const packages = [
    {
      name: 'Movie Pack',
      price: 19.99,
      icon: 'https://ik.imagekit.io/yoavdhx0o2/movie_icon.jpg?updatedAt=1681494405167',
    },
    {
      name: 'Art Pack',
      price: 19.99,
      icon: 'https://ik.imagekit.io/yoavdhx0o2/art_icon.jpg?updatedAt=1681494405496',
    },
    {
      name: 'Video Games Pack',
      price: 19.99,
      icon: 'https://ik.imagekit.io/yoavdhx0o2/VideoGame_icon.jpg?updatedAt=1681494405393',
    },
  ];

  const handlePackageClick = (pkg) => {
    // Logic to handle package selection
    console.log('Selected package:', pkg.name);
  };

  return (
    <div className="home">
      <h1>Welcome to PhotoAI</h1>
      <div className="home-content">
        <p>
          PhotoAI is an AI-powered application that transforms your photos into amazing art styles.
          Browse through our packages, register, and upload your photos to get started.
        </p>
      </div>
      <div className="packages">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.name}
            packageName={pkg.name}
            packagePrice={pkg.price}
            packageIcon={pkg.icon}
            onClick={() => handlePackageClick(pkg)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
