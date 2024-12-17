import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [reports, setReports] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/reports', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports');
      }
    };
    fetchReports();
  }, []);

  const handleGenerateReport = () => {
    history.push('/create-report');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleGenerateReport}>Create New Report</button>
      <h3>Previous Reports</h3>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            {report.date} - <a href={`/report/${report._id}`}>View Report</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
