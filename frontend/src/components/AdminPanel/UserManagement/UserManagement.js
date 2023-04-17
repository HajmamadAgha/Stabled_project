// src/components/AdminPanel/UserManagement/UserManagement.js

import React, { useState, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data here, such as calling an API endpoint
    const fetchData = async () => {
      // Replace this with actual data fetching logic
      const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', registrationDate: '2023-04-01' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', registrationDate: '2023-04-02' },
      ];
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
