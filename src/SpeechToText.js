import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

const SpeechToText = () => {
  const [message, setMessage] = useState("");
  const commands = [
    {
      command: "Search * in *",
      callback: (a, b) => setMessage(`Your searched ${a} in ${b}`)
    }
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button
        onClick={() => {
          resetTranscript();
          setMessage("");
        }}
      >
        Reset
      </button>
      <p>Transcript: {transcript}</p>
      <p>Message: {message}</p>
    </div>
  );
};
export default SpeechToText;
