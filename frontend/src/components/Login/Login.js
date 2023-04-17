import React, { useState, useContext } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';
import SelectedPackageContext from '../../contexts/SelectedPackageContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { selectedPackage } = useContext(SelectedPackageContext);

  const handleLoginRedirection = () => {
    if (selectedPackage) {
      navigate('/payment');
    } else {
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, such as calling an API endpoint
    console.log('Email:', email, 'Password:', password);

    // After successful login
    handleLoginRedirection();
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    // Handle Google login success here

    // After successful login
    handleLoginRedirection();
  };

  const handleGoogleFailure = (response) => {
    console.log('Google login failure:', response);
    // Handle Google login failure here
  };

  const handleFacebookResponse = (response) => {
    console.log('Facebook login response:', response);
    // Handle Facebook login response here

    // After successful login
    handleLoginRedirection();
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="social-logins">
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId="YOUR_FACEBOOK_APP_ID"
          autoLoad={false}
          fields="name,email,picture"
          callback={handleFacebookResponse}
          icon="fa-facebook"
          textButton="Login with Facebook"
        />
      </div>
    </div>
  );
};

export default Login;
