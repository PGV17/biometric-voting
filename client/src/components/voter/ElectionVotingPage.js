import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getElectionById, castVote } from '../../utils/api';
import styles from './VotingPage.module.css';
import { FaVoteYea, FaExclamationCircle, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

const ElectionVotingPage = () => {
  const { electionId } = useParams();
  const navigate = useNavigate();
  const [election, setElection] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [voting, setVoting] = useState(false);

  useEffect(() => {
    fetchElection();
  }, [electionId]);

  const fetchElection = async () => {
    setLoading(true);
    try {
      const response = await getElectionById(electionId);
      setElection(response.data);

      // If voter has already voted, redirect back to elections list
      if (response.data.hasVoted) {
        navigate('/vote');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        navigate('/login');
      } else if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to fetch election details');
      }
      console.error('Error fetching election:', err);
    }
    setLoading(false);
  };

  const handleVote = async () => {
    if (!selectedCandidate) {
      setError('Please select a candidate to vote for');
      return;
    }

    setVoting(true);
    setError('');
    setSuccess('');

    try {
      await castVote({
        electionId,
        candidateId: selectedCandidate._id
      });
      setSuccess('Vote cast successfully!');
      setTimeout(() => {
        navigate('/vote');
      }, 2000);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to cast vote');
      }
      console.error('Error casting vote:', err);
    }
    setVoting(false);
  };

  if (loading) {
    return (
      <div className={styles.votingContainer}>
        <div className={`${styles.skeletonHeader} ${styles.loadingSkeleton}`} />
        <div className={styles.electionCard}>
          <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
          <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
          <div className={styles.electionDetails}>
            <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
            <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
          </div>
        </div>
      </div>
    );
  }

  if (!election) {
    return (
      <div className={styles.votingContainer}>
        <div className={styles.alert}>
          <FaExclamationCircle className={styles.alertIcon} />
          Election not found
        </div>
      </div>
    );
  }

  return (
    <div className={styles.votingContainer}>
      <button
        className={styles.backButton}
        onClick={() => navigate('/vote')}
      >
        <FaArrowLeft />
        Back to Elections
      </button>

      <h2 className={styles.votingHeader}>{election.title}</h2>

      {error && (
        <div className={styles.alert}>
          <FaExclamationCircle className={styles.alertIcon} />
          {error}
        </div>
      )}

      {success && (
        <div className={`${styles.alert} ${styles.successAlert}`}>
          <FaCheckCircle className={styles.alertIcon} />
          {success}
        </div>
      )}

      <div className={styles.electionCard}>
        <div className={styles.electionMain}>
          <p className={styles.electionDescription}>{election.description}</p>
          <div className={styles.electionDetails}>
            <p>
              <strong>Start Date:</strong>
              <span>{new Date(election.startDate).toLocaleString()}</span>
            </p>
            <p>
              <strong>End Date:</strong>
              <span>{new Date(election.endDate).toLocaleString()}</span>
            </p>
          </div>

          <div className={styles.candidatesList}>
            <h3>Select a Candidate</h3>
            {election.candidates && election.candidates.length > 0 ? (
              <div className={styles.candidatesGrid}>
                {election.candidates.map((candidate) => (
                  <div
                    key={candidate._id}
                    className={`${styles.candidateCard} ${
                      selectedCandidate?._id === candidate._id
                        ? styles.selectedCandidate
                        : ''
                    }`}
                    onClick={() => setSelectedCandidate(candidate)}
                  >
                    <div className={styles.candidateInfo}>
                      <h4>{candidate.name}</h4>
                      <p>{candidate.party}</p>
                      <p className={styles.candidateDescription}>
                        {candidate.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyStateContainer}>
                <FaVoteYea className={styles.emptyStateIcon} />
                <p className={styles.emptyStateText}>No Candidates Available</p>
                <p className={styles.emptyStateSubtext}>
                  This election has no candidates yet
                </p>
              </div>
            )}
          </div>

          <div className={styles.electionActions}>
            <button
              className={`${styles.voteButton} ${
                !selectedCandidate || voting ? styles.disabled : ''
              }`}
              onClick={handleVote}
              disabled={!selectedCandidate || voting}
            >
              {voting ? 'Casting Vote...' : 'Cast Vote'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionVotingPage;