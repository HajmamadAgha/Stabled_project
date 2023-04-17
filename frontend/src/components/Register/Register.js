import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedPackageContext from '../../contexts/SelectedPackageContext';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { selectedPackage } = useContext(SelectedPackageContext);

  const handleRegistrationRedirection = () => {
    if (selectedPackage) {
      navigate('/payment');
    } else {
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here, such as calling an API endpoint
    console.log('Name:', name, 'Email:', email, 'Password:', password);

    // After successful registration
    handleRegistrationRedirection();
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="register-inputs">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="register-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
