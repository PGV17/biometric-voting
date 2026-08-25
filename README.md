# Biometric Voting System (BVS)

A full-stack electronic voting web application that verifies voter identity using facial recognition biometrics (`face-api.js`), stores encrypted biometric descriptors via AES-256-CBC, and manages elections with atomic MongoDB transactions.

---

## Tech Stack

- **Frontend**: React 19, React Router v7, face-api.js, react-webcam, Axios
- **Backend**: Node.js, Express 5, Mongoose 8, MongoDB
- **Security & AI**: AES-256-CBC Encryption, Bcrypt, JWT Authentication, TensorFlow.js models
- **Testing**: Jest, Supertest

---



## Important Scripts & Quick Start

### 1. Prerequisites
- Node.js (v18+)
- MongoDB running locally on port 27017 or a MongoDB Atlas URI

### 2. Backend Setup
```bash
# Navigate to server
cd server

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Run test suite
npm test

# Start backend server (runs on port 3000)
npm start
```

### 3. Frontend Setup
```bash
# Navigate to client (in a separate terminal)
cd client

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start React app (runs on port 3001 or 3000)
npm start
```

---

## Environment Variables

### Backend (`server/.env`)
| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `PORT` | Express server port | `3000` |
| `MONGODB_URI` | MongoDB connection URI | `mongodb://localhost:27017/biometric-voting` |
| `JWT_SECRET` | Secret key for JWT signing | `minimum_32_chars_secret_key` |
| `BIOMETRIC_ENCRYPTION_KEY` | 32-character key for AES-256-CBC | `32_byte_hex_encryption_key_1234` |
| `FRONTEND_URL` | Allowed CORS origin | `http://localhost:3001` |

### Frontend (`client/.env`)
| Variable | Description | Default |
| :--- | :--- | :--- |
| `REACT_APP_API_URL` | Backend REST API base URL | `http://localhost:3000/api` |

---

## Core API Endpoints

### Auth (`/api/auth`)
- `POST /api/auth/register` - Register voter with biometric facial descriptor
- `POST /api/auth/validate-credentials` - Step 1 password credential validation
- `POST /api/auth/login` - Step 2 facial biometric verification & JWT issue
- `POST /api/auth/admin/register` - Register admin account
- `POST /api/auth/admin/login` - Admin authentication

### Voter (`/api/voters`)
- `GET /api/voters/elections` - List active elections and voted status
- `GET /api/voters/elections/:id` - Get election details and candidates
- `POST /api/voters/vote` - Cast atomic ballot in election
- `GET /api/voters/profile` - Fetch voter profile
- `PUT /api/voters/biometrics` - Update facial biometric template

### Admin (`/api/admins`)
- `GET /api/admins/stats` - Total registered voters and votes cast
- `POST /api/admins/elections` - Create a new election
- `PUT /api/admins/elections/:id/status` - Update election state (`draft`, `active`, `completed`)
- `POST /api/admins/elections/:id/candidates` - Add candidate to election
- `GET /api/admins/elections/:id/results` - View vote count breakdown
- `GET /api/admins/voters` - Searchable voter directory
- `GET /api/admins/audit-logs` - Query system audit logs

---

## Directory Overview

```plaintext
biometric-voting-system/
├── client/              # React frontend (UI, Webcam, face-api.js models in /public/models)
├── server/              # Express backend (API routes, Mongoose models, AES crypto utils)
└── README.md
```
