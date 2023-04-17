// src/components/UserDashboard/UserDashboard.js

import React, { useState, useEffect } from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders for the user from the API and set the state
    const fetchOrders = async () => {
      // Replace this with a real API call
      const mockOrders = [
        { id: 1, package: 'Movie Pack', status: 'Completed', downloadUrl: '/downloads/movie-pack.zip' },
        { id: 2, package: 'Art Pack', status: 'Pending', downloadUrl: '' },
      ];
      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Package</th>
            <th>Status</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.package}</td>
              <td>{order.status}</td>
              <td>
                {order.status === 'Completed' ? (
                  <a href={order.downloadUrl} download>
                    Download
                  </a>
                ) : (
                  'Not available'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
