import { useState, useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import { loadModels } from "../utils/faceDetectionModels";

const useFaceDetection = () => {
  const [webcamStream, setWebcamStream] = useState(null);
  const [faceDetectionStatus, setFaceDetectionStatus] = useState("");
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [faceDescriptor, setFaceDescriptor] = useState(null);
  const [isModelsLoaded, setIsModelsLoaded] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const initializeModels = async () => {
      try {
        console.log("Loading face detection models...");
        await loadModels();
        console.log("Face detection models loaded successfully");
        setIsModelsLoaded(true);
        setFaceDetectionStatus("Models loaded. Starting webcam...");
        handleStartWebcam();
      } catch (error) {
        console.error("Error loading face-api models:", error);
        setFaceDetectionStatus(
          `Error loading models: ${error.message}. Ensure models are in public/models.`
        );
      }
    };
    initializeModels();
  }, []);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  useEffect(() => {
    const video = videoRef.current;

    if (webcamStream && video) {
      video.srcObject = webcamStream;
      video.onloadedmetadata = () => {
        // Check if video is still valid before playing
        if (videoRef.current) {
          videoRef.current
            .play()
            .then(() => {
              setIsVideoReady(true);
            })
            .catch((error) => {
              console.error("Error starting video playback:", error);
              setFaceDetectionStatus(
                "Error starting video playback. Please try again."
              );
            });
        }
      };
    }

    // Cleanup function
    return () => {
      if (video) {
        video.onloadedmetadata = null;
      }
    };
  }, [webcamStream]);

  const handleStartWebcam = async () => {
    setFaceDetectionStatus("");
    setCapturedImage(null);
    setFaceDescriptor(null);
    setIsVideoReady(false);
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoDevices.length === 0) {
        throw new Error(
          "No video devices found. Please connect a webcam and try again."
        );
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
        },
      });

      setWebcamStream(stream);
      setFaceDetectionStatus("");
    } catch (err) {
      console.error("Detailed webcam error:", {
        name: err.name,
        message: err.message,
        stack: err.stack,
      });
      let errorMessage = "Error accessing webcam. ";

      if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
        errorMessage +=
          "No webcam found. Please connect a webcam and try again.";
      } else if (
        err.name === "NotAllowedError" ||
        err.name === "PermissionDeniedError"
      ) {
        errorMessage +=
          "Camera permission denied. Please allow camera access and try again.";
      } else if (
        err.name === "NotReadableError" ||
        err.name === "TrackStartError"
      ) {
        errorMessage +=
          "Camera is in use by another application. Please close other applications using the camera and try again.";
      } else {
        errorMessage += "Please check your camera connection and permissions.";
      }

      setFaceDetectionStatus(errorMessage);
    }
  };

  const handleStopWebcam = () => {
    if (webcamStream) {
      webcamStream.getTracks().forEach((track) => track.stop());
      setWebcamStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
      videoRef.current.onloadedmetadata = null; // Clean up event handler
    }
    setIsVideoReady(false);
  };

  const handleCapturePhoto = async () => {
    if (!videoRef.current || !webcamStream) {
      setFaceDetectionStatus("Webcam not active.");
      return;
    }

    if (!isModelsLoaded) {
      setFaceDetectionStatus(
        "Face detection models are still loading. Please wait..."
      );
      return;
    }

    setIsLoading(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Ensure video dimensions are valid
    if (!video.videoWidth || !video.videoHeight) {
      setIsLoading(false);
      setFaceDetectionStatus(
        "Video not ready. Please wait for camera to initialize."
      );
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    const imageDataUrl = canvas.toDataURL("image/jpeg");
    setCapturedImage(imageDataUrl);

    try {
      console.log("Starting face detection...");
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors();
      console.log("Face detection completed. Detections:", detections.length);

      if (detections.length === 0) {
        setFaceDetectionStatus("No face detected. Try again.");
        setFaceDescriptor(null);
      } else if (detections.length > 1) {
        setFaceDetectionStatus("Multiple faces detected. Only one person.");
        setFaceDescriptor(null);
      } else if (detections[0].descriptor) {
        setFaceDetectionStatus("");
        setFaceDescriptor(Array.from(detections[0].descriptor));
      } else {
        setFaceDetectionStatus("Face detected, but no features. Try again.");
        setFaceDescriptor(null);
      }
    } catch (error) {
      console.error("Error during face detection process:", error);
      let detailedMessage = "Error processing facial data. ";

      if (error instanceof Error) {
        detailedMessage += `Details: ${error.message}. `;
      }

      detailedMessage +=
        "Please try again. Ensure your face is well-lit and centered.";

      setFaceDetectionStatus(detailedMessage);
      setFaceDescriptor(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      handleStopWebcam();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    webcamStream,
    faceDetectionStatus,
    isVideoReady,
    isLoading,
    capturedImage,
    faceDescriptor,
    videoRef,
    canvasRef,
    handleStartWebcam,
    handleStopWebcam,
    handleCapturePhoto,
    handleVideoReady,
    isModelsLoaded,
  };
};

export default useFaceDetection;
