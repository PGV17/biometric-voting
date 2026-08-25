import * as faceapi from 'face-api.js';

let modelsLoaded = false;
let loadingPromise = null;

export const loadModels = async () => {
  if (modelsLoaded) {
    return Promise.resolve();
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
      ]);
      modelsLoaded = true;
      resolve();
    } catch (error) {
      console.error('Error loading face-api models:', error);
      reject(error);
    }
  });

  return loadingPromise;
};

export const isModelsLoaded = () => modelsLoaded;