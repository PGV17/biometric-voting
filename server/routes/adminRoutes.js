const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Voter = require('../models/Voter'); // Import Voter model
const Vote = require('../models/Vote');   // Import Vote model
const AuditLog = require('../models/AuditLog'); // Import AuditLog model
const Election = require('../models/Election');
const Candidate = require('../models/Candidate');
const logAudit = require('../utils/auditLogger'); // Import audit logger utility
const { protect } = require('../middleware/authMiddleware');

// @desc    Get admin profile
// @route   GET /api/admins/profile
// @access  Private
router.get('/profile', protect(Admin), (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(404).json({ message: 'Admin not found' });
  }
});

// @desc    Get dashboard statistics (total voters, total votes)
// @route   GET /api/admins/stats
// @access  Private (Admin only)
router.get('/stats', protect(Admin), async (req, res) => {
  try {
    const totalVoters = await Voter.countDocuments();
    const totalVotes = await Vote.countDocuments();

    // Log admin action - fetching stats
    logAudit('ADMIN_ACTION', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { action: 'Fetched dashboard statistics' },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json({
      totalVoters,
      totalVotes,
    });
  } catch (error) {
    logAudit('ADMIN_ACTION_FAILURE', {
      userId: req.user ? req.user._id : undefined,
      userModel: 'Admin',
      details: { action: 'Fetch dashboard statistics', error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Server error fetching stats', error: error.message });
  }
});

// @desc    Get audit logs
// @route   GET /api/admins/audit-logs
// @access  Private (Admin only)
const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

router.get('/audit-logs', protect(Admin), async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const skip = (page - 1) * limit;
    const actionType = req.query.actionType || '';
    const searchTerm = req.query.search || '';

    // Build query object
    const query = {};
    if (actionType) {
      query.action = actionType;
    }

    // Add search functionality
    if (searchTerm) {
      // First, find matching users
      const matchingUsers = await Promise.all([
        Admin.find({
          $or: [
            { username: { $regex: escapeRegex(searchTerm), $options: 'i' } },
            { email: { $regex: escapeRegex(searchTerm), $options: 'i' } }
          ]
        }).select('_id'),
        Voter.find({
          $or: [
            { name: { $regex: escapeRegex(searchTerm), $options: 'i' } },
            { email: { $regex: escapeRegex(searchTerm), $options: 'i' } },
            { nationalID: { $regex: escapeRegex(searchTerm), $options: 'i' } }
          ]
        }).select('_id')
      ]);

      const adminIds = matchingUsers[0].map(admin => admin._id);
      const voterIds = matchingUsers[1].map(voter => voter._id);

      // Build the search query
      query.$or = [
        { 'details': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.action': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.reason': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.error': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.message': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.nationalID': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.email': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.username': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'details.name': { $regex: escapeRegex(searchTerm), $options: 'i' } },
        { 'userId': { $in: [...adminIds, ...voterIds] } }
      ];
    }

    // Get total count for pagination
    const totalLogs = await AuditLog.countDocuments(query);
    const totalPages = Math.ceil(totalLogs / limit);

    // Fetch logs from the AuditLog collection with pagination and filtering
    const logs = await AuditLog.find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit)
      .populate('userId', 'username name email nationalID')
      .lean();

    // Log admin action - fetching audit logs
    logAudit('ADMIN_ACTION', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { action: 'Viewed audit logs', page, limit, actionType, searchTerm },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    const formattedLogs = logs.map(log => {
      let userName = 'System/Unknown';
      if (log.userId) {
        if (log.userModel === 'Admin' && log.userId.username) {
          userName = `Admin: ${log.userId.username}`;
        } else if (log.userModel === 'Voter') {
          userName = `Voter: ${log.userId.name || log.userId.email || log.userId.nationalID}`;
        } else {
          userName = `${log.userModel} ID: ${log.userId._id}`;
        }
      }
      return {
        type: log.action,
        timestamp: log.timestamp,
        user: userName,
        details: typeof log.details === 'string' ? log.details : JSON.stringify(log.details),
        status: log.status,
        ipAddress: log.ipAddress
      };
    });

    res.json({
      logs: formattedLogs,
      pagination: {
        currentPage: page,
        totalPages,
        totalLogs,
        logsPerPage: limit
      }
    });
  } catch (error) {
    console.error('Error fetching audit logs:', error);
    logAudit('ADMIN_ACTION_FAILURE', {
      userId: req.user ? req.user._id : undefined,
      userModel: 'Admin',
      details: { action: 'View audit logs', error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Server error fetching audit logs', error: error.message });
  }
});

// @desc    Get audit log types
// @route   GET /api/admins/audit-log-types
// @access  Private (Admin only)
router.get('/audit-log-types', protect(Admin), async (req, res) => {
  try {
    // Get distinct action types from the AuditLog collection
    const auditLogTypes = await AuditLog.distinct('action');

    res.json({ auditLogTypes });
  } catch (error) {
    logAudit('ADMIN_ACTION_FAILURE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { action: 'Fetch audit log types', error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Server error fetching audit log types', error: error.message });
  }
});

// @desc    Create a new election
// @route   POST /api/admins/elections
// @access  Private (Admin only)
router.post('/elections', protect(Admin), async (req, res) => {
  try {
    const { title, description, startDate, endDate, isPublic, allowedVoterGroups } = req.body;

    const election = await Election.create({
      title,
      description,
      startDate,
      endDate,
      isPublic,
      allowedVoterGroups,
      createdBy: req.user._id
    });

    logAudit('ELECTION_CREATE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { electionId: election._id, title: election.title },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.status(201).json(election);
  } catch (error) {
    logAudit('ELECTION_CREATE_FAILURE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Error creating election', error: error.message });
  }
});

// @desc    Get all elections
// @route   GET /api/admins/elections
// @access  Private (Admin only)
router.get('/elections', protect(Admin), async (req, res) => {
  try {
    const elections = await Election.find()
      .populate('candidates')
      .sort({ createdAt: -1 });

    res.json(elections);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching elections', error: error.message });
  }
});

// @desc    Update election status
// @route   PUT /api/admins/elections/:id/status
// @access  Private (Admin only)
router.put('/elections/:id/status', protect(Admin), async (req, res) => {
  try {
    const { status } = req.body;
    const election = await Election.findById(req.params.id);

    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }

    election.status = status;
    await election.save();

    logAudit('ELECTION_STATUS_UPDATE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { electionId: election._id, newStatus: status },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json(election);
  } catch (error) {
    res.status(500).json({ message: 'Error updating election status', error: error.message });
  }
});

// @desc    Add candidate to election
// @route   POST /api/admins/elections/:id/candidates
// @access  Private (Admin only)
router.post('/elections/:id/candidates', protect(Admin), async (req, res) => {
  try {
    const { name, description, party, imageUrl } = req.body;
    const election = await Election.findById(req.params.id);

    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }

    const candidate = await Candidate.create({
      name,
      description,
      party,
      imageUrl,
      election: election._id
    });

    election.candidates.push(candidate._id);
    await election.save();

    logAudit('CANDIDATE_CREATE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { electionId: election._id, candidateId: candidate._id },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: 'Error adding candidate', error: error.message });
  }
});

// @desc    Update candidate
// @route   PUT /api/admins/candidates/:id
// @access  Private (Admin only)
router.put('/candidates/:id', protect(Admin), async (req, res) => {
  try {
    const { name, description, party, imageUrl, isActive } = req.body;
    const candidate = await Candidate.findById(req.params.id);

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    if (name) candidate.name = name;
    if (description) candidate.description = description;
    if (party) candidate.party = party;
    if (imageUrl) candidate.imageUrl = imageUrl;
    if (typeof isActive === 'boolean') candidate.isActive = isActive;

    await candidate.save();

    logAudit('CANDIDATE_UPDATE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { candidateId: candidate._id },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: 'Error updating candidate', error: error.message });
  }
});

// @desc    Get election results
// @route   GET /api/admins/elections/:id/results
// @access  Private (Admin only)
router.get('/elections/:id/results', protect(Admin), async (req, res) => {
  try {
    const election = await Election.findById(req.params.id)
      .populate({
        path: 'candidates',
        select: 'name party voteCount'
      });

    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }

    const results = {
      electionId: election._id,
      title: election.title,
      totalVotes: election.totalVotes,
      candidates: election.candidates.map(candidate => ({
        name: candidate.name,
        party: candidate.party,
        votes: candidate.voteCount,
        percentage: election.totalVotes > 0
          ? ((candidate.voteCount / election.totalVotes) * 100).toFixed(2)
          : 0
      }))
    };

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching election results', error: error.message });
  }
});

// @desc    Get all voters with pagination and filtering
// @route   GET /api/admins/voters
// @access  Private (Admin only)
router.get('/voters', protect(Admin), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';
    const sortBy = req.query.sortBy || 'registrationDate';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;

    // Build search query
    const searchQuery = {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { nationalID: { $regex: search, $options: 'i' } }
      ]
    };

    // Get total count for pagination
    const total = await Voter.countDocuments(searchQuery);

    // Get voters with pagination and sorting
    const voters = await Voter.find(searchQuery)
      .select('-passwordHash -biometricTemplate') // Exclude sensitive data
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    // Get vote counts for each voter
    const votersWithVoteCounts = await Promise.all(voters.map(async (voter) => {
      const voteCount = await Vote.countDocuments({ voter: voter._id });
      return {
        ...voter,
        voteCount
      };
    }));

    logAudit('VOTERS_LIST_VIEW', {
      userId: req.user._id,
      userModel: 'Admin',
      details: {
        page,
        limit,
        search,
        total,
        sortBy,
        sortOrder
      },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json({
      voters: votersWithVoteCounts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    logAudit('VOTERS_LIST_VIEW_FAILURE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Error fetching voters', error: error.message });
  }
});

// @desc    Get voter details by ID
// @route   GET /api/admins/voters/:id
// @access  Private (Admin only)
router.get('/voters/:id', protect(Admin), async (req, res) => {
  try {
    const voter = await Voter.findById(req.params.id)
      .select('-passwordHash -biometricTemplate')
      .lean();

    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }

    // Get voter's voting history
    const votes = await Vote.find({ voter: voter._id })
      .populate('electionId', 'title')
      .populate('candidateId', 'name party')
      .lean();

    logAudit('VOTER_DETAILS_VIEW', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { voterId: voter._id },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json({
      ...voter,
      votingHistory: votes
    });
  } catch (error) {
    logAudit('VOTER_DETAILS_VIEW_FAILURE', {
      userId: req.user._id,
      userModel: 'Admin',
      details: { voterId: req.params.id, error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Error fetching voter details', error: error.message });
  }
});

module.exports = router;