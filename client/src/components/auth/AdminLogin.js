import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Auth.module.css';
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, error: authError, loading } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const { username, password } = formData;

  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
    // Clear field-specific error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setError('Please fill in all required fields correctly.');
      return;
    }

    try {
      await login({ username, password }, 'admin');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Admin Login</h2>

        {(error || authError) && (
          <div className={styles.alert}>
            <FaExclamationCircle className={styles.alertIcon} />
            {error || authError}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              className={formErrors.username ? styles.inputError : ''}
            />
            {formErrors.username && (
              <span className={styles.errorText}>{formErrors.username}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="password">
              Password
            </label>
            <div className={styles.passwordInputContainer}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className={formErrors.password ? styles.inputError : ''}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {formErrors.password && (
              <span className={styles.errorText}>{formErrors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className={`${styles.button} ${loading ? styles.loading : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className={styles.loadingSpinner}></span>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;