import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AdminPanel from './components/AdminPanel/AdminPanel';
import UserDashboard from './components/UserDashboard/UserDashboard';
import PackageSelection from './components/PackageSelection/PackageSelection';
import Payment from './components/Payment/Payment';
import { SelectedPackageProvider } from './contexts/SelectedPackageContext';
import Auth from './Auth';
import Account from './Account';
import { supabase } from './supabaseClient';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <SelectedPackageProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route
                path="/dashboard"
                element={<UserDashboard currentUser={session?.user} />}
              />
              <Route path="/package-selection" element={<PackageSelection />} />
              <Route path="/payment" element={<Auth><Payment /></Auth>} />
              {!session ? (
                <Route path="/auth" element={<Auth />} />
              ) : (
                <Route path="/account" element={<Account key={session.user.id} session={session} />} />
              )}
            </Routes>
          </main>
          <Footer />
        </SelectedPackageProvider>
      </Router>
    </div>
  );
}

export default App;
