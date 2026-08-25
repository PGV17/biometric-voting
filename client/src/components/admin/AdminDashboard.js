import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminStats } from "../../utils/api";
import styles from "./AdminDashboard.module.css";
import ElectionManagement from "./ElectionManagement";
import AuditLogs from "./AuditLogs";
import VoterManagement from "./VoterManagement";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalVoters: 0, totalVotes: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          navigate("/admin/login");
          return;
        }

        const response = await getAdminStats();
        setStats(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        } else if (
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          setError(err.response.data.message);
        } else {
          setError("Failed to fetch dashboard data.");
        }
        console.error("Error fetching admin stats:", err);
      }
      setLoading(false);
    };

    fetchStats();
  }, [navigate]);

  const LoadingSkeleton = () => (
    <div className={styles.dashboardContainer}>
      <div className={`${styles.skeletonHeader} ${styles.loadingSkeleton}`} />

      <div className={styles.tabContainer}>
        <div className={`${styles.skeletonButton} ${styles.loadingSkeleton}`} />
        <div className={`${styles.skeletonButton} ${styles.loadingSkeleton}`} />
        <div className={`${styles.skeletonButton} ${styles.loadingSkeleton}`} />
      </div>

      <div className={styles.statsContainer}>
        <div className={`${styles.statCard} ${styles.loadingSkeleton}`}>
          <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
          <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
        </div>
        <div className={`${styles.statCard} ${styles.loadingSkeleton}`}>
          <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
          <div className={`${styles.skeletonText} ${styles.loadingSkeleton}`} />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardHeader}>Admin Dashboard</h2>

      {error && (
        <p className={`${styles.message} ${styles.errorMessage}`}>{error}</p>
      )}

      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "overview" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "elections" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("elections")}
        >
          Elections
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "audit" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("audit")}
        >
          Audit Logs
        </button>
      </div>

      {activeTab === "overview" && (
        <>
          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <h3>Total Registered Voters</h3>
              <p>{stats.totalVoters}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Total Votes Cast</h3>
              <p>{stats.totalVotes}</p>
            </div>
          </div>
          <VoterManagement />
        </>
      )}

      {activeTab === "elections" && <ElectionManagement />}

      {activeTab === "audit" && <AuditLogs />}
    </div>
  );
};

export default AdminDashboard;
