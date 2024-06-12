// src/pages/AdminPage.tsx
import React from 'react';
import QuizForm from '../components/Admin/QuizForm';

const AdminPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <QuizForm />
    </div>
  );
};

export default AdminPage;
