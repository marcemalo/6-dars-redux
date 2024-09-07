import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/Registratsiya';
import UserListPage from './components/Royxat';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/users" element={<UserListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
