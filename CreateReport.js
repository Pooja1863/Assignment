import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateReport = () => {
  const [testResults, setTestResults] = useState({ bloodPressure: '', cholesterol: '', bloodSugar: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setTestResults({ ...testResults, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://localhost:5000/api/reports', testResults, {
        headers: { Authorization: `Bearer ${token}` },
      });
      history.push(`/report/${response.data._id}`);
    } catch (error) {
      console.error('Error generating report');
    }
  };

  return (
    <div>
      <h2>Create Health Report</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bloodPressure"
          value={testResults.bloodPressure}
          onChange={handleChange}
          placeholder="Blood Pressure"
        />
        <input
          type="text"
          name="cholesterol"
          value={testResults.cholesterol}
          onChange={handleChange}
          placeholder="Cholesterol"
        />
        <input
          type="text"
          name="bloodSugar"
          value={testResults.bloodSugar}
          onChange={handleChange}
          placeholder="Blood Sugar"
        />
        <button type="submit">Generate Report</button>
      </form>
    </div>
  );
};

export default CreateReport;
