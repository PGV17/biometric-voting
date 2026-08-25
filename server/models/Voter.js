const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const voterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  nationalID: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  contactInfo: {
    type: String, // Could be phone number or other contact details
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // Basic email validation, consider using a more robust validator like 'validator' package
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  passwordHash: {
    type: String,
    required: true
  },
  biometricTemplate: {
    type: String, // This will store the path to or the encrypted biometric data
    // required: true, // Will be required after initial registration step
  },
  isRegistered: {
    type: Boolean,
    default: false
  },
  votedElections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Election'
  }],
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to hash password before saving
voterSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
voterSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;