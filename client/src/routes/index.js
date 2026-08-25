import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';

// Pages
import LandingPage from '../components/LandingPage';
import VoterRegistration from '../components/auth/VoterRegistration';
import VoterLogin from '../components/auth/VoterLogin';
import VotingPage from '../components/voter/VotingPage';
import ElectionVotingPage from '../components/voter/ElectionVotingPage';
import AdminLogin from '../components/auth/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';

// Container wrapper for consistent styling
const Container = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

// 404 page component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <h2 className="text-xxl mb-md">404</h2>
    <p className="text-lg text-secondary mb-lg">Page not found</p>
    <NavLink to="/" className="navLink">
      Return Home
    </NavLink>
  </div>
);

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes */}
      <Route path="/register" element={
        <Container>
          <PublicRoute>
            <VoterRegistration />
          </PublicRoute>
        </Container>
      } />
      <Route path="/login" element={
        <Container>
          <PublicRoute>
            <VoterLogin />
          </PublicRoute>
        </Container>
      } />
      <Route path="/admin/login" element={
        <Container>
          <PublicRoute>
            <AdminLogin />
          </PublicRoute>
        </Container>
      } />

      {/* Protected Routes */}
      <Route path="/vote" element={
        <Container>
          <ProtectedRoute requiredRole="voter">
            <VotingPage />
          </ProtectedRoute>
        </Container>
      } />
      <Route path="/vote/:electionId" element={
        <Container>
          <ProtectedRoute requiredRole="voter">
            <ElectionVotingPage />
          </ProtectedRoute>
        </Container>
      } />
      <Route path="/admin/dashboard" element={
        <Container>
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        </Container>
      } />

      {/* 404 Route */}
      <Route path="*" element={
        <Container>
          <NotFound />
        </Container>
      } />
    </Routes>
  );
};