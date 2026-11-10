const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.disable('x-powered-by');
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001', // Use environment variable with fallback
  credentials: true // Allow credentials (cookies, authorization headers, etc)
}));
app.use(express.json());

// Basic "hello world" API endpoint
app.get('/api/hello', (req, res) => {
  res.send('Hello World from the backend!');
});

// Import Routes
const adminRoutes = require('./routes/adminRoutes');
const voterRoutes = require('./routes/voterRoutes');
const authRoutes = require('./routes/authRoutes');

// Mount Routes
app.use('/api/auth', authRoutes); // Mount auth routes first
app.use('/api/admins', adminRoutes);
app.use('/api/voters', voterRoutes);

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

module.exports = app; // Export the app for testing