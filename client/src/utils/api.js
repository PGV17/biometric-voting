import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3000/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // For auth endpoints, just pass through the error
    if (error.config.url.startsWith("/auth")) {
      return Promise.reject(error);
    }

    // For other endpoints, if we get a 401, clear tokens and redirect to login
    if (error.response?.status === 401) {
      localStorage.removeItem("voterToken");
      localStorage.removeItem("adminToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

// Request interceptor for adding auth tokens
api.interceptors.request.use((config) => {
  // Skip token handling for auth endpoints
  if (config.url.startsWith("/auth")) {
    return config;
  }

  // Check if the request is for admin endpoints
  if (config.url.startsWith("/admins")) {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`;
    }
  } else {
    // For voter endpoints
    const voterToken = localStorage.getItem("voterToken");
    if (voterToken) {
      config.headers.Authorization = `Bearer ${voterToken}`;
    }
  }
  return config;
});

// Authentication APIs
export const registerAdmin = (adminData) =>
  api.post("/auth/admin/register", adminData);
export const loginAdmin = (credentials) =>
  api.post("/auth/admin/login", credentials);
export const registerVoter = (voterData) =>
  api.post("/auth/register", voterData);
export const validateVoterCredentials = (credentials) =>
  api.post("/auth/validate-credentials", credentials);
export const loginVoter = (credentials) => api.post("/auth/login", credentials);

// Voter APIs
export const getVoterProfile = () => api.get("/voters/profile");
export const updateVoterProfile = (profileData) =>
  api.put("/voters/profile", profileData);
export const updateVoterBiometrics = (biometricData) =>
  api.put("/voters/biometrics", biometricData);
export const getElections = () => api.get("/voters/elections");
export const getElectionById = (id) => api.get(`/voters/elections/${id}`);
export const castVote = (voteData) => api.post("/voters/vote", voteData);

// Admin APIs
export const getAdminProfile = () => api.get("/admins/profile");
export const getAdminStats = () => api.get("/admins/stats");
export const getAuditLogTypes = () => api.get("/admins/audit-log-types");
export const getAuditLogs = (
  page = 1,
  limit = 10,
  actionType = "",
  search = ""
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });
  if (actionType) {
    params.append("actionType", actionType);
  }
  if (search) {
    params.append("search", search);
  }
  return api.get(`/admins/audit-logs?${params.toString()}`);
};
export const getVoters = (page = 1, limit = 10, search = "", sortBy = "registrationDate", sortOrder = "desc") => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });
  if (search) {
    params.append("search", search);
  }
  if (sortBy) {
    params.append("sortBy", sortBy);
  }
  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  return api.get(`/admins/voters?${params.toString()}`);
};

export const getVoterDetails = (voterId) => api.get(`/admins/voters/${voterId}`);

// Election Management APIs
export const createElection = (electionData) => api.post("/admins/elections", electionData);
export const getAllElections = () => api.get("/admins/elections");
export const updateElectionStatus = (electionId, status) =>
  api.put(`/admins/elections/${electionId}/status`, { status });
export const getElectionResults = (electionId) =>
  api.get(`/admins/elections/${electionId}/results`);

// Candidate Management APIs
export const addCandidate = (electionId, candidateData) =>
  api.post(`/admins/elections/${electionId}/candidates`, candidateData);
export const updateCandidate = (candidateId, candidateData) =>
  api.put(`/admins/candidates/${candidateId}`, candidateData);

// Error handling utility
export const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return {
      message: error.response.data.message || "An error occurred",
      status: error.response.status,
      data: error.response.data,
    };
  } else if (error.request) {
    // The request was made but no response was received
    return {
      message: "No response from server",
      status: 0,
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return {
      message: error.message || "An unexpected error occurred",
      status: 0,
    };
  }
};

export default api;
