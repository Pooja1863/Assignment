import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Report from './components/Report';
import History from './components/History';
import EditData from './components/EditData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/history" element={<History />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
    </Router>
  );
}

export default App;
