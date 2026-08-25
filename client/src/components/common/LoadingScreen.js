import React from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingSpinner} />
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default LoadingScreen;