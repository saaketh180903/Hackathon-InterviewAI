import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import Information from '../components/core/Information';

const Permissions = () => {
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [audioAllowed, setAudioAllowed] = useState(false);
  const [checkingCamera, setCheckingCamera] = useState(false);
  const [checkingAudio, setCheckingAudio] = useState(false);

  const navigate = useNavigate();

  const handleEnableCamera = async () => {
    setCheckingCamera(true);
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraAllowed(true);
    } catch (err) {
      setCameraAllowed(false);
      alert("Camera access denied or blocked.");
    } finally {
      setCheckingCamera(false);
    }
  };

  const handleEnableAudio = async () => {
    setCheckingAudio(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioAllowed(true);
    } catch (err) {
      setAudioAllowed(false);
      alert("Microphone access denied or blocked.");
    } finally {
      setCheckingAudio(false);
    }
  };

  const handleProceed = () => {
    if (cameraAllowed && audioAllowed) {
      navigate('/interview');
    }
  };

  return (
    <div className='flex gap-14 w-full min-h-screen border pt-15'>

      {/* Left Section */}
      <div className='flex flex-col gap-10 justify-center items-center flex-1 border'>

        <div className='flex flex-col items-center gap-5 p-5 border rounded-3xl border-[#0196B8] w-10/12 text-sm shadow-2xl'>
          <p>Enable camera and microphone individually to proceed</p>

          <div className="flex gap-4">
            <button
              onClick={handleEnableCamera}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            >
              {checkingCamera ? "Checking..." : cameraAllowed ? "Camera ✅" : "Enable Camera"}
            </button>

            <button
              onClick={handleEnableAudio}
              className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
            >
              {checkingAudio ? "Checking..." : audioAllowed ? "Audio ✅" : "Enable Audio"}
            </button>
          </div>

          <button
            onClick={handleProceed}
            disabled={!(cameraAllowed && audioAllowed)}
            className={`px-4 py-2 rounded-xl text-white ${cameraAllowed && audioAllowed ? "bg-[rgb(86,151,166)]" : "bg-gray-400 cursor-not-allowed"} hover: cursor-pointer`}
          >
            Proceed
          </button>
        </div>

        <Information />
      </div>

      {/* Right Section - Webcam */}
      <div className="flex-1 border flex justify-center items-center">
        {cameraAllowed ? (
          <Webcam
            audio={audioAllowed}
            videoConstraints={{ facingMode: "user" }}
            style={{ borderRadius: '1rem' }}
          />
        ) : (
          <p className="text-gray-600">Camera not enabled</p>
        )}
      </div>
    </div>
  );
};

export default Permissions;
