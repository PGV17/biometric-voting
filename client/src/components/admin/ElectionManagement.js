import React, { useState, useEffect } from "react";
import {
  createElection,
  getAllElections,
  updateElectionStatus,
  getElectionResults,
  addCandidate,
  updateCandidate,
  handleApiError,
} from "../../utils/api";
import styles from "./AdminDashboard.module.css";
import {
  FaVoteYea,
  FaUserPlus,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";
import Modal from "../common/Modal";

const ElectionManagement = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedElection, setSelectedElection] = useState(null);
  const [showNewElectionForm, setShowNewElectionForm] = useState(false);
  const [showNewCandidateForm, setShowNewCandidateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    isPublic: true,
    allowedVoterGroups: [],
  });
  const [candidateData, setCandidateData] = useState({
    name: "",
    description: "",
    party: "",
  });

  useEffect(() => {
    fetchElections();
  }, []);

  const fetchElections = async () => {
    setLoading(true);
    try {
      const response = await getAllElections();
      setElections(response.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to fetch elections");
      }
      console.error("Error fetching elections:", err);
    }
    setLoading(false);
  };

  const handleElectionSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createElection(formData);
      setShowNewElectionForm(false);
      setFormData({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        isPublic: true,
        allowedVoterGroups: [],
      });
      await fetchElections();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to create election");
      }
      console.error("Error creating election:", err);
    }
    setLoading(false);
  };

  const handleCandidateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addCandidate(selectedElection._id, candidateData);
      setShowNewCandidateForm(false);
      setCandidateData({
        name: "",
        description: "",
        party: "",
      });
      await fetchElections();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to add candidate");
      }
      console.error("Error adding candidate:", err);
    }
    setLoading(false);
  };

  const handleStatusChange = async (electionId, newStatus) => {
    setLoading(true);
    try {
      await updateElectionStatus(electionId, newStatus);
      await fetchElections();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to update election status");
      }
      console.error("Error updating election status:", err);
    }
    setLoading(false);
  };

  const LoadingSkeleton = () => (
    <div className={styles.section}>
      <div className={`${styles.skeletonHeader} ${styles.loadingSkeleton}`} />

      <div className={styles.actionsContainer}>
        <div className={`${styles.skeletonButton} ${styles.loadingSkeleton}`} />
      </div>

      <div className={styles.electionsList}>
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={`${styles.electionCard} ${styles.loadingSkeleton}`}
          >
            <div
              className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
            />
            <div
              className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
            />
            <div className={styles.electionDetails}>
              <div
                className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
              />
              <div
                className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
              />
              <div
                className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
              />
            </div>
            <div className={styles.electionActions}>
              <div
                className={`${styles.skeletonButton} ${styles.loadingSkeleton}`}
              />
              <div
                className={`${styles.skeletonButton} ${styles.loadingSkeleton}`}
              />
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
    <div className={styles.section}>
      <h3>Election Management</h3>
      {error && (
        <p className={`${styles.message} ${styles.errorMessage}`}>{error}</p>
      )}

      <button
        className={styles.actionButton}
        onClick={() => setShowNewElectionForm(true)}
      >
        Create New Election
      </button>

      {showNewElectionForm && (
        <Modal
          isOpen={showNewElectionForm}
          onClose={() => setShowNewElectionForm(false)}
          title="Create New Election"
        >
          {error && (
            <div className={styles.alert}>
              <FaExclamationCircle className={styles.alertIcon} />
              {error}
            </div>
          )}
          <form onSubmit={handleElectionSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
                placeholder="e.g. 2024 Presidential Election"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                placeholder="Provide a brief overview of the election, its purpose, and any important details voters should know"
                className={styles.formInput}
                rows="4"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="startDate">
                Start Date
              </label>
              <input
                id="startDate"
                type="datetime-local"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="endDate">
                End Date
              </label>
              <input
                id="endDate"
                type="datetime-local"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={formData.isPublic}
                  onChange={(e) =>
                    setFormData({ ...formData, isPublic: e.target.checked })
                  }
                  className={styles.checkbox}
                />
                Public Election
              </label>
            </div>
            <div className={styles.formActions}>
              <button
                type="submit"
                className={`${styles.button} ${loading ? styles.loading : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.loadingSpinner}></span>
                ) : (
                  "Create Election"
                )}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {elections.length === 0 && (
        <div className={styles.emptyStateContainer}>
          <FaVoteYea className={styles.emptyStateIcon} />
          <p className={styles.emptyStateText}>No Elections Found</p>
          <p className={styles.emptyStateSubtext}>
            Create your first election to get started
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
                  <strong>Status:</strong>
                  <span>{election.status}</span>
                </p>
                <p>
                  <strong>Start:</strong>
                  <span>{new Date(election.startDate).toLocaleString()}</span>
                </p>
                <p>
                  <strong>End:</strong>
                  <span>{new Date(election.endDate).toLocaleString()}</span>
                </p>
                <p>
                  <strong>Total Votes:</strong>
                  <span>{election.totalVotes}</span>
                </p>
              </div>

              <div className={styles.electionActions}>
                <select
                  value={election.status}
                  onChange={(e) =>
                    handleStatusChange(election._id, e.target.value)
                  }
                  className={styles.statusSelect}
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <button
                  className={styles.actionButton}
                  onClick={() => {
                    setSelectedElection(election);
                    setShowNewCandidateForm(true);
                  }}
                >
                  Add Candidate
                </button>
              </div>
            </div>

            <div className={styles.electionSidebar}>
              <div className={styles.candidatesList}>
                <h4>
                  <FaUserPlus />
                  Candidates
                </h4>
                {election.candidates && election.candidates.length > 0 ? (
                  election.candidates.map((candidate) => (
                    <div key={candidate._id} className={styles.candidateCard}>
                      <div className={styles.candidateInfo}>
                        <h5>{candidate.name}</h5>
                        <p>{candidate.party}</p>
                      </div>
                      <div className={styles.candidateVotes}>
                        {candidate.voteCount}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles.emptyStateContainer}>
                    <FaUserPlus className={styles.emptyStateIcon} />
                    <p className={styles.emptyStateText}>No Candidates Added</p>
                    <p className={styles.emptyStateSubtext}>
                      Add candidates to this election
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showNewCandidateForm && selectedElection && (
        <Modal
          isOpen={showNewCandidateForm}
          onClose={() => {
            setShowNewCandidateForm(false);
            setSelectedElection(null);
          }}
          title={`Add Candidate to ${selectedElection.title}`}
        >
          {error && (
            <div className={styles.alert}>
              <FaExclamationCircle className={styles.alertIcon} />
              {error}
            </div>
          )}
          <form onSubmit={handleCandidateSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="candidateName">
                Name
              </label>
              <input
                id="candidateName"
                type="text"
                value={candidateData.name}
                onChange={(e) =>
                  setCandidateData({ ...candidateData, name: e.target.value })
                }
                required
                placeholder="Enter candidate's full name"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label
                className={styles.formLabel}
                htmlFor="candidateDescription"
              >
                Description
              </label>
              <textarea
                id="candidateDescription"
                value={candidateData.description}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    description: e.target.value,
                  })
                }
                required
                placeholder="Provide a brief description of the candidate's background and qualifications"
                className={styles.formInput}
                rows="4"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="candidateParty">
                Party
              </label>
              <input
                id="candidateParty"
                type="text"
                value={candidateData.party}
                onChange={(e) =>
                  setCandidateData({ ...candidateData, party: e.target.value })
                }
                placeholder="Enter candidate's political party or affiliation"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formActions}>
              <button
                type="submit"
                className={`${styles.button} ${loading ? styles.loading : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.loadingSpinner}></span>
                ) : (
                  "Add Candidate"
                )}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ElectionManagement;
