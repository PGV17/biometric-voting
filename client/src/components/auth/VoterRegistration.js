import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WebcamCapture from "../WebcamCapture";
import styles from "./Auth.module.css";
import {
  FaEye,
  FaEyeSlash,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { registerVoter } from "../../utils/api";

const VoterRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nationalID: "",
    contactInfo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [facialData, setFacialData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formErrors, setFormErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const { name, nationalID, contactInfo, email, password, confirmPassword } =
    formData;

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!nationalID.trim()) errors.nationalID = "Aadhaar Number is required";
    if (!contactInfo.trim()) errors.contactInfo = "Contact number is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
    // Clear field-specific error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleFacialCapture = async (capturedData) => {
    if (capturedData && capturedData.descriptor) {
      setFacialData(capturedData);
      await handleRegistration(capturedData.descriptor);
    } else {
      setError("Failed to capture facial data. Please try again.");
    }
  };

  const handleRegistration = async (facialDescriptor) => {
    if (!validateForm()) {
      setError("Please fill in all required fields correctly.");
      return;
    }

    if (!facialDescriptor) {
      setError("Please capture your biometric data first.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const registrationData = {
        ...formData,
        facialData: facialDescriptor,
      };

      setRegistrationSuccess(true); // Mark registration as successful to hide webcam
      const response = await registerVoter(registrationData);

      setFormData({
        name: "",
        nationalID: "",
        contactInfo: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setFacialData(null);
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setRegistrationSuccess(false); // Reset on error
      setError(
        error.response?.data?.message ||
          error.message ||
          "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    {
      number: 1,
      label: "Personal Information",
      completed:
        name &&
        nationalID &&
        contactInfo &&
        email &&
        password &&
        confirmPassword,
    },
    {
      number: 2,
      label: "Biometric Registration",
      completed: facialData && facialData.descriptor,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Voter Registration</h2>

        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div
              key={step.number}
              className={`${styles.step} ${
                currentStep >= step.number ? styles.active : ""
              } ${step.completed ? styles.completed : ""}`}
            >
              <div className={styles.stepNumber}>
                {step.completed ? <FaCheckCircle /> : step.number}
              </div>
              <div className={styles.stepLabel}>{step.label}</div>
            </div>
          ))}
        </div>

        {error && (
          <div className={styles.alert}>
            <FaExclamationCircle className={styles.alertIcon} />
            {error}
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          {currentStep === 1 && (
            <>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={formErrors.name ? styles.inputError : ""}
                />
                {formErrors.name && (
                  <span className={styles.errorText}>{formErrors.name}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="nationalID">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="nationalID"
                  name="nationalID"
                  value={nationalID}
                  onChange={handleChange}
                  className={`form-control ${
                    formErrors.nationalID ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your 12-digit Aadhaar number"
                />
                {formErrors.nationalID && (
                  <span className={styles.errorText}>
                    {formErrors.nationalID}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contactInfo">
                  Contact Number
                </label>
                <input
                  id="contactInfo"
                  type="tel"
                  name="contactInfo"
                  value={contactInfo}
                  onChange={handleChange}
                  required
                  placeholder="Enter your contact number"
                  className={formErrors.contactInfo ? styles.inputError : ""}
                />
                {formErrors.contactInfo && (
                  <span className={styles.errorText}>
                    {formErrors.contactInfo}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className={formErrors.email ? styles.inputError : ""}
                />
                {formErrors.email && (
                  <span className={styles.errorText}>{formErrors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="password">
                  Password
                </label>
                <div className={styles.passwordInputContainer}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                    placeholder="Create a password"
                    className={formErrors.password ? styles.inputError : ""}
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {formErrors.password && (
                  <span className={styles.errorText}>
                    {formErrors.password}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className={styles.passwordInputContainer}>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Confirm your password"
                    className={
                      formErrors.confirmPassword ? styles.inputError : ""
                    }
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {formErrors.confirmPassword && (
                  <span className={styles.errorText}>
                    {formErrors.confirmPassword}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={`${styles.button} ${
                  isLoading ? styles.loading : ""
                }`}
                onClick={() => {
                  if (validateForm()) {
                    setCurrentStep(2);
                  } else {
                    setError("Please fill in all required fields correctly.");
                  }
                }}
                disabled={isLoading}
              >
                Continue to Biometric Registration
              </button>
            </>
          )}

          {currentStep === 2 && !registrationSuccess && (
            <div className={styles.biometricSection}>
              <h3 className={styles.textLg}>Biometric Registration</h3>
              <p className={styles.biometricDescription}>
                Please position your face within the frame and click capture
              </p>
              <WebcamCapture
                onCapture={handleFacialCapture}
                buttonText={isLoading ? "Registering..." : "Capture & Register"}
                showCancelButton={false}
              />
            </div>
          )}

          {registrationSuccess && (
            <div className={styles.successMessage}>
              <FaCheckCircle /> Registration successful! Redirecting to login...
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VoterRegistration;
