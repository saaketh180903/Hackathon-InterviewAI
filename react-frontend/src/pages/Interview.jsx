import React, { useEffect, useState } from 'react'
import Information from '../components/core/Information'
import WebcamStreamCapture from "../components/core/Webcam";
import AudioRecorder from '../components/core/AudioRecorder';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';



const Interview = () => {
 const questions = [
   "What is React?",
   "Explain useEffect in React.",
   "What is the Virtual DOM?",
   "Explain the use of Redux.",
   "What are props in React?",
   "What is the purpose of keys in lists?",
   "How does context API work?",
   "What is a higher-order component?",
   "Explain lifecycle methods in class components.",
   "What is the difference between state and props?"
 ]


 const [currentIndex, setCurrentIndex] = useState(0)
 const [timeLeft, setTimeLeft] = useState(10)
 const [countdown, setCountdown] = useState(5);
 const [showCountdown, setShowCountdown] = useState(true);
 const [timestamps, setTimestamps] = useState([]);


 const navigate = useNavigate();


 useEffect(() => {
   setCurrentIndex(0);
   setTimeLeft(10);
   setCountdown(5);
   setShowCountdown(true);
   setTimestamps([]);
 }, []);


 useEffect(() => {
   if (showCountdown) {
     setCountdown(5);
   } else {
     setTimeLeft(10);
   }
 }, [showCountdown]);

 const transitionLock = useRef(false);

 useEffect(() => {
  let timer;

  if (showCountdown) {
    timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setShowCountdown(false);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);
  } else if (currentIndex < questions.length) {
    timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setTimeLeft(0);

          // Avoid triggering multiple transitions
          if (transitionLock.current) return prev;
          transitionLock.current = true;

          const stopEvent = new Event('stopRecording');
          window.dispatchEvent(stopEvent);

          setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setShowCountdown(true);
            setTimeLeft(10);

            const startEvent = new Event('startRecording');
            window.dispatchEvent(startEvent);

            transitionLock.current = false; // reset the lock after transition
          }, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  return () => clearInterval(timer);
}, [showCountdown, currentIndex]);


 useEffect(() => {
   if (!showCountdown && currentIndex < questions.length) {
     const startTime = new Date();
     setTimestamps((prev) => {
       const newTimestamps = [...prev];
       newTimestamps[currentIndex] = { start: startTime, end: null };
       return newTimestamps;
     });


     const startEvent = new Event('startRecording');
     window.dispatchEvent(startEvent);
   }
 }, [showCountdown, currentIndex]);


 useEffect(() => {
   if (!showCountdown && currentIndex > 0) {
     const endTime = new Date();
     setTimestamps((prev) => {
       const newTimestamps = [...prev];
       newTimestamps[currentIndex - 1].end = endTime;
       console.log('Timestamps after question', currentIndex, ':', newTimestamps);
       return newTimestamps;
     });
   }
 }, [showCountdown, currentIndex]);


 useEffect(() => {
   if (currentIndex >= questions.length) {
     const stopEvent = new Event('stopRecording');
     window.dispatchEvent(stopEvent);
     navigate('/thank-you');
   }
 }, [currentIndex, questions.length, navigate]);


 return (
   <div className='flex gap-14 w-full min-h-screen border pt-15 px-6'>
     <div className='flex flex-col gap-10 justify-center items-center flex-1 border'>
       <div className='text-center space-y-4'>
         {showCountdown ? (
           <p className='text-lg'>Next question in: {countdown}s</p>
         ) : currentIndex < questions.length ? (
           <>
             <h2 className='text-xl font-semibold'>Question {currentIndex + 1}</h2>
             <p className='text-lg'>{questions[currentIndex]}</p>
             <p className='text-sm text-gray-500'>Time remaining: {timeLeft}s</p>
           </>
         ) : (
           <h2 className='text-xl font-bold text-green-600'>Interview Complete!</h2>
         )}
       </div>


       <div className='flex flex-wrap justify-center gap-2'>
         {questions.map((_, index) => (
           <button
             key={index}
             disabled
             className={`px-4 py-2 rounded text-white text-sm ${index === currentIndex
                 ? 'bg-blue-600'
                 : index < currentIndex
                   ? 'bg-green-500'
                   : 'bg-gray-400'
               }`}
           >
             Question {index + 1}
           </button>
         ))}
       </div>


       <div className="mt-4">
         <Information />
       </div>
     </div>


     <div className="flex-1 border flex justify-center items-center text-gray-500 text-lg">
       <div className="flex flex-col place-content-center pt-10 pr-10">
         <div className="flex pt-20 place-content-center">
           <WebcamStreamCapture currentIndex={currentIndex} />
         </div>
         <div className="flex place-content-center pt-10">
           <AudioRecorder currentIndex={currentIndex} />
         </div>
       </div>
     </div>
   </div>
 )
}


export default Interview;
