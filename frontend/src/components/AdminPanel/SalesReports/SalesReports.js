// src/components/AdminPanel/SalesReports/SalesReports.js

import React, { useState, useEffect } from 'react';
import './SalesReports.css';

const SalesReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch sales reports data here, such as calling an API endpoint
    const fetchData = async () => {
      // Replace this with actual data fetching logic
      const data = [
        { id: 1, package: 'Movie Pack', date: '2023-04-01', revenue: 19.99 },
        { id: 2, package: 'Art Pack', date: '2023-04-02', revenue: 19.99 },
      ];
      setReports(data);
    };

    fetchData();
  }, []);

  return (
    <div className="sales-reports">
      <h2>Sales Reports</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Package</th>
            <th>Date</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.package}</td>
              <td>{report.date}</td>
              <td>${report.revenue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReports;
