const AuditLog = require('../models/AuditLog');

/**
 * Logs an audit event.
 * @param {string} action - The action performed (e.g., VOTER_LOGIN_SUCCESS).
 * @param {object} options - Additional options for the log entry.
 * @param {mongoose.Types.ObjectId} [options.userId] - The ID of the user performing the action.
 * @param {string} [options.userModel] - The model of the user ('Voter' or 'Admin').
 * @param {object} [options.details] - Specific details about the event.
 * @param {string} [options.ipAddress] - The IP address of the request originator.
 * @param {string} [options.status] - The status of the action (SUCCESS, FAILURE, INFO).
 */
const logAudit = async (action, options = {}) => {
  try {
    const { userId, userModel, details, ipAddress, status } = options;

    const auditEntry = new AuditLog({
      action,
      userId,
      userModel,
      details,
      ipAddress,
      status: status || (action.includes('SUCCESS') ? 'SUCCESS' : action.includes('FAILURE') ? 'FAILURE' : 'INFO'),
    });

    await auditEntry.save();
  } catch (error) {
    console.error('Failed to save audit log:', error);
    // Decide if this error should propagate or be silently handled
    // For critical audit logs, you might want more robust error handling or fallback logging
  }
};

module.exports = logAudit;