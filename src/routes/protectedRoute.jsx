import React from 'react';
import { Navigate, Outlet } from 'react-router';

const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export default function ProtectedRoute() {
  const user = getUser();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <Outlet />;
}
