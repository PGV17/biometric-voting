import React, { useEffect, useRef } from "react";
import useFaceDetection from "../hooks/useFaceDetection";
import styles from "./WebcamCapture.module.css";

const WebcamCapture = ({
  onCapture,
  onCancel,
  buttonText = "Capture Photo",
  showCancelButton = true,
  cancelButtonText = "Cancel",
  className = "",
}) => {
  const {
    webcamStream,
    faceDetectionStatus,
    isVideoReady,
    isLoading,
    capturedImage,
    faceDescriptor,
    videoRef,
    canvasRef,
    handleCapturePhoto,
    handleVideoReady,
    handleStopWebcam,
    isModelsLoaded,
  } = useFaceDetection();

  const hasCaptured = useRef(false);
  const stopWebcamRef = useRef(handleStopWebcam);

  // Update ref when handleStopWebcam changes
  useEffect(() => {
    stopWebcamRef.current = handleStopWebcam;
  }, [handleStopWebcam]);

  // Cleanup: Stop webcam when component unmounts
  useEffect(() => {
    return () => {
      console.log("WebcamCapture unmounting - stopping webcam");
      if (stopWebcamRef.current) {
        stopWebcamRef.current();
      }
    };
  }, []); // Empty dependency array - only runs on mount/unmount

  useEffect(() => {
    if (faceDescriptor && capturedImage && onCapture && !hasCaptured.current) {
      hasCaptured.current = true;
      onCapture({
        image: capturedImage,
        descriptor: faceDescriptor,
      });
    }
  }, [faceDescriptor, capturedImage, onCapture]);

  const handleCapture = async () => {
    if (!videoRef.current || !webcamStream) {
      return;
    }

    try {
      hasCaptured.current = false; // Reset the capture flag
      await handleCapturePhoto();
    } catch (error) {
      console.error("Error during face capture:", error);
    }
  };

  // Reset capture flag when webcam is stopped
  useEffect(() => {
    if (!webcamStream) {
      hasCaptured.current = false;
    }
  }, [webcamStream]);

  return (
    <div className={`${styles["webcam-section"]} ${className}`}>
      {!isModelsLoaded && (
        <div className="flex items-center justify-center gap-sm">
          <span className="spinner" />
          <span>Loading face detection models...</span>
        </div>
      )}

      {webcamStream && (
        <div className={styles["webcam-container"]}>
          <div className={styles["webcam-video-wrapper"]}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className={styles["webcam-video"]}
              onLoadedMetadata={handleVideoReady}
            />
            <canvas ref={canvasRef} className={styles["face-canvas"]} />
          </div>

          <div className={styles["webcam-controls"]}>
            <button
              type="button"
              onClick={handleCapture}
              className="btn-primary"
              disabled={isLoading || !webcamStream || !isVideoReady}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-sm">
                  <span className="spinner" />
                  Processing...
                </span>
              ) : (
                buttonText
              )}
            </button>

            {showCancelButton && (
              <button
                type="button"
                onClick={onCancel}
                className="btn-secondary"
                disabled={isLoading}
              >
                {cancelButtonText}
              </button>
            )}
          </div>
        </div>
      )}

      {faceDetectionStatus && (
        <div
          className={`alert ${
            faceDetectionStatus.toLowerCase().includes("error") ||
            faceDetectionStatus.toLowerCase().includes("failed") ||
            faceDetectionStatus.toLowerCase().includes("no face") ||
            faceDetectionStatus.toLowerCase().includes("multiple faces")
              ? "alert-error"
              : "alert-info"
          }`}
        >
          {faceDetectionStatus}
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
