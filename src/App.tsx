import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4 flex justify-center">
          <Link to="/admin" className="mr-4 text-xl font-bold text-blue-600 hover:text-blue-800 active:text-red-600">Admin</Link>
          <Link to="/user" className="text-xl font-bold text-blue-600 hover:text-blue-800 active:text-red-600">User</Link>
        </nav>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/" element={<AdminPage />} /> // This will load AdminPage by default
        </Routes>
      </div>
    </Router>
  );
};

export default App;
