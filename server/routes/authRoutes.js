const express = require("express");
const router = express.Router();
const Voter = require("../models/Voter");
const Admin = require("../models/Admin");
const { generateToken } = require("../middleware/authMiddleware");
const logAudit = require("../utils/auditLogger");
const { encrypt, decrypt } = require("../utils/cryptoUtils");
// Simple Euclidean distance calculation without face-api.js
const calculateDistance = (descriptor1, descriptor2) => {
  if (
    !descriptor1 ||
    !descriptor2 ||
    descriptor1.length !== descriptor2.length
  ) {
    return Infinity; // Cannot compare
  }

  // Calculate Euclidean distance manually
  let sum = 0;
  for (let i = 0; i < descriptor1.length; i++) {
    const diff = descriptor1[i] - descriptor2[i];
    sum += diff * diff;
  }
  return Math.sqrt(sum);
};

const FACE_MATCH_THRESHOLD = 0.6; // Example threshold, adjust as needed (lower is stricter)

// Function to check if biometric data already exists
/* const checkDuplicateBiometric = async (facialData) => {
  try {
    const voters = await Voter.find({ biometricTemplate: { $exists: true } });

    for (const voter of voters) {
      if (!voter.biometricTemplate) continue;

      const decryptedTemplate = decrypt(voter.biometricTemplate);
      if (!decryptedTemplate) continue;

      const storedDescriptor = decryptedTemplate;
      const matchDistance = calculateDistance(storedDescriptor, facialData);

      if (matchDistance <= FACE_MATCH_THRESHOLD) {
        return true; // Found a match
      }
    }
    return false; // No match found
  } catch (error) {
    console.error('Error checking duplicate biometric:', error);
    throw error;
  }
}; */

// @desc    Register a new admin
// @route   POST /api/auth/admin/register
// @access  Public (for initial setup)
router.post("/admin/register", async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const adminExists = await Admin.findOne({ username });

    if (adminExists) {
      logAudit("ADMIN_REGISTRATION_FAILURE", {
        details: { username, reason: "Admin already exists" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({
      username,
      passwordHash: password, // Password will be hashed by pre-save hook in model
      role,
    });

    if (admin) {
      logAudit("ADMIN_REGISTRATION_SUCCESS", {
        userId: admin._id,
        userModel: "Admin",
        details: { username: admin.username, role: admin.role },
        ipAddress: req.ip,
        status: "SUCCESS",
      });
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        role: admin.role,
        token: generateToken(admin._id),
      });
    } else {
      logAudit("ADMIN_REGISTRATION_FAILURE", {
        details: { username, reason: "Invalid admin data" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    logAudit("ADMIN_REGISTRATION_FAILURE", {
      details: {
        username: req.body.username,
        reason: "Server error",
        error: error.message,
      },
      ipAddress: req.ip,
      status: "FAILURE",
    });
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @desc    Authenticate admin & get token
// @route   POST /api/auth/admin/login
// @access  Public
router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.comparePassword(password))) {
      logAudit("ADMIN_LOGIN_SUCCESS", {
        userId: admin._id,
        userModel: "Admin",
        details: { username: admin.username },
        ipAddress: req.ip,
        status: "SUCCESS",
      });
      res.json({
        _id: admin._id,
        username: admin.username,
        role: admin.role,
        token: generateToken(admin._id),
      });
    } else {
      logAudit("ADMIN_LOGIN_FAILURE", {
        details: { username, reason: "Invalid username or password" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    logAudit("ADMIN_LOGIN_FAILURE", {
      details: {
        username: req.body.username,
        reason: "Server error",
        error: error.message,
      },
      ipAddress: req.ip,
      status: "FAILURE",
    });
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @desc    Register a new voter with biometric data
// @route   POST /api/auth/register
// @access  Public
router.post("/register", async (req, res) => {
  console.log("=== VOTER REGISTRATION REQUEST RECEIVED ===");
  const { name, nationalID, contactInfo, email, password, facialData } =
    req.body;
  console.log("Request data:", {
    name,
    nationalID,
    contactInfo,
    email,
    hasFacialData: !!facialData,
    facialDataLength: facialData?.length,
  });

  try {
    console.log("Step 1: Checking if voter exists...");
    const voterExists = await Voter.findOne({
      $or: [{ email }, { nationalID }],
    });
    console.log("Voter exists check completed:", !!voterExists);

    if (voterExists) {
      logAudit("VOTER_REGISTRATION_FAILURE", {
        details: { reason: "Voter already exists", email, nationalID },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res.status(400).json({
        message: "Voter already exists with this email or Aadhaar Number",
      });
    }

    if (!facialData) {
      logAudit("VOTER_REGISTRATION_FAILURE", {
        details: { reason: "Facial data missing", email, nationalID },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res
        .status(400)
        .json({ message: "Facial data is required for registration." });
    }

    // Check for duplicate biometric data (Temporarily Disabled)
    /* try {
      const isDuplicate = await checkDuplicateBiometric(facialData);
      if (isDuplicate) {
        logAudit('VOTER_REGISTRATION_FAILURE', {
          details: { reason: 'Biometric data already registered', email, nationalID },
          ipAddress: req.ip,
          status: 'FAILURE'
        });
        return res.status(400).json({ message: 'This biometric data is already registered in the system.' });
      }
    } catch (error) {
      console.error('Error checking duplicate biometric:', error);
      logAudit('VOTER_REGISTRATION_FAILURE', {
        details: { reason: 'Error checking duplicate biometric', error: error.message },
        ipAddress: req.ip,
        status: 'FAILURE'
      });
      return res.status(500).json({ message: 'Error verifying biometric data uniqueness.' });
    } */

    // Validate and process facial data
    try {
      console.log("Step 2: Processing facial data...");
      // Ensure facialData is an array of numbers
      const facialArray = Array.from(facialData);
      console.log("Facial array length:", facialArray.length);

      if (!Array.isArray(facialArray) || facialArray.some(isNaN)) {
        throw new Error("Invalid facial data format");
      }

      // Serialize the array to JSON string
      console.log("Step 3: Serializing facial data...");
      const facialDataString = JSON.stringify(facialArray);

      // Encrypt the serialized data
      console.log("Step 4: Encrypting biometric template...");
      const encryptedBiometricTemplate = encrypt(facialDataString);
      console.log("Encryption completed");

      console.log("Step 5: Creating voter in database...");
      const voter = await Voter.create({
        name,
        nationalID,
        contactInfo,
        email,
        passwordHash: password, // Password will be hashed by pre-save hook
        biometricTemplate: encryptedBiometricTemplate, // Store encrypted biometric data
        isRegistered: true,
      });

      if (voter) {
        logAudit("VOTER_REGISTRATION_SUCCESS", {
          userId: voter._id,
          userModel: "Voter",
          details: { email: voter.email, nationalID: voter.nationalID },
          ipAddress: req.ip,
          status: "SUCCESS",
        });
        res.status(201).json({
          _id: voter._id,
          name: voter.name,
          email: voter.email,
          nationalID: voter.nationalID,
          isRegistered: voter.isRegistered,
        });
      } else {
        logAudit("VOTER_REGISTRATION_FAILURE", {
          details: { reason: "Invalid voter data", data: req.body },
          ipAddress: req.ip,
          status: "FAILURE",
        });
        res.status(400).json({ message: "Invalid voter data" });
      }
    } catch (error) {
      console.error("Error processing facial data:", error);

      // Handle Mongoose validation errors specifically
      if (error.name === "ValidationError") {
        const validationErrors = Object.values(error.errors).map(
          (err) => err.message
        );
        logAudit("VOTER_REGISTRATION_FAILURE", {
          details: {
            reason: "Validation error",
            errors: validationErrors,
          },
          ipAddress: req.ip,
          status: "FAILURE",
        });
        return res.status(400).json({
          message: validationErrors.join(". "),
        });
      }

      logAudit("VOTER_REGISTRATION_FAILURE", {
        details: {
          reason: "Error processing facial data",
          error: error.message,
          data: req.body,
        },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      res.status(500).json({
        message: "Error processing facial data",
        error: error.message,
      });
    }
  } catch (error) {
    logAudit("VOTER_REGISTRATION_FAILURE", {
      details: { reason: "Server error", error: error.message },
      ipAddress: req.ip,
      status: "FAILURE",
    });
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @desc    Validate voter credentials
// @route   POST /api/auth/validate-credentials
// @access  Public
router.post("/validate-credentials", async (req, res) => {
  const { loginIdentifier, password } = req.body;

  if (!loginIdentifier || !password) {
    return res
      .status(400)
      .json({ message: "Login identifier and password are required." });
  }

  try {
    // Find voter by email or nationalID
    const voter = await Voter.findOne({
      $or: [{ email: loginIdentifier }, { nationalID: loginIdentifier }],
    });

    if (!voter) {
      logAudit("VOTER_CREDENTIAL_VALIDATION_FAILURE", {
        details: { loginIdentifier, reason: "User not found" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res
        .status(401)
        .json({ message: "Invalid credentials or user not found." });
    }

    // Verify password
    const isPasswordMatch = await voter.comparePassword(password);
    if (!isPasswordMatch) {
      logAudit("VOTER_CREDENTIAL_VALIDATION_FAILURE", {
        userId: voter._id,
        userModel: "Voter",
        details: { loginIdentifier, reason: "Password mismatch" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // If we get here, credentials are valid
    logAudit("VOTER_CREDENTIAL_VALIDATION_SUCCESS", {
      userId: voter._id,
      userModel: "Voter",
      details: { loginIdentifier },
      ipAddress: req.ip,
      status: "SUCCESS",
    });

    // Return success without token (token will be generated in final login)
    res.status(200).json({
      message: "Credentials validated successfully",
      voterId: voter._id,
    });
  } catch (error) {
    logAudit("VOTER_CREDENTIAL_VALIDATION_FAILURE", {
      details: {
        loginIdentifier,
        reason: "Server error",
        error: error.message,
      },
      ipAddress: req.ip,
      status: "FAILURE",
    });
    res.status(500).json({
      message: "Server error during credential validation",
      error: error.message,
    });
  }
});

// @desc    Complete login with biometrics & get token
// @route   POST /api/auth/login
// @access  Public
router.post("/login", async (req, res) => {
  const { loginIdentifier, password, facialData } = req.body;

  if (!loginIdentifier || !password || !facialData) {
    return res.status(400).json({
      message: "Login identifier, password, and facial data are required.",
    });
  }

  try {
    // Find voter by email or nationalID
    const voter = await Voter.findOne({
      $or: [{ email: loginIdentifier }, { nationalID: loginIdentifier }],
    });

    if (!voter) {
      logAudit("VOTER_LOGIN_FAILURE", {
        details: { loginIdentifier, reason: "User not found" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res
        .status(401)
        .json({ message: "Invalid credentials or user not found." });
    }

    // Verify password again (double-check)
    const isPasswordMatch = await voter.comparePassword(password);
    if (!isPasswordMatch) {
      logAudit("VOTER_LOGIN_FAILURE", {
        userId: voter._id,
        userModel: "Voter",
        details: { loginIdentifier, reason: "Password mismatch" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res.status(401).json({ message: "Invalid credentials." });
    }

    if (!voter.biometricTemplate) {
      logAudit("VOTER_LOGIN_FAILURE", {
        userId: voter._id,
        userModel: "Voter",
        details: { loginIdentifier, reason: "No biometric template found" },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      return res.status(400).json({
        message:
          "No biometric template found for this voter. Please register with biometrics.",
      });
    }

    let storedDescriptor;
    let matchDistance;
    try {
      const decryptedTemplate = decrypt(voter.biometricTemplate);
      if (!decryptedTemplate) {
        throw new Error("Failed to decrypt biometric template");
      }

      storedDescriptor = decryptedTemplate;

      if (!Array.isArray(storedDescriptor)) {
        throw new Error("Decrypted template is not an array");
      }

      if (storedDescriptor.some(isNaN)) {
        throw new Error("Decrypted template contains invalid numbers");
      }

      const liveDescriptor = Array.from(facialData);
      if (!Array.isArray(liveDescriptor) || liveDescriptor.some(isNaN)) {
        throw new Error("Invalid live facial data format");
      }

      matchDistance = calculateDistance(storedDescriptor, liveDescriptor);

      if (matchDistance > FACE_MATCH_THRESHOLD) {
        logAudit("VOTER_LOGIN_FAILURE", {
          userId: voter._id,
          userModel: "Voter",
          details: {
            loginIdentifier,
            reason: "Biometric verification failed",
            matchDistance,
          },
          ipAddress: req.ip,
          status: "FAILURE",
        });
        return res.status(401).json({
          message: "Biometric verification failed. Please try again.",
        });
      }

      // Generate JWT token
      const token = generateToken(voter._id);

      logAudit("VOTER_LOGIN_SUCCESS", {
        userId: voter._id,
        userModel: "Voter",
        details: { loginIdentifier },
        ipAddress: req.ip,
        status: "SUCCESS",
      });

      res.status(200).json({
        _id: voter._id,
        name: voter.name,
        email: voter.email,
        nationalID: voter.nationalID,
        isRegistered: voter.isRegistered,
        token,
      });
    } catch (error) {
      console.error("Error during biometric verification:", error);
      logAudit("VOTER_LOGIN_FAILURE", {
        userId: voter._id,
        userModel: "Voter",
        details: {
          loginIdentifier,
          reason: "Biometric verification error",
          error: error.message,
        },
        ipAddress: req.ip,
        status: "FAILURE",
      });
      res.status(500).json({
        message: "Error during biometric verification",
        error: error.message,
      });
    }
  } catch (error) {
    logAudit("VOTER_LOGIN_FAILURE", {
      details: {
        loginIdentifier,
        reason: "Server error",
        error: error.message,
      },
      ipAddress: req.ip,
      status: "FAILURE",
    });
    res
      .status(500)
      .json({ message: "Server error during login", error: error.message });
  }
});

module.exports = router;
