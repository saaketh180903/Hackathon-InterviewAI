import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom'; // 🧭 Import navigate hook
import Information from '../components/core/Information';

const Permissions = () => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate(); // 📍 Create navigate function

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setHasPermissions(true);
      } catch (err) {
        setHasPermissions(false);
      } finally {
        setChecking(false);
      }
    };

    checkPermissions();
  }, []);

  const handleProceed = () => {
    if (hasPermissions) {
      navigate('/interview'); // 🎯 Navigate to thank-you page
    }
  };

  return (
    <div className='flex gap-14 w-full min-h-screen border pt-15'>

      <div className='flex flex-col gap-10 justify-center items-center flex-1 border'>

        <div className='flex flex-col items-center gap-5 p-5 border rounded-3xl border-[#0196B8] w-10/12 text-sm shadow-2xl'>
          <p>Allow camera and microphone to proceed</p>
          <p>Permissions: {checking ? "Checking..." : hasPermissions ? "Granted ✅" : "Denied ❌"}</p>
          <button
            onClick={handleProceed}
            disabled={!hasPermissions}
            className={`px-4 py-2 rounded-xl text-white ${hasPermissions ? "bg-[rgb(86,151,166)]" : "bg-gray-400 cursor-not-allowed"} hover: cursor-pointer`}
          >
            Proceed
          </button>
        </div>

        <Information />
      </div>

      <div className="flex-1 border flex justify-center items-center">
        <Webcam
          audio={true}
          videoConstraints={{ facingMode: "user" }}
          style={{ borderRadius: '1rem' }}
        />
      </div>
    </div>
  );
};

export default Permissions;
