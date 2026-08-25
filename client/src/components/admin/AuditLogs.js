import React, { useState, useEffect } from "react";
import {
  getAuditLogs,
  getAuditLogTypes,
  handleApiError,
} from "../../utils/api";
import styles from "./AdminDashboard.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalLogs, setTotalLogs] = useState(0);
  const [logsPerPage] = useState(10);
  const [auditLogTypes, setAuditLogTypes] = useState([]);
  const [error, setError] = useState("");

  const LoadingSkeleton = () => (
    <div className={styles.section}>
      <div className={`${styles.skeletonHeader} ${styles.loadingSkeleton}`} />

      <div className={styles.auditLogContainer}>
        <div className={styles.filtersContainer}>
          <div
            className={`${styles.skeletonInput} ${styles.loadingSkeleton}`}
          />
          <div
            className={`${styles.skeletonInput} ${styles.loadingSkeleton}`}
          />
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.logsTable}>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Type</th>
                <th>User</th>
                <th>Details</th>
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuditLogs = async () => {
      setLoading(true);
      try {
        const response = await getAuditLogs(
          currentPage,
          logsPerPage,
          filterType,
          searchTerm
        );
        setLogs(response.data.logs);
        setTotalPages(response.data.pagination.totalPages);
        setTotalLogs(response.data.pagination.totalLogs);
      } catch (err) {
        const error = handleApiError(err);
        setError(error.message);
        console.error("Error fetching audit logs:", error);
      }
      setLoading(false);
    };

    const fetchAuditLogTypes = async () => {
      try {
        const response = await getAuditLogTypes();
        setAuditLogTypes(response.data.auditLogTypes);
      } catch (err) {
        const error = handleApiError(err);
        console.error("Error fetching audit log types:", error);
      }
    };

    fetchAuditLogs();
    fetchAuditLogTypes();
  }, [currentPage, logsPerPage, filterType, searchTerm]);

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

  return (
    <div className={styles.section}>
      <h3>Audit Logs</h3>
      {error && (
        <p className={`${styles.message} ${styles.errorMessage}`}>{error}</p>
      )}

      <div className={styles.auditLogContainer}>
        <div className={styles.filtersContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={handleSearch}
              className={styles.searchInput}
            />
            <div className={styles.searchHelper}>
              <p>You can search by:</p>
              <ul>
                <li>Username or name</li>
                <li>Email address</li>
                <li>Aadhaar Number</li>
                <li>Action type</li>
                <li>Error messages</li>
                <li>Any text in the details</li>
              </ul>
            </div>
          </div>
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setCurrentPage(1);
            }}
            className={styles.filterSelect}
          >
            <option value="">All Types</option>
            {auditLogTypes.map((type) => (
              <option key={type} value={type}>
                {type.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>

        {logs.length === 0 && (
          <p className={`${styles.message} ${styles.noLogsMessage}`}>
            No logs found matching your criteria.
          </p>
        )}

        <div className={styles.tableWrapper}>
          <table className={styles.logsTable}>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Type</th>
                <th>User</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td>{new Date(log.timestamp).toLocaleString()}</td>
                  <td>{log.type.replace("_", " ")}</td>
                  <td>{log.user || "N/A"}</td>
                  <td>{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

export default AuditLogs;
