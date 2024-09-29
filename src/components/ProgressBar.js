import { useEffect } from "react";

function ProgressBar({ progress, onComplete }) {
    useEffect(() => {
        if(progress == 100) {
            onComplete();
        }
    }, [progress]);

  return (
    <>
      <div className="progress-bar">
        <span
          className="progress-count"
          style={{ color: progress > 51 ? "white" : "black" }}
        >
          {progress} %
        </span>
        <div
          className="progress-loader"
          style={{
            transform: `scaleX(${progress / 100})`,
            transformOrigin: "left",
          }}
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progress}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
