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
import { useAuth } from "../../contexts/AuthContext";

const VoterLogin = () => {
  const navigate = useNavigate();
  const { login, validateCredentials, error: authError } = useAuth();
  const [formData, setFormData] = useState({
    loginIdentifier: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [facialData, setFacialData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formErrors, setFormErrors] = useState({});
  const [credentialsValidated, setCredentialsValidated] = useState(false);
  const [validating, setValidating] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const { loginIdentifier, password } = formData;

  const validateForm = () => {
    const errors = {};
    if (!loginIdentifier.trim()) {
      errors.loginIdentifier = "Email or Aadhaar Number is required";
    }
    if (!password) {
      errors.password = "Password is required";
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
      await handleLogin(capturedData.descriptor);
    } else {
      setError("Failed to capture facial data. Please try again.");
    }
  };

  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setError("Please fill in all required fields correctly.");
      return;
    }

    try {
      setValidating(true);
      await validateCredentials({
        loginIdentifier,
        password,
      });
      setCredentialsValidated(true);
      setCurrentStep(2);
    } catch (error) {
      console.error("Error validating credentials:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Invalid credentials. Please try again."
      );
    } finally {
      setValidating(false);
    }
  };

  const handleLogin = async (facialDescriptor) => {
    if (!facialDescriptor) {
      setError("Please capture your biometric data first.");
      return;
    }

    try {
      setLoginSuccess(true); // Mark login as successful to hide webcam
      await login(
        {
          loginIdentifier,
          password,
          facialData: facialDescriptor,
        },
        "voter"
      );

      setFormData({
        loginIdentifier: "",
        password: "",
      });
      setFacialData(null);
      navigate("/vote");
    } catch (error) {
      console.error("Error during login:", error);
      setLoginSuccess(false); // Reset on error
      setError(
        error.response?.data?.message ||
          error.message ||
          "An error occurred. Please try again."
      );
    }
  };

  const steps = [
    { number: 1, label: "Enter Credentials", completed: credentialsValidated },
    {
      number: 2,
      label: "Biometric Verification",
      completed: facialData && facialData.descriptor,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Voter Login</h2>

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

        {(error || authError) && (
          <div className={styles.alert}>
            <FaExclamationCircle className={styles.alertIcon} />
            {error || authError}
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          {currentStep === 1 && (
            <>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="loginIdentifier">
                  Email or Aadhaar Number
                </label>
                <input
                  type="text"
                  id="loginIdentifier"
                  name="loginIdentifier"
                  value={loginIdentifier}
                  onChange={handleChange}
                  className={`form-control ${
                    formErrors.loginIdentifier ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your email or Aadhaar number"
                />
                {formErrors.loginIdentifier && (
                  <span className={styles.errorText}>
                    {formErrors.loginIdentifier}
                  </span>
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
                    placeholder="Enter your password"
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

              <button
                type="submit"
                className={`${styles.button} ${
                  validating ? styles.loading : ""
                }`}
                onClick={handleCredentialsSubmit}
                disabled={validating}
              >
                {validating ? (
                  <span className={styles.loadingSpinner}></span>
                ) : (
                  "Continue to Biometric Verification"
                )}
              </button>
            </>
          )}

          {currentStep === 2 && !loginSuccess && (
            <div className={styles.biometricSection}>
              <h3 className={styles.textLg}>Biometric Verification</h3>
              <p className={styles.biometricDescription}>
                Please position your face within the frame and click capture
              </p>
              <WebcamCapture
                onCapture={handleFacialCapture}
                buttonText={validating ? "Verifying..." : "Capture & Login"}
                showCancelButton={false}
              />
            </div>
          )}

          {loginSuccess && (
            <div className={styles.successMessage}>
              <FaCheckCircle /> Login successful! Redirecting...
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VoterLogin;
