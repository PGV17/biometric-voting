import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getElections } from '../../utils/api';
import styles from './VotingPage.module.css';
import { FaVoteYea, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

const VotingPage = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchElections();
  }, []);

  const fetchElections = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('voterToken');
      if (!token) {
        navigate('/voter/login');
        return;
      }

      const response = await getElections();
      setElections(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('voterToken');
        navigate('/voter/login');
      } else if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to fetch elections');
      }
      console.error('Error fetching elections:', err);
    }
    setLoading(false);
  };

  const LoadingSkeleton = () => (
    <div className={styles.section}>
      <div className={`${styles.skeletonHeader} ${styles.loadingSkeleton}`} />
      <div className={styles.electionsList}>
        {[1, 2, 3].map((index) => (
          <div key={index} className={`${styles.electionCard} ${styles.loadingSkeleton}`}>
            <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
            <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
            <div className={styles.electionDetails}>
              <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
              <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
              <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className={styles.votingContainer}>
      <h2 className={styles.votingHeader}>Active Elections</h2>

      {error && (
        <div className={styles.alert}>
          <FaExclamationCircle className={styles.alertIcon} />
          {error}
        </div>
      )}

      {elections.length === 0 && (
        <div className={styles.emptyStateContainer}>
          <FaVoteYea className={styles.emptyStateIcon} />
          <p className={styles.emptyStateText}>No Active Elections</p>
          <p className={styles.emptyStateSubtext}>
            There are currently no active elections available for voting
          </p>
        </div>
      )}

      <div className={styles.electionsList}>
        {elections.map((election) => (
          <div key={election._id} className={styles.electionCard}>
            <div className={styles.electionMain}>
              <h3>{election.title}</h3>
              <p>{election.description}</p>
              <div className={styles.electionDetails}>
                <p>
                  <strong>Start Date:</strong>
                  <span>{new Date(election.startDate).toLocaleString()}</span>
                </p>
                <p>
                  <strong>End Date:</strong>
                  <span>{new Date(election.endDate).toLocaleString()}</span>
                </p>
                <p>
                  <strong>Total Votes:</strong>
                  <span>{election.totalVotes}</span>
                </p>
              </div>
              <div className={styles.electionActions}>
                {election.hasVoted ? (
                  <div className={styles.votedStatus}>
                    <FaCheckCircle className={styles.votedIcon} />
                    <span>You have already voted in this election</span>
                  </div>
                ) : (
                  <button
                    className={styles.voteButton}
                    onClick={() => navigate(`/vote/${election._id}`)}
                  >
                    Vote Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingPage;