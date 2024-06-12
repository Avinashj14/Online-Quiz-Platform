// src/pages/UserPage.tsx
import React from 'react';
import Quiz from '../components/User/Quiz';

const UserPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Quiz />
    </div>
  );
};

export default UserPage;
