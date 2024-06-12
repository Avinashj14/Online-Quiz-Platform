import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-link${isActive ? ' nav-link-active' : ''} text-lg font-bold transition-colors duration-300 hover:text-blue-500 hover:underline`}
    >
      {children}
    </Link>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4 flex justify-center">
          <NavLink to="/admin">Admin</NavLink>
          <div className="w-6" /> {/* Add space between nav links */}
          <NavLink to="/user">User</NavLink>
        </nav>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
