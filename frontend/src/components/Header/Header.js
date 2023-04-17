// src/components/Header/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>PhotoAI</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="/register" className="nav-link">Register</a>
          </li>
          <li className="nav-item">
            <a href="/user-dashboard" className="nav-link">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="/admin-panel" className="nav-link">Admin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
