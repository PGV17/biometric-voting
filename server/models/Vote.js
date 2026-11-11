const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  voter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voter',
    required: true,
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
    required: true,
  },
  electionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Election',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Ensure a voter can only vote once per election
// This unique index helps prevent duplicate votes at the database level as an additional safeguard.
// However, the primary check should still be done in the application logic before attempting to save.
voteSchema.index({ voter: 1, electionId: 1 }, { unique: true });

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;