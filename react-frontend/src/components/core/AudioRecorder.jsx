import React, { useState, useEffect, useRef } from 'react';


const AudioRecorder = ({ currentIndex }) => {
 const [transcripts, setTranscripts] = useState([]);
 const recognitionRef = useRef(null);
 const [audioTimestamps, setAudioTimestamps] = useState([]);


 useEffect(() => {
   if (!('webkitSpeechRecognition' in window)) {
     console.error('Web Speech API is not supported in this browser.');
     return;
   }


   const SpeechRecognition = window.webkitSpeechRecognition;
   recognitionRef.current = new SpeechRecognition();
   recognitionRef.current.continuous = true;
   recognitionRef.current.interimResults = true;
   recognitionRef.current.lang = 'en-US';


   recognitionRef.current.onresult = (event) => {
     let interimTranscript = '';
     for (let i = event.resultIndex; i < event.results.length; ++i) {
       if (event.results[i].isFinal) {
         setTranscripts((prev) => {
           const newTranscripts = [...prev];
           newTranscripts[currentIndex] = (newTranscripts[currentIndex] || '') + event.results[i][0].transcript;
           return newTranscripts;
         });
       } else {
         interimTranscript += event.results[i][0].transcript;
       }
     }
   };


   recognitionRef.current.onerror = (event) => {
     console.error('Speech recognition error detected: ' + event.error);
   };


   return () => {
     recognitionRef.current.stop();
   };
 }, [currentIndex]);


 useEffect(() => {
   const handleStart = () => {
     if (recognitionRef.current) {
       recognitionRef.current.start();
       setAudioTimestamps((prev) => {
         const newTimestamps = [...prev];
         newTimestamps[currentIndex] = {
           ...newTimestamps[currentIndex],
           start: new Date(),
         };
         return newTimestamps;
       });
     }
   };


   const handleStop = () => {
     if (recognitionRef.current) {
       recognitionRef.current.stop();
       setAudioTimestamps((prev) => {
         const newTimestamps = [...prev];
         if (newTimestamps[currentIndex]) {
           newTimestamps[currentIndex].end = new Date();
         }
         return newTimestamps;
       });


       // Download transcript for this question
       if (transcripts[currentIndex]) {
         const blob = new Blob([transcripts[currentIndex]], { type: 'text/plain' });
         const url = URL.createObjectURL(blob);
         const a = document.createElement('a');
         a.style = 'display: none';
         a.href = url;
         a.download = `transcript-question-${currentIndex + 1}.txt`;
         document.body.appendChild(a);
         a.click();
         URL.revokeObjectURL(url);
       }
     }
   };


   window.addEventListener('startRecording', handleStart);
   window.addEventListener('stopRecording', handleStop);


   return () => {
     window.removeEventListener('startRecording', handleStart);
     window.removeEventListener('stopRecording', handleStop);
   };
 }, [currentIndex, transcripts]);


 return (
   <div className="audio-recorder">
     <div className="transcripts">
       <h3>Transcripts for Question {currentIndex + 1}:</h3>
       <div className='bg-gray-100 p-4 rounded-lg'>
         <p>{transcripts[currentIndex]}</p>
       </div>
     </div>
   </div>
 );
};


export default AudioRecorder;
