import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingScreen from '../components/common/LoadingScreen';

export const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (user) {
    // Redirect to appropriate page based on role
    return <Navigate to={user.role === 'admin' ? '/admin/dashboard' : '/vote'} replace />;
  }

  return children;
};