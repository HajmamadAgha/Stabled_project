import React from 'react';
import { Outlet } from 'react-router-dom';

import AdminRoutes from './AdminRoutes';

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Outlet>
        <AdminRoutes />
      </Outlet>
    </div>
  );
};

export default AdminPanel;
