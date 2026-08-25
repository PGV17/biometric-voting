const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Can reference Voter or Admin model
    refPath: 'userModel',
    // required: false, // Not always applicable (e.g., system events)
  },
  userModel: {
    type: String,
    // required: function() { return !!this.userId; }, // Required if userId is present
    enum: ['Voter', 'Admin'],
  },
  action: {
    type: String,
    required: true,
    trim: true,
    // Example actions: VOTER_REGISTRATION_SUCCESS, VOTER_REGISTRATION_FAILURE, VOTER_LOGIN_SUCCESS, VOTER_LOGIN_FAILURE, VOTE_CAST_SUCCESS, VOTE_CAST_FAILURE, ADMIN_LOGIN_SUCCESS, ADMIN_ACTION, BIOMETRIC_VERIFICATION_SUCCESS, BIOMETRIC_VERIFICATION_FAILURE
  },
  details: {
    type: mongoose.Schema.Types.Mixed, // Flexible field for various details
    // Example: { nationalID: '123', reason: 'Invalid credentials', voterId: 'xyz', candidateId: 'abc', adminUsername: 'adminX', modifiedField: 'voterStatus' }
  },
  ipAddress: {
    type: String,
    trim: true,
  },
  status: { // Optional: to quickly filter success/failure if not part of 'action'
    type: String,
    enum: ['SUCCESS', 'FAILURE', 'INFO'],
    default: 'INFO'
  }
});

// Indexing for faster queries
AuditLogSchema.index({ timestamp: -1 });
AuditLogSchema.index({ action: 1 });
AuditLogSchema.index({ userId: 1 });

module.exports = mongoose.model('AuditLog', AuditLogSchema);