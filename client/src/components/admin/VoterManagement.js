import React, { useState, useEffect } from "react";
import { getVoters } from "../../utils/api";
import styles from "./AdminDashboard.module.css";
import { FaChevronLeft, FaChevronRight, FaUsers } from "react-icons/fa";

const VoterManagement = () => {
  const [voters, setVoters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalVoters, setTotalVoters] = useState(0);
  const [votersPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("registrationDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const fetchVoters = async () => {
      setLoading(true);
      try {
        const response = await getVoters(
          currentPage,
          votersPerPage,
          debouncedSearch,
          sortBy,
          sortOrder
        );
        setVoters(response.data.voters);
        setTotalPages(response.data.pagination.totalPages);
        setTotalVoters(response.data.pagination.total);
      } catch (err) {
        setError("Failed to fetch voters");
        console.error("Error fetching voters:", err);
      }
      setLoading(false);
    };

    fetchVoters();
  }, [currentPage, votersPerPage, debouncedSearch, sortBy, sortOrder]);

  const LoadingSkeleton = () => (
    <div className={styles.section}>
      <div className={`${styles.skeletonHeader} ${styles.loadingSkeleton}`} />

      <div className={styles.auditLogContainer}>
        <div className={styles.filtersContainer}>
          <div
            className={`${styles.skeletonInput} ${styles.loadingSkeleton}`}
          />
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.logsTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Aadhaar Number</th>
                <th>Votes Cast</th>
                <th>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((index) => (
                <tr key={index}>
                  <td>
                    <div
                      className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
                    />
                  </td>
                  <td>
                    <div
                      className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
                    />
                  </td>
                  <td>
                    <div
                      className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
                    />
                  </td>
                  <td>
                    <div
                      className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
                    />
                  </td>
                  <td>
                    <div
                      className={`${styles.skeletonText} ${styles.loadingSkeleton}`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.paginationContainer}>
          <div
            className={`${styles.skeletonButton} ${styles.loadingSkeleton}`}
          />
          <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
          <div
            className={`${styles.skeletonButton} ${styles.loadingSkeleton}`}
          />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className={styles.section}>
      <h3>Voter Management</h3>
      {error && (
        <p className={`${styles.message} ${styles.errorMessage}`}>{error}</p>
      )}

      <div className={styles.auditLogContainer}>
        <div className={styles.filtersContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search voters..."
              value={searchTerm}
              onChange={handleSearch}
              className={styles.searchInput}
            />
            <div className={styles.searchHelper}>
              <p>You can search by:</p>
              <ul>
                <li>Voter name</li>
                <li>Email address</li>
                <li>Aadhaar Number</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.logsTable}>
            <thead>
              <tr>
                <th
                  onClick={() => handleSort("name")}
                  style={{ cursor: "pointer" }}
                >
                  Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  onClick={() => handleSort("email")}
                  style={{ cursor: "pointer" }}
                >
                  Email{" "}
                  {sortBy === "email" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  onClick={() => handleSort("nationalID")}
                  style={{ cursor: "pointer" }}
                >
                  Aadhaar Number{" "}
                  {sortBy === "nationalID" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  onClick={() => handleSort("voteCount")}
                  style={{ cursor: "pointer" }}
                >
                  Votes Cast{" "}
                  {sortBy === "voteCount" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  onClick={() => handleSort("registrationDate")}
                  style={{ cursor: "pointer" }}
                >
                  Registration Date{" "}
                  {sortBy === "registrationDate" &&
                    (sortOrder === "asc" ? "↑" : "↓")}
                </th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter) => (
                <tr key={voter._id}>
                  <td>{voter.name}</td>
                  <td>{voter.email}</td>
                  <td>{voter.nationalID}</td>
                  <td>{voter.voteCount}</td>
                  <td>{new Date(voter.registrationDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {voters.length === 0 && (
          <div className={styles.emptyStateContainer}>
            <FaUsers className={styles.emptyStateIcon} />
            <p className={styles.emptyStateText}>No Voters Found</p>
            <p className={styles.emptyStateSubtext}>
              {searchTerm
                ? "No voters match your search criteria"
                : "No voters have registered yet"}
            </p>
          </div>
        )}

        <div className={styles.paginationContainer}>
          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          <span className={styles.paginationInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoterManagement;
