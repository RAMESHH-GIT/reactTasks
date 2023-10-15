import React, { useState, useEffect } from 'react';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        if (seconds === 59) {
          if (minutes === 59) {
            setHours((prevHours) => prevHours + 1);
            setMinutes(0);
          } else {
            setMinutes((prevMinutes) => prevMinutes + 1);
          }
          setSeconds(0);
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running, seconds, minutes]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  return (
    <div>
      <div>
        <label>Hours:</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Minutes:</label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Seconds:</label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <div>
        <p>Time: {hours}h {minutes}m {seconds}s</p>
      </div>
    </div>
  );
}

export default Timer;
