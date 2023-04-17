// src/components/UserDashboard/UserDashboard.js
import React, { useState, useEffect } from 'react';
import './UserDashboard.css';

const UserDashboard = ({ currentUser }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      // Replace this with a real API call to fetch orders for the current user
      const response = await fetch(`/api/orders?userId=${currentUser.uid}`);
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, [currentUser]);

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
