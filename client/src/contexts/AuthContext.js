import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin, loginVoter, validateVoterCredentials } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    voterToken: localStorage.getItem('voterToken'),
    adminToken: localStorage.getItem('adminToken'),
    user: null,
    loading: true,
    error: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize auth state
    const initializeAuth = async () => {
      try {
        const voterToken = localStorage.getItem('voterToken');
        const adminToken = localStorage.getItem('adminToken');

        if (voterToken) {
          // Validate voter token and get user info
          setAuthState(prev => ({ ...prev, user: { role: 'voter' }, loading: false }));
        } else if (adminToken) {
          // Validate admin token and get user info
          setAuthState(prev => ({ ...prev, user: { role: 'admin' }, loading: false }));
        } else {
          setAuthState(prev => ({ ...prev, loading: false }));
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setAuthState(prev => ({ ...prev, error: 'Failed to initialize authentication', loading: false }));
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials, role) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));

      let response;
      if (role === 'admin') {
        response = await loginAdmin(credentials);
        localStorage.setItem('adminToken', response.data.token);
        setAuthState(prev => ({
          ...prev,
          adminToken: response.data.token,
          user: { role: 'admin' },
          loading: false
        }));
      } else {
        response = await loginVoter(credentials);
        localStorage.setItem('voterToken', response.data.token);
        setAuthState(prev => ({
          ...prev,
          voterToken: response.data.token,
          user: { role: 'voter' },
          loading: false
        }));
      }

      return response;
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: error.response?.data?.message || 'Login failed',
        loading: false
      }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('voterToken');
    localStorage.removeItem('adminToken');
    setAuthState({
      voterToken: null,
      adminToken: null,
      user: null,
      loading: false,
      error: null
    });
    navigate('/');
  };

  const validateCredentials = async (credentials) => {
    try {
      const response = await validateVoterCredentials(credentials);
      return response;
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: error.response?.data?.message || 'Validation failed'
      }));
      throw error;
    }
  };

  const value = {
    ...authState,
    login,
    logout,
    validateCredentials
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};