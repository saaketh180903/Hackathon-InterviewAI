import React from "react";
import Webcam from "react-webcam";


export default function WebcamStreamCapture({currentIndex}) {
   const webcamRef = React.useRef(null);
   const mediaRecorderRef = React.useRef(null);
   const [capturing, setCapturing] = React.useState(false);
   const [recordedChunks, setRecordedChunks] = React.useState([]);
   const [shouldDownload, setShouldDownload] = React.useState(false); // 💡 new state


   const handleStartCaptureClick = React.useCallback(() => {
       setRecordedChunks([]);
       setCapturing(true);
       mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
           mimeType: "video/webm"
       });
       mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
       mediaRecorderRef.current.start();
   }, [webcamRef]);
   const handleDataAvailable = React.useCallback(({ data }) => {
       if (data.size > 0) {
           setRecordedChunks((prev) => prev.concat(data));
       }
   }, []);


   const handleStopCaptureClick = React.useCallback(() => {
       mediaRecorderRef.current.stop();
       setCapturing(false);
       setShouldDownload(true); // 💡 this triggers the effect once chunks are available
   }, []);


   // 📦 Download the video as soon as recording stops and data is available
   React.useEffect(() => {
       if (shouldDownload && recordedChunks.length) {
           const blob = new Blob(recordedChunks, {
               type: "video/webm"
           });
           const url = URL.createObjectURL(blob);
           const a = document.createElement("a");
           document.body.appendChild(a);
           a.style = "display: none";
           a.href = url;
           a.download = `react-webcam-stream-${currentIndex + 1}.webm`;
           a.click();
           window.URL.revokeObjectURL(url);
           setRecordedChunks([]);
           setShouldDownload(false); // reset
       }
   }, [shouldDownload, recordedChunks]);


   React.useEffect(() => {
       const startRecording = () => handleStartCaptureClick();
       const stopRecording = () => handleStopCaptureClick();


       window.addEventListener('startRecording', startRecording);
       window.addEventListener('stopRecording', stopRecording);


       return () => {
           window.removeEventListener('startRecording', startRecording);
           window.removeEventListener('stopRecording', stopRecording);
       };
   }, []);


   return (
       <div className="flex flex-col justify-center items-center">
           <div className="flex flex-col items-center w-120 h-90 overflow-hidden rounded-lg">
               <Webcam audio={false} ref={webcamRef} />
           </div>
       </div>
   );
}
