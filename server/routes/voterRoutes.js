const express = require('express');
const router = express.Router();
const Voter = require('../models/Voter');
const Election = require('../models/Election');
const Vote = require('../models/Vote');
const { protect } = require('../middleware/authMiddleware');
const logAudit = require('../utils/auditLogger');
const { encrypt, decrypt } = require('../utils/cryptoUtils'); // Import encryption and decryption utilities
const faceapi = require('face-api.js'); // Using face-api.js for distance calculation on backend for consistency
const mongoose = require('mongoose'); // For transaction
const Candidate = require('../models/Candidate');

// Function to calculate Euclidean distance between two descriptors
const calculateDistance = (descriptor1, descriptor2) => {
  if (!descriptor1 || !descriptor2 || descriptor1.length !== descriptor2.length) {
    return Infinity; // Cannot compare
  }
  return faceapi.euclideanDistance(new Float32Array(descriptor1), new Float32Array(descriptor2));
};

const FACE_MATCH_THRESHOLD = 0.6; // Example threshold, adjust as needed (lower is stricter)

// @desc    Get voter profile
// @route   GET /api/voters/profile
// @access  Private
router.get('/profile', protect(Voter), async (req, res) => {
  try {
    const voter = await Voter.findById(req.user._id).select('-passwordHash -biometricTemplate');
    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }
    res.json(voter);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @desc    Update voter profile
// @route   PUT /api/voters/profile
// @access  Private
router.put('/profile', protect(Voter), async (req, res) => {
  try {
    const { name, contactInfo } = req.body;
    const voter = await Voter.findById(req.user._id);

    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }

    if (name) voter.name = name;
    if (contactInfo) voter.contactInfo = contactInfo;

    const updatedVoter = await voter.save();

    logAudit('VOTER_PROFILE_UPDATE', {
      userId: voter._id,
      userModel: 'Voter',
      details: { updatedFields: Object.keys(req.body) },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json({
      _id: updatedVoter._id,
      name: updatedVoter.name,
      email: updatedVoter.email,
      nationalID: updatedVoter.nationalID,
      contactInfo: updatedVoter.contactInfo,
      isRegistered: updatedVoter.isRegistered
    });
  } catch (error) {
    logAudit('VOTER_PROFILE_UPDATE_FAILURE', {
      userId: req.user._id,
      userModel: 'Voter',
      details: { error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @desc    Update voter biometrics
// @route   PUT /api/voters/biometrics
// @access  Private
router.put('/biometrics', protect(Voter), async (req, res) => {
  const { facialData } = req.body;

  if (!facialData) {
    return res.status(400).json({ message: 'Facial data is required' });
  }

  try {
    const voter = await Voter.findById(req.user._id);

    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }

    // Validate and process facial data
    try {
      // Ensure facialData is an array of numbers
      const facialArray = Array.from(facialData);
      if (!Array.isArray(facialArray) || facialArray.some(isNaN)) {
        throw new Error('Invalid facial data format');
      }

      // Serialize the array to JSON string
      const facialDataString = JSON.stringify(facialArray);

      // Encrypt the serialized data
      const encryptedBiometricTemplate = encrypt(facialDataString);

      voter.biometricTemplate = encryptedBiometricTemplate;
      await voter.save();

      logAudit('VOTER_BIOMETRICS_UPDATE', {
        userId: voter._id,
        userModel: 'Voter',
        details: { action: 'Biometrics updated' },
        ipAddress: req.ip,
        status: 'SUCCESS'
      });

      res.json({ message: 'Biometrics updated successfully' });
    } catch (error) {
      logAudit('VOTER_BIOMETRICS_UPDATE_FAILURE', {
        userId: voter._id,
        userModel: 'Voter',
        details: { error: error.message },
        ipAddress: req.ip,
        status: 'FAILURE'
      });
      res.status(500).json({ message: 'Error processing facial data', error: error.message });
    }
  } catch (error) {
    logAudit('VOTER_BIOMETRICS_UPDATE_FAILURE', {
      userId: req.user._id,
      userModel: 'Voter',
      details: { error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @desc    Get election details
// @route   GET /api/voters/elections/:id
// @access  Private
router.get('/elections/:id', protect(Voter), async (req, res) => {
  try {
    const election = await Election.findById(req.params.id)
      .populate('candidates', 'name description party voteCount')
      .lean();

    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }

    // Check if the election is public or if the voter is allowed to access it
    if (!election.isPublic && !election.allowedVoterGroups.includes(req.user.voterGroup)) {
      return res.status(403).json({ message: 'You do not have permission to view this election' });
    }

    // Log the election view
    logAudit('ELECTION_VIEW', {
      userId: req.user._id,
      userModel: 'Voter',
      details: { electionId: election._id, electionTitle: election.title },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json({
      _id: election._id,
      title: election.title,
      description: election.description,
      startDate: election.startDate,
      endDate: election.endDate,
      status: election.status,
      isPublic: election.isPublic,
      totalVotes: election.totalVotes,
      candidates: election.candidates
    });
  } catch (error) {
    logAudit('ELECTION_VIEW_FAILURE', {
      userId: req.user._id,
      userModel: 'Voter',
      details: { electionId: req.params.id, error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @desc    Get all active elections
// @route   GET /api/voters/elections
// @access  Private
router.get('/elections', protect(Voter), async (req, res) => {
  try {
    const elections = await Election.find({
      $or: [
        { isPublic: true },
        { allowedVoterGroups: req.user.voterGroup }
      ],
      status: 'active'
    })
    .select('title description startDate endDate status totalVotes')
    .lean();

    // Get voter's voted elections
    const voter = await Voter.findById(req.user._id).select('votedElections');
    const votedElectionIds = voter.votedElections.map(id => id.toString());

    // Add hasVoted flag to each election
    const electionsWithVoteStatus = elections.map(election => ({
      ...election,
      hasVoted: votedElectionIds.includes(election._id.toString())
    }));

    logAudit('ELECTIONS_LIST_VIEW', {
      userId: req.user._id,
      userModel: 'Voter',
      details: { count: elections.length },
      ipAddress: req.ip,
      status: 'SUCCESS'
    });

    res.json(electionsWithVoteStatus);
  } catch (error) {
    logAudit('ELECTIONS_LIST_VIEW_FAILURE', {
      userId: req.user._id,
      userModel: 'Voter',
      details: { error: error.message },
      ipAddress: req.ip,
      status: 'FAILURE'
    });
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @desc    Cast a vote
// @route   POST /api/voters/vote
// @access  Private (Voter only)
router.post('/vote', protect(Voter), async (req, res) => {
  const { candidateId, electionId } = req.body;
  const voterId = req.user._id; // From protect middleware
  const ipAddress = req.ip;

  if (!candidateId || !electionId) {
    logAudit('VOTE_CAST_FAILURE', {
      userId: voterId,
      userModel: 'Voter',
      details: { electionId, reason: 'Candidate ID or Election ID missing' },
      ipAddress,
      status: 'FAILURE'
    });
    return res.status(400).json({ message: 'Candidate ID and Election ID are required.' });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // 1. Check if the voter has already voted in this election
    const voter = await Voter.findById(voterId).session(session);
    if (!voter) {
      await session.abortTransaction();
      session.endSession();
      logAudit('VOTE_CAST_FAILURE', {
        userId: voterId,
        userModel: 'Voter',
        details: { electionId, candidateId, reason: 'Voter not found during vote cast' },
        ipAddress,
        status: 'FAILURE'
      });
      return res.status(404).json({ message: 'Voter not found.' });
    }

    // Check if voter has already voted in this election
    // votedElections stores ObjectIds; request body provides strings, so compare via toString()
    if (voter.votedElections.some((id) => id.toString() === electionId)) {
      await session.abortTransaction();
      session.endSession();
      logAudit('VOTE_CAST_FAILURE', {
        userId: voterId,
        userModel: 'Voter',
        details: { electionId, candidateId, reason: 'Voter has already voted in this election' },
        ipAddress,
        status: 'FAILURE'
      });
      return res.status(400).json({ message: 'You have already voted in this election.' });
    }

    // 2. Verify the candidate belongs to the election
    const election = await Election.findById(electionId).session(session);
    if (!election) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: 'Election not found.' });
    }

    if (!election.candidates.some((id) => id.toString() === candidateId)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: 'Invalid candidate for this election.' });
    }

    // 3. Record the vote
    const newVote = new Vote({
      voter: voterId,
      candidateId,
      electionId,
    });
    await newVote.save({ session });

    // 4. Update the votedElections array for the voter
    voter.votedElections.push(electionId);
    await voter.save({ session });

    // 5. Update election's total votes
    election.totalVotes += 1;
    await election.save({ session });

    // 6. Update candidate's vote count
    const candidate = await Candidate.findById(candidateId).session(session);
    if (!candidate) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: 'Candidate not found.' });
    }
    candidate.voteCount += 1;
    await candidate.save({ session });

    // If all operations are successful, commit the transaction
    await session.commitTransaction();
    session.endSession();

    logAudit('VOTE_CAST_SUCCESS', {
      userId: voterId,
      userModel: 'Voter',
      details: { electionId, candidateId },
      ipAddress,
      status: 'SUCCESS'
    });
    res.status(201).json({ message: 'Vote cast successfully.' });

  } catch (error) {
    // If any error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();
    console.error('Error casting vote:', error);
    const reason = error.code === 11000 ? 'Duplicate vote attempt' : 'Server error during vote casting';
    logAudit('VOTE_CAST_FAILURE', {
      userId: voterId,
      userModel: 'Voter',
      details: { electionId, candidateId, reason, error: error.message },
      ipAddress,
      status: 'FAILURE'
    });
    if (error.code === 11000) {
        return res.status(400).json({ message: 'Vote already recorded or duplicate entry attempt.' });
    }
    res.status(500).json({ message: 'Server error during vote casting.', error: error.message });
  }
});

module.exports = router;