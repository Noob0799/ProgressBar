import { useEffect, useState, useRef } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((progress) => progress + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress == 100) clearInterval(intervalRef.current);
  }, [progress]);

  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar
        progress={progress}
        onComplete={() => setIsComplete(true)}
      />
      <span className="progress-status">
        {isComplete ? "Completed" : "Loading..."}
      </span>
    </div>
  );
}

export default App;
